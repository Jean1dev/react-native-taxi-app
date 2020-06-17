import React, { useCallback } from 'react';
import {
    Container,
    CarDetails,
    CarName,
    Card,
    ImgCar,
    TravelInfo,
    TravelPrice,
    Badge,
    WhiteText,
    Cents,
    EstimateTimeText,
    TimeText,
    CreditCard,
    Button,
    ButtonText
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler'
import carImg from '../../../assets/car.png'
import cardImg from '../../../assets/card.png'
import { userContext } from '../../context/user/UserContext';
import useBookRide from '../../hooks/useBookRide';

interface ILocationDetails {
    latitude: number
    longitude: number
    predict: any
}

interface IBookRideProps {
    locationDetails: ILocationDetails
}

const BookRide: React.FC<IBookRideProps> = ({ locationDetails }) => {
    const { user, setUser } = userContext()
    const [ bookRide ] = useBookRide()

    const submit = useCallback(() => {
        bookRide(user.email, locationDetails)
        setUser({
            email: user.email,
            isDriver: user.isDriver,
            searchingForRide: true
        })
    }, [user])

    return (
        <Container>
            <Card>
                <CarDetails>
                    <ImgCar source={carImg} />
                    <CarName>Standard</CarName>
                </CarDetails>
                <TravelInfo>
                    <TravelPrice>R$ - 6<Cents>32</Cents> </TravelPrice>
                    <Badge>
                        <WhiteText>3 min</WhiteText>
                    </Badge>
                </TravelInfo>
            </Card>

            <Card>
                <TravelInfo>
                    <EstimateTimeText>Tempo estimado</EstimateTimeText>
                    <TimeText>24 min</TimeText>
                </TravelInfo>
                <CreditCard>
                    <ImgCar source={cardImg}></ImgCar>
                </CreditCard>
            </Card>
            <TouchableOpacity onPress={submit}>
                <Button>
                    <ButtonText>Book ride</ButtonText>
                </Button>
            </TouchableOpacity>

        </Container>
    )
}

export default BookRide;