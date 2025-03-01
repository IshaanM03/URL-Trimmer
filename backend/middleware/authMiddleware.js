import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(400).json({error: "Access denied, no token provided"});
        
    };
    const token = authHeader.split(' ')[1];
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next()
    } catch (error) {
        console.log("Invalid token: ", error);
        return res.status(400).json({error: "Invalid token"});
    }
}
