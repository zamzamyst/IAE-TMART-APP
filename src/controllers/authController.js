const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const demoUser = {
  id: 1,
  email: "user1@example.com",
  password: bcrypt.hashSync("pass123", 10),
  name: "Admin T-Mart",
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (email !== demoUser.email) {
    console.log(
      `[${new Date().toISOString()}] LOGIN FAILED: Email tidak ditemukan (${email})`
    );
    return res.status(404).json({ error: "Email not found!" });
  }

  if (!bcrypt.compareSync(password, demoUser.password)) {
    console.log(
      `[${new Date().toISOString()}] LOGIN FAILED: Password salah (${password})`
    );
    return res.status(401).json({ error: "Wrong Password! please try again" });
  }

  const token = jwt.sign(
    {
      sub: demoUser.id,
      email: demoUser.email,
    },
    process.env.JWT_SECRET,
    { algorithm: "HS256", expiresIn: "15m" }
  );

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded);

  console.log(`[${new Date().toISOString()}] LOGIN SUCCESS: ${email}`);

  res.json({
    message: `Login Success! Welcome, ${demoUser.name}.`,
    access_token: token,
  });
};
