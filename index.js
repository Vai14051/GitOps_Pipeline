const express = require("express");
const app = express();

const PORT = 3000;

app.get("/",(req,res)=>{
    return res.send({
        msg:"hello from the server sss"
    })
});

app.listen(PORT,()=>{
    console.log(`Server is up and running on PORT ${PORT}`)
});