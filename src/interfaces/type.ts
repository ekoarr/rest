interface MIDDLEWARES {
  [key: string]: Object
}

interface DB_CONNECTION {
  [key: string]: any
}

interface CONFIG {
    middlewares: MIDDLEWARES
}

interface Array {
  remove(item:any):void;
}

interface JOI_SCHEMA {
  body? : Object
  headers? : Object,
  parmas?: Object,
  query?: Object
}

export {
  MIDDLEWARES,
  CONFIG,
  DB_CONNECTION,
  Array,
  JOI_SCHEMA
}