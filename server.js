const webSocket=require('ws')
const server=new webSocket.Server({port:1000})

let settingsObject={chanels:[{isOpen:false,temperature:50},{isOpen:true,temperature:70},{isOpen:true,temperature:20},{isOpen:true,temperature:50},{isOpen:true,temperature:70},{isOpen:true,temperature:70}],sQual:50,tRTC:30}

server.on('connection',(ws)=>{
    ws.send(JSON.stringify(settingsObject));
    ws.on('message',(messageData)=>{
        server.clients.forEach(client=>{
            settingsObject={...settingsObject,...JSON.parse(messageData)}
            if(client.readyState===webSocket.OPEN){
                    ws.send(JSON.stringify(settingsObject))
            }
        })
    })
})