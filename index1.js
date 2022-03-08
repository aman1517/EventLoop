const express= require("express");
const app=express();

app.get("/",(req,res)=>{
   
   res.send("hello")

})

app.listen(3008,()=>{
   console.log("Listening to the Port on 3008")
})