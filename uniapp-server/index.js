const express = require("express")
const app = express()
const router = require("./router.js")
const cors = require("cors")

app.use(cors())
app.use("/api",router);

app.listen(3000,() =>{
    console.log("服务器运行在3000端口上")
})