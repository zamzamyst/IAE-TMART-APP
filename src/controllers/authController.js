const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// User demo hardcoded
const demoUser = {
  id: 1,
  email: "admin@example.com",
  password: bcrypt.hashSync("admin123", 10),
  name: "Admin T-Mart",
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (email !== demoUser.email || !bcrypt.compareSync(password, demoUser.password)) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign(
    {
      sub: demoUser.id,
      email: demoUser.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );

  res.json({ access_token: token });
};
