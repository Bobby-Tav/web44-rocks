require('dotenv').config()//This allows to "inject" fake environment variable

const {PORT} =require("./config")

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')


const server = express();

server.use(express.json())
server.use(cors())
server.use(helmet())

server.get('/',(req,res)=>{
    res.send(`
    <h1> Web 44 is Awesome </h1>
    `)
})


server.use("*",(req,res,next)=>{
    res.json({message:"web 44 id awesome indeed"})
})

server.listen(PORT || 5000,() =>{// heroku uses a different port
    console.log(`listening on ${PORT || 5000}`)
})