import React from 'react';
import { Container, ButtonExit, Text, Center, Img } from './styles';
import { Ionicons } from '@expo/vector-icons';
import img from '../../../assets/carloading.png'
import { userContext } from '../../context/user/UserContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WaintingForRide: React.FC = () => {
  const { user, setUser } = userContext()

  return (
    <Container colors={['#000000', '#4B545A']}>
      <ButtonExit>
        <TouchableOpacity onPress={() => {
          setUser({
            email: user.email,
            isDriver: user.isDriver,
            searchingForRide: false
          })
        }}>
          <Ionicons name="md-close" size={24} color="white" />
        </TouchableOpacity>
      </ButtonExit>
      <Center>
        <Img source={img}/>
      </Center>
      <Text>Procurando....</Text>
    </Container>
  )
}

export default WaintingForRide;