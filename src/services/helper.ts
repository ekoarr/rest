import * as fs from "fs";
import { env } from "@config/globals";
import * as path from 'path';
const { COMPONENT } = env.PATH;
const Compose = (...functions) => args => functions.reduce((arg, fn) => fn(arg), args);
const WalkDir = (fs: any, dir: string) => {
  const folders = Compose((dir) => fs.readdirSync(dir)
  , (dirsArr) => { 
    return dirsArr.filter((file) => {
      return file.indexOf('.') == -1;
    }) 
  })(COMPONENT);
  console.log(folders);

  for(const folder of folders){
    Compose(()=> fs.readdirSync(dir), (dirsArr)=>{ 
      
    })
  }
  return folders;
}


export {
  Compose,
  WalkDir
}