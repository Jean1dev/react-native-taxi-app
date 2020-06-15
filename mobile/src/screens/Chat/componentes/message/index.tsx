import React from 'react';
import {
    MyMessage,
    MyMessageText,
    ReceivedMessage,
    ReceivedMessageText
} from './styles';

interface MessageProps {
    isMyMessage: boolean
    text: string
}

const Message: React.FC<MessageProps> = ({ isMyMessage, text }) => {
    return (
        <>
            {isMyMessage && (
                <MyMessage>
                    <MyMessageText> {text} </MyMessageText>
                </MyMessage>
            )}
            {!isMyMessage && (
                <ReceivedMessage>
                    <ReceivedMessageText> {text} </ReceivedMessageText>
                </ReceivedMessage>
            )}
        </>
    )
}

export default Message;