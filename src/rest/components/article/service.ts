import MYSQL from '@services/mysql'; 
const { article } = MYSQL;
export const createArticle = async () => {
  try{
    let articles = await article.findAll({});
    return articles;
  } catch (e) {
    throw new Error(e.message);
  }
}

export const getArticles = async () => {
  try{
    let articles = await article.findAll({});
    return articles;
  } catch (e) {
    throw new Error(e.message);
  }
}