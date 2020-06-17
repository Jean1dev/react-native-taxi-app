import React, { useState, useCallback } from 'react';
import {
    Container,
    BlueText,
    Button,
    Input,
    Label,
    ButtonText,
    LabelFooter,
    Title,
    Form
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { userContext } from '../../context/user/UserContext';

const Login: React.FC = () => {
    const { setUser } = userContext()
    const [email, setEmail] = useState('')
    const navigation = useNavigation()

    const submit = useCallback(() => {
        setUser({
            email,
            isDriver: false
        })
        navigation.navigate('chosePath')
    }, [navigation, email])

    return (
        <Container>
            <Title>Sign In</Title>
            <Form>
                <Label>EMAIL</Label>
                <Input 
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Button onPress={submit}>
                    <ButtonText>Sign In</ButtonText>
                </Button>
            </Form>
            <LabelFooter>Don't have an account <BlueText>Sign up</BlueText></LabelFooter>
        </Container>

    )
}

export default Login;