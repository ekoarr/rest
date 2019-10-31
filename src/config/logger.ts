import { createLogger, format, transports, addColors} from 'winston';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { env } from "@config/globals";

const logDir = 'logs';
if(!existsSync(logDir)){
  mkdirSync(logDir);
}
const filename = join(logDir, 'error.log');
addColors({
  error: 'red',
  warn: 'yellow',
  info: 'cyan',
  debug: 'green'
});

export const logger = createLogger({
  level: 'debug',
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
  ],
  format: format.combine(
    format.colorize({ all: true }),
    format.simple()
  )
});