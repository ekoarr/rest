
import * as fs from 'fs';
import { Compose, WalkDir } from '@services/helper';
import { Sequelize, DataTypes } from 'sequelize';
import { env } from "@config/globals";
const { COMPONENT } = env.PATH;
const { MYSQL } = env.DB;
const sequelize = new Sequelize();
const db = Object.create({db: sequelize});

const t = () => {
  var folders = WalkDir(fs, COMPONENT);
   for(const folder of folders){
    let path = `${COMPONENT}/${folder}/model.ts`;
    let model = require(path).default;
    db[folder] = model.init(sequelize, DataTypes);
    return db;
  }
}

export default t;