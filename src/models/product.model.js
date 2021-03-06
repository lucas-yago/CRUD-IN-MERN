const  mongoose  = require("mongoose");

const DataSchema = new mongoose.Schema({
    product_name: String,
    product_description: String,
    product_price: Number,
    products_amount: {type: Number, default: 0}
},{
    timestamps:true
});


const products = mongoose.model("Products", DataSchema);
module.exports = products;
