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
    phonecode: {
      type: String,
      required: [true, "Please provide the country code."],
      default: "+91",
    },
    phone: {
      type: Number,
      validate: {
        validator: function (v) {
          return /d{11}/.test(v);
        },
        message: "{VALUE} is not a valid 11 digit number!",
      },
    },
    qualify: {
      type: String,
      required: [true, "Please provide your qualification."],
    },
    degreeType: {
      type: String,
      required: [true, "Please provide your degree."],
    },
    dob: { type: Date, required: true, trim: true },
    cgpa: {
      type: String,
      required: [true, "Please provide your cgpa."],
    },
    backlogs: {
      type: Number,
      required: [true, "Please provide your backlogs."],
    },
    country: {
      type: String,
      required: [true, "Please provide your preferred country."],
    },
    visa: {
      type: String,
      required: [true, "Please provide your visa status."],
    },
    course1: {
      type: String,
      required: [true, "Please provide your course 1."],
    },
    course2: {
      type: String,
      required: [true, "Please provide your course 2."],
    },
    ielts: {
      type: String,
      required: [true, "Please provide your ielts status."],
    },
    ieltsscore: { type: Number },
    gre: { type: String, required: [true, "Please provide your gre status."] },
    grescore: { type: Number },
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
