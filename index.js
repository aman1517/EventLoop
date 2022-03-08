const express= require("express");
const app=express();
const book=require("./book.json");
app.get("/book",(req,res)=>{
   
    res.send({"book":book});

})

app.listen(3005,()=>{
   console.log("Listening to the Port on 3005")
})