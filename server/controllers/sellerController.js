import jwt from "jsonwebtoken"

// Login Seller : /api/seller/login

export const sellerLogin = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(password === process.env.SELLER_PASSWORD && email === process.env.SELLER_EMAIL){
            const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: "7d"})
        }    

    } catch (error) {
        
    }
}