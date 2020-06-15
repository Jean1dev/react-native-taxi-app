import React from 'react';
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

const Login: React.FC = () => {
    return (
        <Container>
            <Title>Sign In</Title>
            <Form>
                <Label>EMAIL</Label>
                <Input />
                <Button>
                    <ButtonText>Sign In</ButtonText>
                </Button>
            </Form>
            <LabelFooter>Don't have an account <BlueText>Sign up</BlueText></LabelFooter>
        </Container>

    )
}

export default Login;