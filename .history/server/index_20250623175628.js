import express from "express"
import  dotenv from "dotenv"
import { Login } from "./routes/Login$Register/Login.js";
import bodyParser from "body-parser";
import { Register } from "./routes/Login$Register/Register.js";
import cors from "cors"


dotenv.config()

const port = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

// Login and Register
app.use("/api/login",Login)
app.use("/api/register",Register)

// User reading product 

app.use("/api/login",ReadProduct)


app.listen(port,()=>{
    console.log(`your server is running on the port ${port}`)
})


