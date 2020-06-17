import socket from './conexao'

export default function useBookRide(): any {

    const bookRide = (user: string, data: any) => {
        socket.emit('book-ride', {
            user,
            data
        })
    }

    return [ bookRide ]
}