// getting-started.j-mongoose
const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
    .then((res)=>{
    console.log(res);
    console.log("connection successfull");
    })
    .catch((err) => {
        console.log(err)
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


//SCHEMA    => Structure of collection/ table 
const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number
});

//MODEL     => is a class which we construct document
const User = mongoose.model("User",userSchema);         // create collection/ table in mongodb          user => users  == saved in mongodb
// const Employee = mongoose.model("Employee",userSchema); 

//INSERT       
//Insert once
const user2 = new User({
    name : "acccat",
    email : "aacct@gmail.com",
    age : 183442,
});
user2.save()                  // save the data in mongodb => it is async function return promises
    .then((res)=>{
        console.log(res);
    })
    .catch((err) =>{
        console.log(err);
    });

//Insert many
User.insertMany([
    { name : "he", email : "he@gmail.com", age : 50},
    { name : "She", email : "She@gmail.com", age : 150},
    { name : "the", email : "the@gmail.com", age : 500},   
])

//FIND
User.find({})                        //                
    .then((res)=>{
        console.log(res)                                 
        console.log(res[0])
        console.log(res[0].name) 
    })
    .catch((err)=>{
        console.log(err);
    })
    
//Find one
User.findOne({ age: {$gt: 47} }) 
    .then((res)=>{
        console.log(res)                                 
        console.log(res[0])
        console.log(res[0].name) 
    })
    .catch((err)=>{
        console.log(err);
    })

//Find by ID
User.findById("101")
    .then((res)=>{
        console.log(res)                                 
        console.log(res[0])
        console.log(res[0].name) 
    })
    .catch((err)=>{
        console.log(err);
    })

//UPDATE
//update One
User.updateOne({ name : 'vat' }, {age: 18})                
    .then((res)=>{
        console.log(res)     
    })
    .catch((err)=>{
        console.log(err);
    });

//update Many
User.updateMany({ age: { $gt: 18}}, { age: 18 })
    .then((res)=>{
        console.log(res)     
    })
    .catch((err)=>{
        console.log(err);
    });
    
//findOne and update
User.findOneAndUpdate({ name : 'vat'}, { age: 18 }, {new : true })      //  (<find>,<Update>,<show updated value>)
    .then((res)=>{
        console.log(res)     
    })
    .catch((err)=>{
        console.log(err);
    });
    

//findByID and update
User.findById( '101', { age: 18 }, {new : true })      //  (<find>,<Update>,<show updated value>)
    .then((res)=>{
        console.log(res)     
    })
    .catch((err)=>{
        console.log(err);
    });

//DELETE
//Delete One
User.deleteOne({ name: "vat"})    
    .then((res)=>{
        console.log(res)     
    })
    .catch((err)=>{
        console.log(err);
    });

//Delete many  
User.deleteMany({ age: 48})    
    .then((res)=>{
        console.log(res)     
    })
    .catch((err)=>{
        console.log(err);
    }); 
    
//DeleteByID and update
User.findByIdAndDelete( '101')      //  (<find>,<Update>,<show updated value>)
    .then((res)=>{
        console.log(res)     
    })
    .catch((err)=>{
        console.log(err);
    });    

