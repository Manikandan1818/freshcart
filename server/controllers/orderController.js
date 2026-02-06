import Order from "../models/Order"
import Product from "../models/Product"

// Place order COD: /api/order/cod

export const placeOrderCOD = async (req, res) => {
    try {
        const {userId, items, address} = req.body
        if(!address || items.length === 0){
            return res.json({success: false, message: "Invalid data"})
        }
        // calculate amount using items
        let amount = await items.reduce(async (acc, item)=> {
            const product = await Product.findById(item.product)
            return (await acc) + product.offerPrice * item.quantity
        }, 0)
        // add 2% tax amount
        amount += Math.floor(amount * 0.02)

        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "COD",
        })
        return res.json({success: true, message: "Order placed sucessfully"})
    } catch (error) {
        console.log(error.message)
        return res.json({success: false, message: error.message})
    }
}