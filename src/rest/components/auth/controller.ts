import MYSQL from '@services/mysql';
//import {Request} from '@types/koa';

async function register(ctx, next) {
  try{
    
    console.log('this excute after hello world is printed');
    next();
  }catch(err)
  {
    ctx.app.emit('error', err, ctx);
  }
}



export {
  register,
}