const webSocket=require('ws')
const server=new webSocket.Server({port:1000})

server.on('connection',(ws)=>{
    ws.send('wellcome')
})