
import * as fs from 'fs';
import { Compose, WalkDir } from '@services/helper';
import { Sequelize, DataType } from 'sequelize';
console.log('*********************');

const t = () => {
  WalkDir(fs, '@components')
}

export default t;