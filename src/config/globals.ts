import * as path from 'path';
const CWD = process.cwd();
const COMPONENT = path.join(CWD, "src", "rest", "components");
export const env = {
  NODE_PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  PATH: { COMPONENT}

}