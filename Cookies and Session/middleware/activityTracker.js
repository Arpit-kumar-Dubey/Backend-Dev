const activityTracker = (req, res, next) => {
  req.session.lastActivity = Date.now();
  next();
};

module.exports = activityTracker;