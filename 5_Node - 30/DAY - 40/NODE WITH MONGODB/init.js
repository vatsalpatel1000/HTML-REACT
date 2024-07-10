const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main()
    .then(() => {
        console.log("Connection successful");
        seedDB();
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp', { useNewUrlParser: true, useUnifiedTopology: true });
}

const allChats = [
    {
        from: 'neha',
        to: "priya",
        msg: 'send me your exam sheets',
        created_at: new Date()
    },
    {
        from: 'shee',
        to: "shee",
        msg: 'send me your exam sheets',
        created_at: new Date()
    },
    {
        from: 'hee',
        to: "hee",
        msg: 'send me your exam sheets',
        created_at: new Date()
    },
    {
        from: 'him',
        to: "him",
        msg: 'send me your exam sheets',
        created_at: new Date()
    },
    {
        from: 'they',
        to: "they",
        msg: 'send me your exam sheets',
        created_at: new Date()
    }
];

Chat.insertMany(allChats);

Chat1.save().then((res)=>{
    console.log(res);
})
