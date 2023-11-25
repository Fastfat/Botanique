const http = require('http')
const fs = require('fs')
let server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    if (req.url == '/')
        fs.createReadStream('./public/main.html').pipe(res)
    else if (req.url == '/analytics')
        fs.createReadStream('./public/analytics.html').pipe(res)
    else 
        fs.createReadStream('./public/error.html').pipe(res)
})
const PORT = 3000
const HOST = 'localhost'
server.listen(PORT, HOST, () => {
    console.log(`Server in running: http://${HOST}:${PORT}`)
})