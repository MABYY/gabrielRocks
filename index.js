require("dotenv").config() // invoke and run config method. we want the side effect
                            // this allows to inject environment variables  

const { PORT } = require('./config')
const express = require("express")
const cors = require("cors")
const helmet = require("helmet")


const server = express()

server.use(express.json()) // teaches express to parse req.body
server.use(cors()) // generic way of plugging pieces of middleware
server.use(helmet())

server.use('*', (res,req,next)=> {
    res.json({
        message: "Incorrect path"
    })
})

// server.listen(process.env.PORT || 5000 , ()=>{ // the deployment machine uses a different port
//     console.log(`Listening on ${process.env.PORT|| 5000}`)
// })
server.listen( PORT , ()=>{ // the deployment machine uses a different port
    console.log(`Listening on ${PORT}`)
})