import mongoose, { Schema } from "mongoose";

const cartMethod = new Schema({
    cardData :{type:String},
    cardNumber:{type:String},
})

const cardMethidModal = mongoose.model("cardMethod" ,cartMethod )

export default cardMethidModal