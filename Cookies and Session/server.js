require("dotenv").config();

const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");

// Routes
const formRoutes = require("./routes/formRoutes");
const langRoutes = require("./routes/langRoutes");
const adminRoutes = require("./routes/adminRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const cartRoutes = require("./routes/cartRoutes");

// Middleware
const activityTracker = require("./middleware/activityTracker");

const app = express();

// DB connect
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 5 * 60 * 1000 } // 5 min
}));

app.use(activityTracker);

// Routes
app.use("/form", formRoutes);
app.use("/lang", langRoutes);
app.use("/admin", adminRoutes);
app.use("/session", sessionRoutes);
app.use("/cart", cartRoutes);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});