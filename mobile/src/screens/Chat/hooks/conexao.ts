import io from 'socket.io-client'

const socket: SocketIOClient.Socket = io('http://192.168.1.9:3000')

export default socket