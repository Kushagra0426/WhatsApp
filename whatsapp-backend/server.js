//importing -> app config -> middleware -> DB config -> ???? -> api routes -> listener

//importing

import express from 'express'
import mongoose from 'mongoose'
import Messages from "./dbMessages.js"
import { promisify } from 'util'
import Pusher from 'pusher'
import cors from 'cors'
import { timeStamp } from 'console'

//app config

const app = express() //Imported application instance
const port = process.env.PORT || 9000 //Setting up the port for app to run
const pusher = new Pusher({
    appId: "YOUR_PUSHER_API_ID_HERE",
    key: "YOUR_PUSHER_KEY_HERE",
    secret: "YOUR_PUSHER_SECRET_HERE",
    cluster: "ap2",
    useTLS: true
  });


//middleware

app.use(express.json());
app.use(cors());
// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","*");
//     res.setHeader("Access-Control-Allow-Headers","*");
//     next();
// });

//DB Config

const connectionURL = 'mongodb+srv://admin:<password>@cluster0.zvebr77.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(connectionURL,{
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection

db.once('open',()=>{
    console.log('DB connected.')
    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on('change',(change)=>{
        console.log("A change occured:",change);

        if(change.operationType === 'insert'){
            const messageDetails = change.fullDocument;
            pusher.trigger('messages','inserted',
            {
                name: messageDetails.name,
                message: messageDetails.message,
                timeStamp: messageDetails.timeStamp,
                received: messageDetails.received
            });
        }
        else{
            console.log('Error triggering Pusher')
        }
    });
});

//API routes
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

//Listener

app.listen(port,()=>console.log(`Listening on localhost:${port}`));

