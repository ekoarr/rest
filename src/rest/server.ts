
import * as Koa from 'koa';

export default class Server {
  private readonly _app: Koa = new Koa();
  public constructor(){}

  public get app() {
    return this._app;
  }
}