// pages/api/adminLogin.js

const predefinedAdminUsername = 'admin';
const predefinedAdminPassword = 'admin';

const authenticateAdmin = (req, res, next) => {
  const { username, password } = req.body;

  if (username === predefinedAdminUsername && password === predefinedAdminPassword) {
    next(); // Proceed to the next middleware or route
  } else {
    res.status(401).json({ error: 'Invalid admin credentials' });
  }
};

export default (req, res) => {
  authenticateAdmin(req, res, () => {
    res.json({ success: true, message: 'Admin login successful' });
  });
};
