import express from "express"
import  dotenv from "dotenv"



dotenv.config()

const port = process.env.PORT;
const app = express();

app.use(express.json())

app.use("/api/login")



app.listen(port,()=>{
    console.log(`your server is running on the port ${port}`)
})


