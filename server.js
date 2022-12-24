const http = require("http");
const express = require("express");
const {Server} = require("socket.io");
const port = process.env.PORT || 4000;
const path = require("path");
const pdp = path.join(__dirname,"./build");
const app = express();
const cors = require("cors");
const fs = require("fs");
app.use(cors());
app.use(express.static(pdp));
const server = http.createServer(app);
const io = new Server(server,{cors:{origin:"*"}});

io.on("connection",(client)=>{
    console.log("new web connect");
    client.on("msg",(msg)=> {
        fs.readFile("./database/mensajes.json",(err,data)=> {
            let mensages = JSON.parse(data.toString());
            mensages.push(msg);
            fs.writeFile("./database/mensajes.json",JSON.stringify(mensages),(err)=> {
                if(err)throw err;
                client.broadcast.emit("msg",msg);
            })
        })
    })
    client.on("disconnect",()=>{
        console.log("new web disconnect");
    })
})

server.listen(port,()=> {
    console.log(`server is up on port ${port}!`);
}) 