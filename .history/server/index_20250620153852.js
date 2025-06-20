import express from "express"
import  dotenv from "dotenv"
import { Login } from "./routes/Login$Register/Login.js";
import bodyParser from "body-parser";


dotenv.config()

const port = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Login and Register
app.use("/api/login",Login)
app.use("/api/re")



app.listen(port,()=>{
    console.log(`your server is running on the port ${port}`)
})


