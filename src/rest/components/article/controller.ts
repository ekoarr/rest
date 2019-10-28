import MYSQL from '@services/mysql';
const { article } = MYSQL;
async function getArticles(ctx, next) {
  try{
    let articles = await article.findAll({});
    next();
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