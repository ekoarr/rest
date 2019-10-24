import * as fs from "fs";
import { env } from "@config/globals";
import * as path from 'path';
const Compose = (...functions) => args => functions.reduce((arg, fn) => fn(arg), args);
const WalkDir = (fs: any, dir: string) => {
  const folders = Compose((dir) => fs.readdirSync(dir)
  , (dirsArr) => { 
    return dirsArr.filter((file) => {
      return file.indexOf('.') == -1;
    }) 
  })(dir);

  // for(const folder of folders){
  //   let path = `${COMPONENT}/${folder}/model.ts`;
  //   let model = require(path);
  // }
  return folders;
}


export {
  Compose,
  WalkDir
}