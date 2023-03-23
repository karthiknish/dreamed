import dbConnect from "../../lib/dbConnect";
import Student from "../../models/Student";

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
        const userEmail = req.query.email;
        const students = userEmail
          ? await Student.find({ email: userEmail })
          : await Student.find({});
        res.status(200).json({ success: true, data: students });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const errors = validateStudent(req.body);

        if (errors.length > 0) {
          res.status(400).json({ success: false, message: errors.join(", ") });
          return;
        }

        const student = await Student.create(req.body);
        res.status(201).json({ success: true, data: student });
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