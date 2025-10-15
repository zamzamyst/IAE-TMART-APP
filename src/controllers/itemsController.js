const Menu = require("../models/Menu");

exports.getItems = (req, res) => {
  const menus = Menu.getAllItems();
  res.json({ menus });
};
