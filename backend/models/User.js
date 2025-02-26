import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    hashedpassword: {type: String, required: true},
    favouriteTeam: {type: String},

 
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;