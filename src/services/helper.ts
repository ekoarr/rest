import * as fs from "fs";
import { env } from "@config/globals";
import * as path from 'path';
const Compose = (...functions) => args => functions.reduce((arg, fn) => fn(arg), args);
const WalkDir = (fs: any, dir: string) => {
  const folders: Array<string> = Compose((dir) => fs.readdirSync(dir)
  , (dirsArr: Array<string>) => { 
    return dirsArr.filter((file) => {
      return file.indexOf('.') == -1;
    }) 
  })(dir);
  return folders;
}

export {
  Compose,
  WalkDir
}