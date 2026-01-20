import app from "./App.js";
import dotenv from "dotenv";
import db_Connection from "./db/db_connection.js";

dotenv.config();


const port= process.env.PORT ||8000;


db_Connection()
.then(()=>{
    app.listen(port, ()=>{
        console.log("Server is listening now okayyy");
    })
    })
.catch((err)=>{
console.log(err);

})


