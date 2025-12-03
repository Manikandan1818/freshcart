import jwt from "jsonwebtoken"
import User from "../models/User"
import bcrypt from "bcryptjs"

// Register user: /api/user/register
export const register = async (req, res) => {
    try {
        const {name, email, password } = req.body
        if(!name || !email || !password){
            res.json({sucess: false, message: "Missing details"})
        }
        
        const existingUser = await User.findone({email})
        if(existingUser){
            return res.json({sucess: false, message: "User already exits"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({name, email, password:hashedPassword})

        const token = jwt.sign({id: user._id,})

    } catch (error) {
        
    }

}