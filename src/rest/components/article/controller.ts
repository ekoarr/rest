import MYSQL from '@services/mysql'; 
import { Context } from "koa";
const { article } = MYSQL;
async function getArticles(ctx:Context , next) {
  try{
    let articles = await article.findAll({});
    await next();
    console.log('this excute after hello world is printed');
  }catch(err)
  {
    ctx.app.emit('error', err, ctx);
  }
}

function insertArticle() {
}

export {
  getArticles,
  insertArticle
}