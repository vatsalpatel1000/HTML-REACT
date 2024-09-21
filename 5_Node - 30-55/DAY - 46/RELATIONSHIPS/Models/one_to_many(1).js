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

// customerSchema.pre("findOneAndDelete", async () => {                     // Handling Deletion Middleware
//         console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete", async (customer) => {               // Handling Deletion Middleware  => means if customer is delete then order will also delete
    if(customer.orders.length){
        let res = await Orders.deleteMany({ _id : { $in: customer.orders } });
        console.log(res);
    }
});

const Order = mongoose.model('Order',orderSchema);
const Customer = mongoose.model('Customer',CustomerSchema);


const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders","username");        // it will show object esacping the objId and we can print it like array    // it give fill info about object    // username =  it will show only ussername section from order table
    console.log(result[0]);
};

findCustomer();

// In Database only object id will store as a referance of order

const addCust = async () =>{
    let newCust = new Customer({
        name : "karan Arjun"
    });

    let newOrder = new Order({
        item : "Pizza",
        price : 250
    });

    newCust.order.push(newOrder);

    await newOrder.save();
    await newcust.save();

    console.log("Add new customer");
};

const delCust = async () =>{                                                // Delete Customer but order is not delete
    let data = await Customer.findByIdAndDelete("Cust_id paste here");
    console.log(data);
};

//addcust();
delCust();