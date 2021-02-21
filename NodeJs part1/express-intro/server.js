const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

function middleware1 (req, res, next) {
    console.log(req.url)
    res.send('sidubgisdugb')
    next()
}
//if we do not call next and not call res.send then server will be hanged.
//if we try to send request 2 times then server will be hanged.
//so at one req we should send only one response(only one).
// so this case will give error....
function middleware2 (req, res, next) {
    console.log(req.hostname)

    res.send('sidubgisdugb')
}
// so at one req only one response....

app.get('/x', middleware1, middleware2)



app.listen(3333, () => {
    console.log('server started on http://0.0.0.0:3333')
})