const http = require("http");
const express = require("express");
const port = process.env.PORT || 4300;
const path = require("path");
const pdp = path.join(__dirname,"./build");
const app = express();
app.use(express.static(pdp));
const server = http.createServer(app);
server.listen(port,()=> {
    console.log(`server is up on port ${port}!`);
}) 