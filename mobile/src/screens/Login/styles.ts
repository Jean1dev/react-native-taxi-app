import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 20px;
`

export const Form = styled.View`
    flex: 1;
    width: 303px;
    margin-top: 208px;
    justify-content: flex-start;
    align-items: flex-start;
`

export const Label = styled.Text`
    font-size: 14px;
    font-weight: bold;
`

export const Input = styled.TextInput`
    width: 100%;
    background: #D5DDE0;
    height: 45px;
    margin-top: 5px;
    border-radius: 15px;
`

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    margin-top: 30px;
    background: #1152FD;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
`

export const ButtonText = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 20px;
`

export const LabelFooter = styled.Text`
    color: #97ADB6;
`

export const BlueText = styled.Text`
    color: #1152FD;
`