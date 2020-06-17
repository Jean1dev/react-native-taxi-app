import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  background: white;
  height: 200px;
  width: 200px;
  border-radius: 10px;
  align-self: center;
  margin-top: 50%;
  align-items: center;
  justify-content: center;
`;

export const CenterTitle = styled.Text`
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    color: #3E4958;
`

export const ActionsButton = styled.View`
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
`

export const ButtonAccept = styled.TouchableOpacity`
    height: 30px;
    width: 90px;
    background: blue;
    border-radius: 10px;
`

export const ButtonReject = styled.TouchableOpacity`
    height: 30px;
    width: 90px;
    background: red;
    border-radius: 10px;
`

export const TextButton = styled.Text`
    color: white;
    text-align: center;
`
