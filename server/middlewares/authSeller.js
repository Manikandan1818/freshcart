import jwt from "jsonwebtoken"

const authSeller = async (req, res, next) => {
    const {sellerToken} = res.cookies;

    if(!sellerToken){
        return res.json({sucess: false, message: "Not Authorized"})
    }

    try {
        const tokenDecode = jwt.verify(sellerToken, process.env.JWT_SECRET)
    } catch (error) {
        
    }
}