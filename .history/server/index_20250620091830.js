import express from "express"
import 

configDotenv.config()

const port = process.env.PORT;
const app = express();




app.listen(port,()=>{
    console.log(`your server is running on the port ${port}`)
})


