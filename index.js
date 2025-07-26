const express=require("express");
const path= require("path");
const mongoose = require('mongoose');
const Chat=require("./models/chat.js");
const methodOverride = require('method-override');

const app=express();
app.use(methodOverride('_method'));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));


main().then(()=>{
    console.log("connection built successfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//index route
app.get("/chats",async (req,res)=>{
    let chats= await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});

app.get("/chats/new",(req,res)=>{
    res.render("newChat.ejs");
})

app.post("/chats/new", async (req, res) => {
    let { from, msg, to } = req.body;
    const newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });

    console.log(newChat);

    try {
        await newChat.save();
        res.redirect("/chats");
    } catch (err) {
        console.log(err);
        res.send("Error saving chat");
    }
});

app.get("/chats/:id/update",async (req,res)=>{
    let id=req.params.id;
    let data;
    await Chat.findById(id).then((result)=>{
        data=result;
    })
    res.render("updateChat.ejs",{data});
});

app.put("/chats/:id",async(req,res)=>{
    let id=req.params.id;
    console.log("Params:", req.params);
console.log("Body:", req.body);
    try{
        await Chat.findByIdAndUpdate(id, { msg: req.body.msg });
        res.redirect("/chats");
    }catch(err){
        console.log(err);
        res.send("Error in updating message!");
    }

})

app.delete("/chats/:id/delete", async(req,res)=>{
    let id=req.params.id;
    try{
        await Chat.findByIdAndDelete(id);
        res.redirect("/chats");
    }catch(err){
        console.log(err);
        res.send("Some error occured in deleting the chat...")
    }
});

app.listen(8080,()=>{
    console.log("listening on port 8080...");
})