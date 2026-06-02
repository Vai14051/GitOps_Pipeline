const express = require("express");
const app = express();

const PORT = 3000;

app.get("/",(req,res)=>{
    return res.send({
        msg:"Hello this is my first deployment give me a apprecitation thanks"
    })
});

app.listen(PORT,()=>{
    console.log(`Server is up and running on PORT ${PORT}`)
});