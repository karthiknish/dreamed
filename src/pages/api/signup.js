import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import CryptoJS from "crypto-js";
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
        res.status(200).json({ success: "success" });
      } catch (e) {
        console.error(e);
        res.status(400).json({ error: "This method is not allowed" });
      }
  }
}
