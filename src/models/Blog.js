import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide your title."],
      maxlength: [200, "Name cannot be more than 200 characters"],
    },

    author: { type: String },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    imageUrl: {
      type: String,
      required: [true, "Image is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
