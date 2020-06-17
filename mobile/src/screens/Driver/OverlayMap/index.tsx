import React from 'react';
import { Container, CenterTitle, ButtonAccept, ButtonReject, ActionsButton, TextButton } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import useTaxiRequest from '../../../hooks/useTaxiRequest';

interface IProps {
    routeRequestInfo: any
    acceptRoute(data: any): void
}

const OverlayMap: React.FC<IProps> = ({ routeRequestInfo, acceptRoute }) => {
    const [{ data }, setData ] = useTaxiRequest()
    return (
        <Container>
            <FontAwesome5 name="route" size={50} color="blue" />
            <CenterTitle>{routeRequestInfo?.user} esta procurando uma viagem</CenterTitle>
            <ActionsButton>
                <ButtonAccept onPress={() => acceptRoute(routeRequestInfo) }>
                    <TextButton>Aceitar</TextButton>
                </ButtonAccept>
                <ButtonReject onPress={() => setData(null)}>
                    <TextButton>rejeitar</TextButton>
                </ButtonReject>
            </ActionsButton>
        </Container>
    )
}

export default OverlayMap;