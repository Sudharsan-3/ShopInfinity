import express from "express"

dotenv

const port = process.env.PORT;
const app = express();




app.listen(port,()=>{
    console.log(`your server is running on the port ${port}`)
})


