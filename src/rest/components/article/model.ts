import { Model } from 'sequelize';

export default class Article extends Model {
  static init(sequelize, DataTypes){
    return super.init.call(this, {
      name: { type: DataTypes.STRING, allowNull:false},
      author: { type: DataTypes.STRING, allowNull:false }
    }, { sequelize, modelName: 'article'})
  }

}