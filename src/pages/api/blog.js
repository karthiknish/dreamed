import dbConnect from "../../lib/dbConnect";
import Blog from "../../models/Blog";
// import nodemailer from "nodemailer";
export default async function handler(req, res) {
  // let transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: "initiosol@gmail.com",
  //     pass: process.env.PASS,
  //   },
  // });
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const blogs = await Blog.find({});
        res.status(200).json({ success: true, data: blogs });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        console.log(req.body);
        const blog = await Blog.create(req.body);
        res.status(201).json({ success: true, data: blog });
      } catch (error) {
        res.status(400).json({ success: false });
        console.error(error);
      }
      break;
    case "PUT":
      try {
        const blog = await Blog.findByIdAndUpdate(req.body.id, req.body);
        res.status(201).json({ success: true, data: blog });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const blog = await Blog.findOneAndDelete({ _id: req.body.id });
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
