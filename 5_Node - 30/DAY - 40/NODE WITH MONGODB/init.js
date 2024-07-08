const mongoose = require('mongoose')
const Chat = require('./models/chat.js')

main()
    .then((res)=>{
    console.log(res);
    console.log("connection successfull");
    })
    .catch((err) => {
        console.log(err)
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

const allChats =[
    {
    from : 'neha',
    to : "priya",
    msg : 'send me your exam sheets',
    created_at : new Date()
    },
    {
        from : 'neha',
        to : "priya",
        msg : 'send me your exam sheets',
        created_at : new Date()
        },
        {
            from : 'neha',
            to : "priya",
            msg : 'send me your exam sheets',
            created_at : new Date()
            },
            {
                from : 'neha',
                to : "priya",
                msg : 'send me your exam sheets',
                created_at : new Date()
                },
                {
                    from : 'neha',
                    to : "priya",
                    msg : 'send me your exam sheets',
                    created_at : new Date()
                    },
];

// let Chat1 = new Chat({
    Chat.insertMany(allChats);

Chat1.save().then((res)=>{
    console.log(res);
})