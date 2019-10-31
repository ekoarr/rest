
import 'module-alias/register';
import Server from "./rest/server";
import { env } from '@config/globals';
import { logger } from '@config/logger';
const app = new Server({
  middlewares: {
    bodyParser: {
      enableTypes: ['json'],
      jsonLimit: '10mb'
    }
  }
});

try {
 console.log('excute order json response')
  app.use(async ctx => {
    logger.debug({
      level: 'info',
      message: 'Hello distributed log files!'
    });
    ctx.body = 'Hello World';
  });
  app.listen(env.NODE_PORT);
} catch (err) {
  logger.error(err.stack);
}

export default app;

