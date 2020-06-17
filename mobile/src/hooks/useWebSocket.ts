import { useState } from "react";
import socket from './conexao'

export interface MessageType {
    text: string
    myMessage: boolean
}

export default function useWebSocket(): any {
    const [messages, setMessages] = useState<MessageType[]>([])

    socket.on('receveid message', (msg: string) => {
        setMessages([...messages, {
            text: msg,
            myMessage: false
        }])
    })

    const setMyMessage = (msg: string) => {
        setMessages([...messages, {
            text: msg,
            myMessage: true
        }])
        socket.emit('chat message', msg)
    }

    return [{ messages }, setMyMessage ]
}