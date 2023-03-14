import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import nodemailer from "nodemailer";
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
            html: `
            <html><head> <script src="https://cdn.tailwindcss.com"></script></head>
            <body><section class="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
            <header>
                <a href="#">
                    <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/full-logo.svg" alt="">
                </a>
            </header>
        
            <main class="mt-8">
                <h2 class="text-gray-700 dark:text-gray-200">Hi ${name},</h2>
        
                <p class="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                    Dream education consultancy has invited you to Signup on <span class="font-semibold ">dreamedconsultancy.com</span>.
                </p>
                
                <button class="px-6 py-2 mt-4 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Accept the invite
                </button>
                
                <p class="mt-8 text-gray-600 dark:text-gray-300">
                    Thanks, <br>
                    Dream Ed Team
                </p>
            </main>
            
        
            <footer class="mt-8">
        
                <p class="mt-3 text-gray-500 dark:text-gray-400">© ${new Date().getFullYear()} Dream Ed. All Rights Reserved.</p>
            </footer>
        </section></body></html>`,
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
