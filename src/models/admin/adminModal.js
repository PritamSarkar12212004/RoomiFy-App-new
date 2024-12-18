import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 20,
  },
  emails: {
    type: String,
    trim: true,
    default: "lll@gail.com",
  },
  phones: {
    type: Number,
  },

  location: {
    type: Object,
    trim: true,
  },

  exact_location: {
    type: Object,
  },

  profileImage: {
    type: String,
  },
  gender: {
    type: String,
    emun: ["male", "female"],
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
