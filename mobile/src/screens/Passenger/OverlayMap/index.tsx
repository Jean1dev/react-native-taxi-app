import React, { useState, useCallback } from 'react';
import BottomSheet from 'reanimated-bottom-sheet'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Keyboard } from 'react-native'
import {
    Container,
    Info,
    Input,
    InputWithIcon,
    CardLocation,
    CardSubTitle,
    CardTexts,
    Content,
    ContentHeader,
    ContentHeaderPanel,
    InputDiv,
    Scroll,
    DestinationLocationText
} from './styles';
import { EvilIcons, Entypo } from '@expo/vector-icons';
import { GOOGLE_KEY } from '../../../constants'
import _ from 'lodash'
import BookRide from '../../../components/BookRider';

interface IOverlayProp {
    latitude: number
    longitude: number
    onConfirmDestination(local: string, destinationName: string): void
}

const OverlayMap: React.FC<IOverlayProp> = ({ latitude, longitude, onConfirmDestination }) => {
    const [destination, setDestination] = useState('')
    const [predictions, setPredictions] = useState([])
    const [currentPredict, setCurrentPredict] = useState({})
    const [destinationConfirmed, setDestinationConfirmed] = useState(false)

    const fetchPredicitions = useCallback(async (local: string) => {
        const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${local}&location=${latitude}, ${longitude}&radius=2000&key=${GOOGLE_KEY}`
        try {
            const result = await fetch(url)
            const json = await result.json()
            setPredictions(json.predictions)
        } catch (error) {
            console.error('error ocurrend when fecth places api')
        }
    }, [destination])

    const onChangeDestination = useCallback((local: string) => {
        setDestination(local)
        onChangeDestinationDebounced(local)
    }, [])

    const confirmDestination = useCallback((predict) => {
        setDestinationConfirmed(true)
        Keyboard.dismiss()
        setCurrentPredict(predict)
        setDestination(predict.structured_formatting.main_text)
        onConfirmDestination(predict.place_id, predict.structured_formatting.main_text)
        setPredictions([])
    }, [])

    const onChangeDestinationDebounced = _.debounce(fetchPredicitions, 1000)

    const renderContent = () => (
        <Content>
            <Info>
                <InputWithIcon>
                    <InputDiv>
                        <EvilIcons name="search" size={24} color="blue" />
                        <Input
                            value={destination}
                            onChangeText={onChangeDestination} />
                    </InputDiv>
                </InputWithIcon>
                {destinationConfirmed && (<BookRide locationDetails={{
                    longitude: longitude,
                    latitude: latitude,
                    predict: currentPredict
                }} />)}
                {!destinationConfirmed && (
                    <Scroll>
                        <DestinationLocationText>Lugares</DestinationLocationText>
                        {predictions.map((predict: any) => (
                            <TouchableOpacity
                                key={predict.id}
                                onPress={() => confirmDestination(predict)}>
                                <CardLocation >
                                    <Entypo name="location" size={24} color="gray" />
                                    <CardTexts>
                                        {/* <CardTitle> Locais </CardTitle> */}
                                        <CardSubTitle>{predict.description}</CardSubTitle>
                                    </CardTexts>
                                </CardLocation>
                            </TouchableOpacity>
                        ))}
                    </Scroll>
                )}
            </Info>
        </Content>
    )

    const renderHeader = () => (
        <ContentHeader>
            <ContentHeaderPanel />
        </ContentHeader>
    )

    return (
        <Container>
            <BottomSheet
                snapPoints={[350, 300, 100]}
                renderContent={renderContent}
                renderHeader={renderHeader}
            />
        </Container>
    )
}

export default OverlayMap;