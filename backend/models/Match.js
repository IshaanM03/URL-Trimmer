import mongoose from 'mongoose';


const MatchSchema = new mongoose.Schema({
    matchId: { type: String, required: true, unique: true }, 
    homeTeam: { type: String, required: true },
    awayTeam: { type: String, required: true },
    matchDate: { type: Date, required: true },
    stadium: { type: String }, 
    last5H2H: [{ type: String }], 
    status: { type: String, enum: ["Upcoming", "Live", "Completed"], default: "Upcoming" }, 
  }, { timestamps: true });

  const Match = mongoose.model("Match", MatchSchema);
  export default Match