import React from 'react';
import {
    Container,
    Info,
    Input,
    InputWithIcon,
    CardLocation,
    CardSubTitle,
    CardTexts,
    CardTitle
} from './styles';
import { EvilIcons, Entypo } from '@expo/vector-icons';

interface IOverlayProp {
    destination: string
    setDestination(data: string): void
}

const OverlayMap: React.FC<IOverlayProp> = ({ destination, setDestination }) => {
    return (
        <Container>
            <Info>
                <InputWithIcon>
                    <Input
                        value={destination}
                        onChangeText={text => setDestination(text)}
                    >
                        {/* <EvilIcons name="search" size={24} color="blue" /> */}
                    </Input>
                </InputWithIcon>

                <CardLocation>
                    <Entypo name="location" size={24} color="gray" />
                    <CardTexts>
                        <CardTitle>Title</CardTitle>
                        <CardSubTitle>Subtitle</CardSubTitle>
                    </CardTexts>
                </CardLocation>
            </Info>
        </Container>
    )
}

export default OverlayMap;