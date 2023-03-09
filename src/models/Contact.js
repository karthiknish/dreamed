import mongoose from "mongoose";
const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name."],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Email address is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    qualify: {
      type: String,
      required: [true, "Please provide your qualification."],
    },
    degreetype: {
      type: String,
      required: [true, "Please provide your degree."],
    },
    dob: { type: Date, required: true, trim: true },
    cgpa: {
      type: Number,
      required: [true, "Please provide your cgpa."],
    },
    backlog: {
      type: Number,
      required: [true, "Please provide your backlogs."],
    },
    countries: {
      type: Array,
      required: [true, "Please provide your preferred countries."],
    },
    visa: {
      type: String,
    },
    visabool: {
      type: Boolean,
      required: [true, "Please provide your Visa status."],
    },
    course1: {
      type: String,
      required: [true, "Please provide your course 1."],
    },
    course2: {
      type: String,
      required: [true, "Please provide your course 2."],
    },
    ieltsbool: {
      type: Boolean,
      required: [true, "Please provide your ielts status."],
    },
    ielts: { type: Number },
    grebool: {
      type: Boolean,
      required: [true, "Please provide your gre status."],
    },
    gre: { type: Number },
    english: {
      type: String,
      required: [true, "Please provide your English score."],
    },
    time: {
      type: Date,
      required: [true, "Please provide your preferred contact date."],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
