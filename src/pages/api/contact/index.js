import dbConnect from "../../../lib/dbConnect";
import Contact from "../../../models/Contact";
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
          const contact = await Contact.findOne({ _id: id });
          res.status(200).json({ success: true, data: contact });
        } else {
          const contacts = await Contact.find({});
          res.status(200).json({ success: true, data: contacts });
        }
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        if (!req.body.name) {
          res.status(400).json({ success: false, data: "Please enter name" });
        } else if (!req.body.email) {
          res.status(400).json({ success: false, data: "Please enter email" });
        } else if (!req.body.query) {
          res
            .status(400)
            .json({ success: false, data: "Please enter message" });
        } else if (req.body.email) {
          let r = String(req.body.email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
          if (r === null) {
            res
              .status(400)
              .json({ success: false, data: "Please enter valid email" });
          } else {
            const contact = await Contact.create(req.body);
            res.status(201).json({ success: true, data: contact });
          }
        }

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
