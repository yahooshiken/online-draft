import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    roomKey: String,
    name: String,
    status: String,
  },
  { collection: "UserList" }
);

export default mongoose.model("User", userSchema);
