import dbConnect from "../../lib/dbConnect";
import Contact from "../../models/Contact";
import nodemailer from "nodemailer";
import path from "path";

const logoPath = path.join(process.cwd(), "src", "assets", "logo.png");

function getEmailTemplate(name) {
  return ` <body>
  <section style="max-width: 2xl; padding: 6px; margin: 0 auto; background-color: white;">
    <header>
      <a href="https://dreamedconsultancy.com">
        <img
          style="width: auto; height: 1.75rem;"
          src="cid:logo"
          alt="Logo"
        />
      </a>
    </header>

    <main style="margin-top: 2rem;">
      <h2 style="color: #4A5568;">Hi ${name},</h2>

      <p
        style="margin-top: 0.5rem; line-height: 1.625; color: #718096;"
      >
       Dream education has got your Query
      </p>

     
      <p style="margin-top: 2rem; color: #718096;">
        Thanks, <br />
        Dream Ed Team
      </p>
    </main>

    <footer style="margin-top: 2rem;">
      <p style="margin-top: 0.75rem; color: #A0AEC0;">
        © ${new Date().getFullYear()} Dream Ed. All Rights Reserved.
      </p>
    </footer>
  </section>
</body>`;
}
export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const { id } = req.query;

        if (id && id.length) {
          const contact = await Contact.findOne({ _id: id });
          res.status(200).json({ success: true, data: contact });
        } else {
          const contacts = await Contact.find({});
          res.status(200).json({ success: true, data: contacts });
        }
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, data: error });
      }
      break;

    case "POST":
      try {
        const { name, email, query, phone } = req.body;
        if (!name) {
          res.status(400).json({ success: false, data: "Please enter name" });
        } else if (!email) {
          res.status(400).json({ success: false, data: "Please enter email" });
        } else if (!query) {
          res
            .status(400)
            .json({ success: false, data: "Please enter message" });
        } else if (!phone) {
          res.status(400).json({ success: false, data: "Please enter Phone" });
        } else {
          const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (!email.match(emailRegex)) {
            res
              .status(400)
              .json({ success: false, data: "Please enter valid email" });
          } else {
            const contact = await Contact.create(req.body);
            if (req.body.email) {
              const transporter = nodemailer.createTransport({
                host: "smtppro.zoho.eu",
                port: 465,
                secure: true,
                auth: {
                  user: process.env.NOREPLY_EMAIL,
                  pass: process.env.NOREPLY_PASS,
                },
              });
              const emailTemplate = getEmailTemplate(req.body.name);
              const mailOptions = {
                from: process.env.NOREPLY_EMAIL,
                to: email,
                subject: "Dream Ed Consultancy has got your Query",
                html: emailTemplate,
                attachments: [
                  {
                    filename: "logo.png",
                    path: logoPath,
                    cid: "logo",
                  },
                ],
              };
              await transporter.sendMail(mailOptions).catch((err) => {
                console.error(err);
              });
              res.status(201).json({ success: true, data: contact });
            }
          }
        }
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, data: "Server Error" });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}