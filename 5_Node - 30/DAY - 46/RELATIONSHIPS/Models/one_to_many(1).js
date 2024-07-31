const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
    .then(()=> console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

// One to many approch 
const orderSchema = new Schema({    
    item : String,
    price : Number,
});

const customerSchema = new Schema({    
    name : String,
    orders : [
        {
            type : Schema.types.objectId,                                   // Store ObjectId
            ref : "Order"
        },
    ],
});

const Order = mongoose.model('Order',orderSchema);
const Customer = mongoose.model('Customer',CustomerSchema);

const findCustomer = async () => {

    let result = await Customer.find({}).populate("orders");        // it will show object esacping the objId and we can print it like array    // it give fill info about object
    console.log(result[0]);
};

findCustomer();

// In Database only object id will store as a referance of order