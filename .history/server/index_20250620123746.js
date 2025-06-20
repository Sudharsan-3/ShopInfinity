import express from "express"
import  dotenv from "dotenv"
import { App } from "./routes/Approutes/app";

dotenv.config()

const port = process.env.PORT;
const app = express();

app.use(express.json())





app.listen(port,()=>{
    console.log(`your server is running on the port ${port}`)
})


