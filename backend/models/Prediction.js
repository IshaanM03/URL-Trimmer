import mongoose from "mongoose";

const predSchema = new mongoose.Schema({
    userID: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    matchID: {},
    matchDate: {},
    

}, {timestamps: true})