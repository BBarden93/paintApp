const 
    express = require('express'),
    app = express()
    server = require('http').Server(app)
    io = require('socket.io')(server)

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})



server.listen(3000, (err) => {
    console.log(err || "Server running on Andre 3000")
})