import React, { useCallback } from 'react';
import {
  Container,
  Card,
  Content,
  Header,
  Text,
  Avatar,
  HeaderText,
  HearderSubText,
  IconEdit
} from './styles';
import img from '../../../assets/user.png'
import { MaterialIcons, Feather, SimpleLineIcons } from '@expo/vector-icons';
import { userContext } from '../../context/user/UserContext';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler'

const DriverOrPassenger: React.FC = () => {
  const { setUser, user } = userContext()
  const navigation = useNavigation()

  const choseDriver = useCallback(() => {
    setUser({
      email: user.email,
      isDriver: true
    })

    navigation.navigate('Map')
  }, [navigation])

  return (
    <Container>
      <Header>
        <IconEdit>
          <Feather name="edit-2" size={24} color="black" />
        </IconEdit>
        <Avatar source={img} />
        <HeaderText>Bem vindo {user.email}</HeaderText>
        <HearderSubText>Escolha seu caminho</HearderSubText>
      </Header>

      <Content>
        <TouchableOpacity onPress={choseDriver}>
          <Card>
            <MaterialIcons name="local-taxi" size={50} color="blue" />
            <Text>Motorista</Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
          <Card>
            <SimpleLineIcons name="people" size={50} color="blue" />
            <Text>Passageiro</Text>
          </Card>
        </TouchableOpacity>
      </Content>
    </Container>
  )
}

export default DriverOrPassenger;