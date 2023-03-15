import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import nodemailer from "nodemailer";
const path = require("path");
const hbs = require("nodemailer-express-handlebars");
const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve("./src/templates/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./src/templates/"),
  extName: ".handlebars",
};
export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "POST":
      try {
        const { name, email, password, role } = req.body;
        let u = new User({
          name,
          email,
          role,
          password,
        });
        await u.save();
        console.log(u);
        if (u.email) {
          const transporter = nodemailer.createTransport({
            host: "smtppro.zoho.eu",
            port: 465,
            secure: true,
            auth: {
              user: process.env.NOREPLY_EMAIL,
              pass: process.env.NOREPLY_PASS,
            },
          });
          const mailOptions = {
            from: process.env.NOREPLY_EMAIL,
            to: email,
            subject: "Welcome to Dream Education Consultancy",
            template: "invitation",
            context: { name },
          };
          await transporter.sendMail(mailOptions, function (err, info) {
            console.log(info);
            if (err) {
              console.log(err);
            }
          });
        }

        res.status(200).json({
          success: true,
          data: "Registration success.Check your mail for validation",
        });
      } catch (e) {
        if (e.keyValue.email) {
          res
            .status(400)
            .json({ success: false, data: "Email already registered" });
        }
        res.status(400).json({ error: "This method is not allowed" });
      }
  }
}
