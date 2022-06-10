
const express=require("express");
const bodyparser= require("body-parser");
const today=new Date();
const items=[];
const work=[];
const app=express();
app.set("view engine","ejs");

app.use(bodyparser.urlencoded({extended: true}));//needed to use body-parser
app.use(express.static("public"));//using css and various file in public folder

var options={
    weekday: "long",
    day:"numeric",
    month:"long"
};
var day =today.toLocaleDateString("en-us",options)
app.get("/",function(req,res){
    res.render("list",{kindofday:day,new_items:items});
        
});
app.post("/",function(req,res){
  var item=req.body.newitem;
    items.push(item)
    res.redirect("/")
})
app.listen(3000,function(){
    console.log("server is up and running ")
});