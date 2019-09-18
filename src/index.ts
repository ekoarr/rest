
import * as Koa from 'koa';
import 'module-alias/register';
import * as Router from 'koa-router';
import Server from "./rest/server";
import { env } from '@config/globals';
import { logger } from '@config/logger';
try {
  const app = new Server({
    middlewares: {
      bodyParser: {
        enableTypes: ['json'],
        jsonLimit: '10mb'
      }
    }
  })
  app.use(async ctx => {
    logger.info(`aionic-core node server is listening on port ${env.NODE_PORT} in ${env.NODE_ENV} mode`);
    ctx.body = 'Hello World';
  });
  app.listen(3000);
} catch (err) {
  console.log(err)
  logger.error(err.stack);
}

