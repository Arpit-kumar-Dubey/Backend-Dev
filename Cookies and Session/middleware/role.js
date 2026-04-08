const role = (roleName) => {
  return (req, res, next) => {
    if (req.session.user.role !== roleName) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};

module.exports = role;