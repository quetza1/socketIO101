// We need http because we don't have express
const http = require('http')
// We need socket.io
const socketio = require('socket.io')

// We make an http server with node
const server = http.createServer((req, res) => {
  res.end('I am connected')
})

const io = socketio(server, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket, req) => {
  socket.emit('welcome', 'Welcome to the socket.io server')
  socket.on('message', (msg) => {
    console.log(msg)
  })
})

server.listen(8000)
