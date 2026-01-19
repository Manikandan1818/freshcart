import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, requried: true},
    description: {type: Array, requried: true},
    price: {type: Number, requried: true},
    offerPrice: {type: Number, requried: true},
    image: {type: Array, requried: true},
    category: {type: Array, requried: true},
    inStock: {type: Boolean, default: true},
}, {})

const Product = mongoose.models.product || mongoose.model('product', productSchema)

export default Product;