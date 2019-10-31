import session = require("koa-session");

export default function(app){
  app.keys = ['keys'];
  return session(app);
}