import mongoose from "mongoose";

const db_Connection= async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoose is connected now okayy");
    }

    catch(error){
console.log("connection failed");
process.exit(1);
    }
}

export default db_Connection;
