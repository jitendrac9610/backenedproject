import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config({path:'./env'})
import { app } from "./app.js";

connectDB()

.then(()=>{
    app.listen(process.env.PORT || 3001,()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    })

})

.catch((err)=> {
    console.log("mongo db connection failed !!!",err);
})