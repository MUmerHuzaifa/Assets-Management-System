const express = require('express');
const app = express();
app.get("/api/createUser",(req,res,next)=>{
    const posts=[
        {
            _id:"72634962934",
            name:"umer huznaifa",
            position:'Angular developer'
        },
        {
            _id:"6545khg345",
            name:"huzaifa",
            position:'Angular '
        },
        {
            _id:"87364hvjh435",
            name:"umer ",
            position:'Angular developer'
        },
    ]
    res.status(200).json({
        message:"post created",
        post:posts
    })
})


module.exports=app;