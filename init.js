const mongoose= require("mongoose");
const Chat=require("./models/chat.js")

main().then(()=>{
    console.log("connection built successfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats=[
    {
        from:"rm",
        to:"jin",
        created_at: new Date(),
        msg:"Helloo jin",
    },
    {
        from:"jungkook",
        to:"jin",
        created_at: new Date(),
        msg:"Helloo jin",
    },
    {
        from:"suga",
        to:"jhope",
        created_at: new Date(),
        msg:"Hobaa",
    }
];

Chat.insertMany(allChats).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})


