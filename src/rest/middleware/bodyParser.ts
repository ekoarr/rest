import bodyParser = require("koa-bodyparser");

export default function(options:Object={}){
  console.log(options);
  return bodyParser();
}