import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    originalURL: {type: String, required: true},
    shortURL: {type: String, required: true, unique: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    clicks: {type: Number, default: 0},
    createdAt: {type: Date, default: Date.now},

});

const URL = mongoose.model("URL", urlSchema);

export default URL;