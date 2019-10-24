import { Model } from 'sequelize';

export default class Article extends Model {
  static init(sequelize, DataTypes){
    return super.init.call(this, {
      title: { type: DataTypes.INTEGER, allowNull:false, defaultValue: 0 }
    }, { sequelize, modelName: 'article'})
  }

}