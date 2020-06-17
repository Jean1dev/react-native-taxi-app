import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const ContentHeader = styled.View`
    background: #f7f5eee8;
    padding-top: 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    align-items: center;
`

export const ContentHeaderPanel = styled.View`
    width: 40px;
    height: 8px;
    border-radius: 4px;
    background: #00000040;
    margin-bottom: 5px;
`

export const Content = styled.View`
    height: 100%;
    width: 100%;
`;

export const Info = styled.View`
    height: 100%;
    width: 100%;
    background: #f7f5eee8 0% 0% no-repeat padding-box;
    box-shadow: 0px -4px 22px #00000029;
    opacity: 1;
`;

export const InputWithIcon = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const InputDiv = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    height: 44px;
    width: 90%;
    margin-left: 55px;
    margin-right: 55px;
    background: #FFFFFF;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.14);
    border-radius: 15px;
`

export const Input = styled.TextInput`
    width: 90%;
`

export const CardLocation = styled.View`
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
    margin-left: 25px;
    margin-right: 25px;
    border: 1px solid white;
`

export const CardTexts = styled.View`
    margin-left: 30px;
`

export const CardTitle = styled.Text`
    font-size: 20px;
`

export const CardSubTitle = styled.Text`
    font-size: 13px;
    color: #97ADB6;
`

export const Scroll = styled.ScrollView``

export const DestinationLocationText = styled.Text`
    margin-left: 30px;
    font-size: 18px;
    line-height: 28px;
    color: #3E4958;
`