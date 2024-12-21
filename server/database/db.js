import mongoose, { connect } from "mongoose";

const ConnectDB = async () =>{
    try {
         await mongoose.connect(process.env.MONGO_URI);
         console.log('MongoDB Connected')
    }catch(error){
        console.log("error occured",error)
    }
}
export default ConnectDB;