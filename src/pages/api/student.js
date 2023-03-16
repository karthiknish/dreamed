import dbConnect from "../../lib/dbConnect";
import Student from "../../models/Student";
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
        const q = Object.keys(req.query).length;
        const { id } = req.query;
        if (q === 1 && id !== "contact") {
          const { id } = req.query;
          const student = await Student.findOne({ _id: id });
          res.status(200).json({ success: true, data: student });
        } else {
          const students = await Student.find({});
          res.status(200).json({ success: true, data: students });
        }
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const student = await Student.create(req.body);
        res.status(201).json({ success: true, data: student });

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
      } catch (error) {
        res.status(400).json({ success: false, data: "Server Error" });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
