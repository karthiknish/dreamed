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
        const blog = await Blog.create(req.body);

        // let info = await transporter.sendMail({
        //   from: "initiosol@gmail.com",
        //   to: "support@initiosolutions.com",
        //   subject: "You got a new lead!!",
        //   html: `
        //     <div>
        //       <div style='margin-bottom:'10px'><b>Name :</b> ${req.body.name}</div>
        //       <div style='margin-bottom:'10px'><b>Email :</b> ${req.body.email}</div>
        //       <div><b>Message: </b>${req.body.message}</div>
        //     </div>
        //   `,
        // });
        // console.log("Message sent: %s", info);
        res.status(201).json({ success: true, data: blog });
      } catch (error) {
        res.status(400).json({ success: false });
        console.error(error);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
