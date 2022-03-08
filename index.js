const express= require("express");
const app=express();
const book=require("./book.json");
app.get("/book",(req,res)=>{
    console.log("Hello")
    res.send({"book":book});

})

app.listen(3000,()=>{
   console.log("Listening to the Port on 3000")
})