import { createLogger, format, transports } from 'winston';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { env } from "@config/globals";

const logDir = 'logs';
if(!existsSync(logDir)){
  mkdirSync(logDir);
}
const filename = join(logDir, 'error.log');

export const logger = createLogger({
  format: format.combine(
		format.timestamp({
			format: 'DD-MM-YYYY HH:mm:ss'
		}),
		format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
	),
	level: env.NODE_ENV === 'development' ? 'debug' : 'info',
	transports: [
		new transports.Console({
			format: format.combine(
				format.colorize(),
				format.printf((info) => `test`)
			),
			level: 'info'
		}),
		new transports.File({ filename, level: 'error' })
	]
})