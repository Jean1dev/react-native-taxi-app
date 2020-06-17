import React, { useState, useEffect, useCallback, useRef } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Dimensions } from 'react-native';
import { Container } from './styles';
import OverlayMap from './OverlayMap';
import PolylineDecode from '@mapbox/polyline'
import { GOOGLE_KEY } from '../../constants'
import useTaxiRequest from '../../hooks/useTaxiRequest';

interface ILocation {
    latitude: number
    longitude: number,
    error: any
}

const Driver: React.FC = () => {
    const [{ data }, setData, requestAccepted ] = useTaxiRequest()
    const [location, setLocation] = useState<ILocation | undefined>(undefined)
    const [coords, setCoords] = useState<any[]>([])
    const mapRef = useRef<any>(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null
            })
        },
            error => {
                setLocation({
                    latitude: 0,
                    longitude: 0,
                    error: error.message
                })
            }, { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 })

    }, [])

    const getRouteDirections = useCallback(async (payload: any) => {
        try {
            requestAccepted(location)
            const local = payload.data.predict.place_id
            const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${location?.latitude}, ${location?.longitude}&destination=place_id:${local}&key=${GOOGLE_KEY}`
            const response = await fetch(url)
            const json = await response.json()
            const points = PolylineDecode.decode(json.routes[0].overview_polyline.points)
            const pointCoords = points.map(point => ({
                latitude: point[0],
                longitude: point[1]
            }))
            setCoords(pointCoords)
            mapRef?.current.fitToCoordinates(pointCoords)
        } catch (error) {
            console.error('error at fecth route api', error.message)
        }
    }, [location])

    if (!location) {
        return <Container />
    }
    
    return (
        <Container>
            <MapView
                ref={mapRef}
                style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                }}
                loadingEnabled
                showsUserLocation
                initialRegion={{
                    latitude: -28.6741027,
                    longitude: -49.1089613,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {coords.length > 1 && (<Marker coordinate={coords[coords.length -1]} />)}
                <Polyline coordinates={coords} strokeWidth={2} strokeColor="blue" />
            </MapView>
            
            {data.length > 0 && ( <OverlayMap acceptRoute={getRouteDirections} routeRequestInfo={data[data.length - 1]}/>)}
        </Container>
    );
}

export default Driver;

/**
 * 
 * if (Platform.OS === 'ios') {
 *      Linking.openURL(`http://maps.apple.com/?daddr=${latitude}, ${longitude})
 *  } else {
 *      Linking.openURL(`https://www.google.com/dir/?api=1&destination=${latitude},${longitude}`)
 * }
 */