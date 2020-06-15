import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const ButtonIcon = styled.TouchableOpacity`
    margin-top: 10px;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: #FFFFFF;
    border: 1px solid #4B545A;
    align-items: center;
    justify-content: center;
`

export const HeaderText = styled.View`
`

export const HeaderTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.2px;
    color: #3E4958;
`

export const HeaderSubTitle = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.4px;
    color: #97ADB6;
`

export const Avatar = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px;
`

export const Body = styled.View`
    flex: 1;
    align-items: center;
`

export const Image = styled.Image`
    width: 208.53px;
    height: 238.24px;
`

export const Footer = styled.View`
    background: #F3EFEF;
    width: 375px;
    height: 50px;
    flex-direction: row;
`

export const ButtonCall = styled.TouchableOpacity`
    margin-top: 10px;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: #FFFFFF;
    border: 1px solid #4B545A;
    align-items: center;
    justify-content: center;
`

export const InputMessage = styled.TextInput`
    margin-top: 10px;
    height: 38px;
    width: 300px;
    border-radius: 19px;
    background: white;
    border: 1px solid #97ADB6;
    margin-left: 5px;
`