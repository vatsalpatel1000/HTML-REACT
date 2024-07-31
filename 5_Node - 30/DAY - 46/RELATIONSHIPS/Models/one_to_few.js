const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
    .then(()=> console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

// One to few approch 
const userSchema = new Schema({
    _id : false,                // stop create two id for 2 location for same user 
    username : String,
    address : [ 
        {
            location: String,
            city : String
        },
    ],
});

const User = mongoose.model("User",userSchema);

const addUser = async() => {
    let user1 = new User({
        username : "sherlockholmes",
        address : [{
            location : '22b Baker Street',
            city : "london"
        }]
    });

    user1.address.push({location:"p32 Wallstreet", city : "london" });
    let result = await user1.save();
    console.log(result);
}

addUser();