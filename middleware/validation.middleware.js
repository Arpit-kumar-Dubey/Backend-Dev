export const validateUser = (req, res, next) => {
  const { name, gender, department, salary, startDate } = req.body;

  if (!name || !gender || !department || !salary || !startDate) {
    return res.status(400).send("All fields are required");
  }

  next();
};