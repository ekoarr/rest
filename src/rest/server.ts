
import * as  Koa from 'koa';
import * as middlewares from './middleware';
// import { initRoutes } from './routes';
import { Server } from 'http';
import * as routers from './routes';
import * as auth from '@services/auth';
import { logger } from '@config/logger';
import { MIDDLEWARES, CONFIG} from '@interfaces/type';
import  errorHandler from '@services/errorHandler';

export default class App extends Koa {
  readonly servers: Server[];

  public constructor({middlewares}: CONFIG) {
    super();
    this.servers = [];
    this._configureMiddlewares(middlewares);
    this._configureRoutes();
    this._configErrorHandler();
    this._configAuth();
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
      this.use(middlewares[name](this));
    }
  }

  private _configErrorHandler():void {
    this.on('error', errorHandler());
  }

  private _configAuth():void {
    this.use(auth.passport.initialize());
    this.use(auth.passport.session());
  }

  private _configureValiator():void {
  }
}
