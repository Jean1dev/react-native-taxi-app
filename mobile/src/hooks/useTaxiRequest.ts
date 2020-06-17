import { useState } from "react";
import socket from './conexao'

interface ITaxiRequestPayload {
    user: string
}

export default function useTaxiRequest(): any {
    const [data, setData] = useState<ITaxiRequestPayload[]>([])

    socket.on('ride-request', (payload: ITaxiRequestPayload) => {
        setData([...data, payload])
    })

    const requestAccepted = (location: any) => {
        setData([])
        socket.emit('ride-accept', location)
    }

    return [{ data }, setData, requestAccepted ]
}