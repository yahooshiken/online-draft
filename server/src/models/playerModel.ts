import mongoose from "mongoose";

const Schema = mongoose.Schema;

const playerSchema = new Schema(
  {
    team: String,
    number: Number,
    name: String,
  },
  { collection: "PlayerList" }
);

export default mongoose.model("Player", playerSchema);
