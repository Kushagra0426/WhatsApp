//importing -> app config -> middleware -> DB config -> ???? -> api routes -> listener

import express from 'express'
import mongoose from 'mongoose'
import Messages from "./dbMessages.js"
import { promisify } from 'util'

const app = express() //Imported application instance
const port = process.env.PORT || 9000 //Setting up the port for app to run

app.use(express.json())

const connectionURL = 'mongodb+srv://admin:<password>@cluster0.zvebr77.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(connectionURL,{
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/',(req,res)=>res.status(200).send('hello world'));  //Calling application server with get method by hitting the "/" endpoint

app.get('/messages/sync', async(req,res) => {
    try{
        const data = await Messages.find().exec();
        res.status(200).send(data);
    }
    catch(err){
        res.status(500).send(err.message);
    }
});

const createMessage = promisify(Messages.create.bind(Messages));

app.post('/messages/new',async(req,res) => {
    try{
        const dbMessage = req.body;
        const data = await Messages.create(dbMessage);
        res.status(201).send(`New message created:\n ${data}`);
    }
    catch(err){
        res.status(500).send(err.message);
    }
});
//Setting response status code to 200 (means server is OK)

app.listen(port,()=>console.log(`Listening on localhost:${port}`));

