import React, { useState, useCallback } from 'react';
import {
  Container,
  Avatar,
  Body,
  ButtonCall,
  ButtonIcon,
  Footer,
  Header,
  HeaderSubTitle,
  HeaderText,
  InputMessage,
  HeaderTitle,
  Image
} from './styles';
import { AntDesign, Feather } from '@expo/vector-icons';
import Message from './componentes/message';
import useWebSocket, { MessageType } from './hooks/useWebSocket';

const Chat: React.FC = () => {
  const [{ messages }, setMyMessage] = useWebSocket()
  const [message, setMessage] = useState('')

  const submitChatMessage = useCallback(() => {
    setMyMessage(message)
    setMessage('')
  }, [message])

  return (
    <Container>
      <Header>
        <ButtonIcon>
          <AntDesign name="left" size={24} color="black" />
        </ButtonIcon>
        <HeaderText>
          <HeaderTitle>Patrick</HeaderTitle>
          <HeaderSubTitle>Volkswagem Jetta HSBC-7389</HeaderSubTitle>
        </HeaderText>
        <Avatar source={{ uri: 'https://api.adorable.io/avatars/285/abott@adorable.png' }} />
      </Header>
      <Body>
        {!messages.length && <Image source={require('../../../assets/chat.png')}></Image>}
        {messages.map((message: MessageType) => (
          <Message key={Math.random()} text={message.text} isMyMessage={message.myMessage} />
        ))}
      </Body>
      <Footer>
        <ButtonCall>
          <Feather name="phone-call" size={24} color="black" />
        </ButtonCall>
        <InputMessage
          value={message}
          placeholder="Start typing here"
          onSubmitEditing={submitChatMessage}
          onChangeText={text => setMessage(text)}
        />
      </Footer>
    </Container>
  )
}

export default Chat