import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();
//get req body, check if user exists, create salt and hashed pwd, create new mongoDB object for user, gen token, res status and attach json token
export const registerController = async (req, res) => {
    try {
        const {username, password} = req.body;
        const userExists = await User.findOne({username});
        if (userExists) return res.status(400).json({error: "User already exists"});

        //create salt
        const salt = await bcrypt.genSalt(10);
        const hashpwd = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            username,
            password: hashpwd,
        });
        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: "1d"});
        res.status(201).json({ token });
    } catch (error) {
        console.log("Error in registration: ", error);
        res.status(500).json({error: "Server error"});
    }
}

//get req body, check if username exists, if not return error, check if passwords match, if not return error, sign token
export const loginController = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if (!user){
            return res.status(400).json({error: "Invalid credentials"});
        }
        const pwdMatch = await bcrypt.compare(password, user.password);
        if(!pwdMatch) return res.status(400).json({error: "Invalid credentials"});
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"});
        res.status(200).json({token});
    } catch (error) {
        console.log("Error in login: ", error);
        res.status(400).json({error: "Server error"});
    }
}

