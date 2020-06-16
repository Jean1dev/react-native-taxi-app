import React, { useState, useEffect, useCallback } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Dimensions } from 'react-native';
import { Container } from './styles';
import { GOOGLE_KEY } from '../../constants'
import OverlayMap from './OverlayMap';

interface ILocation {
    latitude: number
    longitude: number,
    error: any
}

const MyMap: React.FC = () => {
    const [location, setLocation] = useState<ILocation | undefined>(undefined)
    const [destination, setDestination] = useState('')

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

    const onChangeDestination = useCallback(async (local: string) => {
        setDestination(local)
        const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${destination}&location=${location?.latitude}, ${location?.longitude}&radius=2000&key=${GOOGLE_KEY}`
        try {
            const result = await fetch(url)
            const json = await result.json()
            console.log(json)
        } catch (error) {
            console.error('error ocurrend when fecth places api')
        }
    }, [destination])

    if (!location) {
        return <Container/>
    }

    return (
        <Container>
            <MapView 
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
                <Marker coordinate={location} />
            </MapView>
            <OverlayMap
                destination={destination}
                setDestination={onChangeDestination}
            />
        </Container>
    );
}

export default MyMap;