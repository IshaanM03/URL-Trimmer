import mongoose from 'mongoose';

const PredictionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    matchId: { type: String, required: true },
    matchDate: { type: Date, required: true },
    predictedWinner: { type: String, enum: ["Home", "Away", "Draw"], required: true }, 
    predictedScore: { type: String }, 
  }, { timestamps: true });
  
const Prediction = mongoose.model("Prediction", PredictionSchema);

export default Prediction