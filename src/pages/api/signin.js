import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import CryptoJS from "crypto-js";
var jwt = require("jsonwebtoken");
export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "POST":
      try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
          const bytes = CryptoJS.AES.decrypt(
            user.password,
            process.env.CRYPTO_SECRET
          );
          const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
          if (
            req.body.email === user.email &&
            req.body.password === decryptedData
          ) {
            var token = jwt.sign(
              { email: user.email, name: user.name },
              process.env.JWT_SECRET,
              {
                expiresIn: "10s",
              }
            );
            console.log({ token });
            var role = user.role;

            return res.status(200).json({ token, success: true, role });
          } else if (
            req.body.email === user.email &&
            req.body.password !== decryptedData
          ) {
            return res
              .status(200)
              .json({ success: false, error: "Wrong password" });
          }
        } else {
          return res
            .status(200)
            .json({ success: false, error: "No user found" });
        }
      } catch (e) {
        console.error(e);
        // res.status(400).json({ error: "This method is not allowed" });
      }
    default:
      // res.status(400).json({ success: false });
      break;
  }
}
