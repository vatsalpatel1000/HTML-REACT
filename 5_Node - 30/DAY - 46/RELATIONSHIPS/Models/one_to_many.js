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

const addCustomer = async () => {
    let Cust1 = new Customer({
        name : "Rahul kumar",
    });
    
    let order1 = await Order.findOne({item : "Chips" });
    let order2 = await Order.findOne({item : "Chocolate" });

    Cust1.orders.push(order1);
    Cust1.orders.push(order2);

    let result = await cust1.save();
    console.log(result);

    // let result = await Customer.find({});
    // console.log(result);
};

addCustomer();


const addOrders = async () => {
    let res  = await Order.insertMany([
        {item : "Samosa", price : 12},
        {item : "Chips", price : 10},
        {item : "Chocolate", price : 40}
    ]);
    console.log(res);
};

addOrders();

// In Database only object id will store as a referance of order