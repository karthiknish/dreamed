import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide your title."],
      maxlength: [200, "Name cannot be more than 200 characters"],
    },
    category: {
      type: String,
      required: [true, "Please provide your category"],
      maxlength: [60, "Category cannot be more than 60 characters"],
    },
    author: { UserId: { type: String }, Name: { type: String } },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
