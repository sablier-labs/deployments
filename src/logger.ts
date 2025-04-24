import fs from "node:fs";
import path from "node:path";
import winston from "winston";

const LOG_FILE_PATH: string = process.env.LOG_FILE_PATH || "logs/debug.log";
const LOG_LEVEL: string = process.env.LOG_LEVEL || "info";

// Create transports array starting with console
const transports: winston.transport[] = [
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.printf(({ level, message }) => {
        return `${level}: ${message}`;
      }),
    ),
  }),
];

// Add file transport if LOG_FILE_PATH is set
if (LOG_FILE_PATH) {
  // Ensure directory exists
  const logDir = path.dirname(LOG_FILE_PATH);
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  transports.push(
    new winston.transports.File({
      filename: LOG_FILE_PATH,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
          return `${timestamp} ${level}: ${message}`;
        }),
      ),
    }),
  );
}

// Create the logger
const logger = winston.createLogger({
  level: LOG_LEVEL,
  format: winston.format.combine(winston.format.timestamp(), winston.format.errors({ stack: true })),
  transports,
});

export default logger;
