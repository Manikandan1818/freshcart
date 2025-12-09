
const authUser = async (req, res, next) => {
    
    const {token} = req.cookies;

    if(!token) {
        return res.json({sucess: false, message: "Not Authorized"})
    }

}