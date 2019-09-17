import * as Koa from 'koa';
import { registerApiRoutes } from './components';
export function initRoutes(app: any) {
  const prefix: string = '/api/v1';
  registerApiRoutes(app, prefix);
}