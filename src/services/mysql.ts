
import * as fs from 'fs';
import { WalkDir } from '@services/helper';
import { Sequelize, DataTypes } from 'sequelize';
import { env } from "@config/globals";
import { DB_CONNECTION } from "@interfaces/type";
const { COMPONENT } = env.PATH;
const { MYSQL } = env.DB;

const sequelize = new Sequelize({ ... MYSQL});
const db: DB_CONNECTION = Object.create({});
db.Sequelize = Sequelize;
db.sequelize = sequelize;

var folders = WalkDir(fs, COMPONENT);
  for(const folder of folders){
  let path = `${COMPONENT}/${folder}/model.ts`;
  let model = require(path).default;
  db[folder] = model.init(sequelize, DataTypes);
}

export default db;