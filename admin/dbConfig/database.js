import mongoose from "mongoose"

const connectDatabase = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connect")
    }catch(error){
        console.log("error")
    }
}

export default connectDatabase