import mongoose from "mongoose";

const whatsAppSchema = mongoose.Schema({
    message: String,
    name: String,
    timeStamp: String,
});

export default mongoose.model('messageContent',whatsAppSchema)