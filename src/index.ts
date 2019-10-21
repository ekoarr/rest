
import * as Koa from 'koa';
import 'module-alias/register';
import * as Router from 'koa-router';
import Server from "./rest/server";
import { env } from '@config/globals';
import { logger } from '@config/logger';
const app:Server = new Server({
  middlewares: {
    bodyParser: {
      enableTypes: ['json'],
      jsonLimit: '10mb'
    }
  }
});

var _server = null;

try {
 

  app.use(async ctx => {
    logger.debug({
      level: 'info',
      message: 'Hello distributed log files!'
    });
    ctx.body = 'Hello World';
  });
  _server = app.listen(env.NODE_PORT);
} catch (err) {
  logger.error(err.stack);
}

export default _server;

