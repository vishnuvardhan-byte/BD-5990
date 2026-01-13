const http=require('http')
const server=http.createServer((req, res)=>{
res.end("Hello World - Welcome to Media NV")
})
port=3000
server.listen(port,()=>{
console.log(`Server is running on Port http://localhost:${port}`)
})