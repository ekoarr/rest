import { Context } from "koa";
import * as Service from './service';
async function getArticles(ctx:Context , next) {
  try{
    const result = await Service.getArticles();
    ctx.body = result;
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