import mongoose from "mongoose";
const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your Name."],
    },
    email: {
      type: String,
      required: [true, "Please provide your Email"],
    },
    query: { type: String, required: [true, "Please provide your Query"] },
  },
  { timestamps: true }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);

