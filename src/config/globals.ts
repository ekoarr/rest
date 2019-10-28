import * as path from 'path';
import  mysql from '@config/db';
const CWD = process.cwd();
const COMPONENT = path.join(CWD, "src", "rest", "components");
const _env = process.env;
export const env = {
  NODE_PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  PATH: { COMPONENT},
  DB: mysql[process.env["NODE_ENV"]]
}