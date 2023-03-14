import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
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
