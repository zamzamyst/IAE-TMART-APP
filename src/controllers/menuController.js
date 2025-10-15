const Menu = require("../models/Menu");

exports.getItems = (req, res) => {
  const menus = Menu.getAllItems();
  
  res.json({ 
    message: "Daftar Menu Kantin T-Mart TULT",
    menus 
  });
};
