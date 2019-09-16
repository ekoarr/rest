
import * as Koa from 'koa';
import 'module-alias/register';
import * as Router from 'koa-router';
import Server from "./rest/server";
import { createServer } from 'http';
import { env } from '@config/globals';
const app = new Server().app;
app.listen(env.NODE_PORT);

