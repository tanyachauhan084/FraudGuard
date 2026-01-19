
import dotenv from "dotenv";
import app from "../Backend_fg/App.js";


dotenv.config();


const port= process.env.PORT|| 8000;

app.listen(port, ()=>{
    console.log("It is Connected");
})






