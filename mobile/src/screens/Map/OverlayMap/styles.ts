import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const Info = styled.View`
    width: 100%;
    height: 206px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px -4px 22px #00000029;
    opacity: 1;
    position: absolute;
    bottom: 0;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

export const InputWithIcon = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Input = styled.TextInput`
    margin-top: 20px;
    height: 44px;
    width: 90%;
    margin-left: 55px;
    margin-right: 55px;
    background: #FFFFFF;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.14);
    border-radius: 15px;
    border: 1px solid #97ADB6;
    
`

export const CardLocation = styled.View`
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
    margin-left: 55px;
    margin-right: 55px
`

export const CardTexts = styled.View``

export const CardTitle = styled.Text``

export const CardSubTitle = styled.Text``