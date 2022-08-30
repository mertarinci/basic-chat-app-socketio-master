const express = require(`express`);
const socket = require("socket.io");
const cors = require('cors')



const app = express()

app.use(cors())
app.use(express.static('public'))

const server = app.listen(3000, () => { console.log(`Server listening port 3000`) })
const io = socket(server)

io.on('connection', (socket) => {
    console.log(socket.id)

    socket.on('chat', data => {
        io.sockets.emit('chat', data)
    })

    socket.on('typing', data => {
        socket.broadcast.emit('typing', data)
    })
})



