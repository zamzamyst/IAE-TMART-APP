const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token provided" });

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        console.log(`[${new Date().toISOString()}] PROFILE UPDATE FAILED: Token sudah expired`);
        return res.status(401).json({ error: "Token expired" }); 
      } else {
        console.log(`[${new Date().toISOString()}] PROFILE UPDATE FAILED: Token tidak valid`);
        return res.status(403).json({ error: "Invalid token" });
      }
    }
    req.user = user;
    next();
  });
};

module.exports = verifyToken;
