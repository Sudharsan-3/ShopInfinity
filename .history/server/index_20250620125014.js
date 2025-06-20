import express from "express"
import  dotenv from "dotenv"
import { Login } from "./routes/Login$Register/Login.js";



dotenv.config()

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/api/login",Login)



app.listen(port,()=>{
    console.log(`your server is running on the port ${port}`)
})


