const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "../logs.txt");

const requestLogger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;

    const log = `${new Date().toISOString()} | ${req.method} ${req.url} | ${res.statusCode} | ${duration}ms\n`;

    fs.appendFile(logFile, log, (err) => {
      if (err) console.error("Logging error:", err);
    });
  });

  next();
};

module.exports = requestLogger;