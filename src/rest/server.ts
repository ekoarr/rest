
import * as  Koa from 'koa';
import * as middlewares from './middleware';
// import { initRoutes } from './routes';
import { Server } from 'http';
import { logger } from '@config/logger';
import { MIDDLEWARES, CONFIG} from '@interfaces/type';
import * as routers from './routes';
export default class App extends Koa {
  readonly servers: Server[];

  public constructor({middlewares}: CONFIG) {
    super();
    this.servers = [];
    this._configureRoutes();
    this._configureMiddlewares(middlewares);
  }

  private _configureRoutes(): void {
    for(const name in routers){
      this.use(routers[name].routes());
      this.use(routers[name].allowedMethods());
    }
  }

  private _configureMiddlewares(middlewareConfig: MIDDLEWARES): void {
    for (const name in middlewares) {
      logger.info(`Middleware '${name}' is Loaded~`);
      this.use(middlewares[name](middlewareConfig[name]));
    }
  }
}
