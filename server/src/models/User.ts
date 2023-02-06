import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  emailAdress: {
    type: String,
    required: false,
  },
  companyLogo: {
    type: String,
    required: false,
  },
  aboutCompany: {
    type: String,
    required: false,
  },
  companyName: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  recruiterName: {
    type: String,
    required: false,
  },
  webColor1: {
    type: String,
    required: false,
  },
  webColor2: {
    type: String,
    required: false,
  },
  webColor3: {
    type: String,
    required: false,
  },

  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
