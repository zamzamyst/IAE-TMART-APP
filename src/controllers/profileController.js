exports.updateProfile = (req, res) => {
  const { name, email } = req.body;
  const updatedProfile = {
    id: req.user.sub,
    name: name,
    email: email || req.user.email,
  };

  res.json({
    message: "Profile updated!",
    profile: updatedProfile,
  });
};
