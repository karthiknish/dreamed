import dbConnect from "../../lib/dbConnect";
import Student from "../../models/Student";
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
    >Thank you for the Information</p>

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
const validateStudent = (student) => {
  const errors = [];

  if (!student.name) errors.push("Name is required.");
  if (!student.email) errors.push("Email is required.");
  if (!student.phone) errors.push("Phone is required.");
  if (!student.degreetype) errors.push("Degree type is required.");
  if (!student.countries) errors.push("Countries are required.");
  if (!student.qualify) errors.push("Qualify is required.");
  if (!student.dob) errors.push("Date of birth is required.");
  if (!student.cgpa) errors.push("CGPA is required.");
  if (typeof student.grebool === "undefined")
    errors.push("GRE status is required.");
  if (typeof student.ieltsbool === "undefined")
    errors.push("IELTS status is required.");
  if (typeof student.visabool === "undefined")
    errors.push("Visa status is required.");
  if (!student.course1) errors.push("Course 1 is required.");
  if (!student.course2) errors.push("Course 2 is required.");
  if (!student.english) errors.push("English score is required.");
  if (!student.backlog) errors.push("Backlog is required.");
  if (!student.time) errors.push("Time is required.");

  return errors;
};

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const { id, email } = req.query;
        if (id) {
          const student = await Student.findById(id);
          res.status(200).json({ success: true, data: student });
        } else if (email) {
          const students = await Student.find({ email: email });
          res.status(200).json({ success: true, data: students });
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
        const errors = validateStudent(req.body);
        console.log(req.body);
        if (errors.length > 0) {
          res.status(400).json({ success: false, message: errors.join(", ") });
          return;
        }

        const student = await Student.create(req.body);
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
            subject: "Dream Ed Consultancy has got your Information",
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
          res.status(201).json({ success: true, data: student });
        }
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, data: error });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}