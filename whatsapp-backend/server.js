//importing -> app config -> middleware -> DB config -> ???? -> api routes -> listener

import express from 'express'
import mongoose from 'mongoose'
import Messages from "./dbMessages.js"

const app = express() //Imported application instance
const port = process.env.PORT || 9000 //Setting up the port for app to run

const connectionURL = 'mongodb+srv://admin:<password>@cluster0.zvebr77.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(connectionURL,{
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/',(req,res)=>res.status(200).send('hello world'))  //Calling application server with get method by hitting the "/" endpoint

app.post('/api/v1/messages/new',(req,res) => {
    const dbMessage = req.body
    Messages.create(dbMessage, (err,data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(`new message created: \n ${data}`)
        }
    })
})
//Setting response status code to 200 (means server is OK)

app.listen(port,()=>console.log(`Listening on localhost:${port}`));

