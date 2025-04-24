import logger from "@src/logger";

/**
 * Example script to demonstrate Winston logging functionality
 * Run with:
 *   bun run scripts/log-example.ts
 *
 * Or with file output:
 *   LOG_FILE_PATH=./logs/example.log bun run scripts/log-example.ts
 *
 * Note that the log levels are hierarchical, so setting `LOG_LEVEL=silly` will
 * include all levels above it (error, warn, info, verbose, debug, silly).
 */

logger.error("This is an error message");
logger.warn("This is a warning message");
logger.info("This is an info message");
logger.verbose("This is a verbose message");
logger.debug("This is a debug message");
logger.silly("This is a silly message");

logger.info("Check your logs directory if LOG_FILE_PATH was set");
