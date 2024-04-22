import express from "express";
import cors from 'cors'
import db from "./database/db.js"

import blogRoutes from './routes/routesblog.js'
import userRoutes from './routes/routes.js'
import contentRoutes from './routes/routesContent.js'


const app = express()
app.use(cors());
// app.use(cors())

app.use(express.json())

app.use('/blogs', blogRoutes)
app.use('/users', userRoutes);
app.use("/contents", contentRoutes)

try{
    db.authenticate()
    console.log('Conexion exitosa a la DB')

}catch(error){
    console.log(`El error de conexion es: ${error}`)

}



app.get('/',(req, res)=>{
    res.send('Hola a todos')
})
app.listen(8000, ()=>{
    console.log('server up running in http://localhost:8000/')
})


// const express = require('express')
// const mysql = require('mysql');
// const cors = require('cors');


// const app = express();
// app.use(cors());
// const db = mysql.createConnection({

// })

// app.listen(8000, ()=>{
//     console.log("listening..");
// })