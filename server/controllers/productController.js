import {v2 as cloudinary} from "cloudinary"
import Product from "../models/Product"

// Add product: /api/product/add
export const addProduct = async (req, res) => {
    try {
        let productData = JSON.parse(req.body.productData)

        const images = req.files

        let imageURL = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {resource_type: "image"})
                return result.secure_url
            })
        )
        await Product.create({...productData, image: imageURL})

        res.json({success: true, message: "Prouct Added"})
        
    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}

// Get Product: /api/product/list
export const productList = async (req, res) => {
    try {
        const products = await Product.find({})
    } catch (error) {
        
    }

}

// Get single : /api/product/id
export const productById = async (req, res) => {

}

// Get product instock : /api/product/stock
export const changeStock = async (req, res) => {

}
