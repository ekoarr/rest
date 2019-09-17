import bodyParser = require("koa-bodyparser");

export default function(options:Object={}){
  return bodyParser({...options, onerror:()=>{}});
}