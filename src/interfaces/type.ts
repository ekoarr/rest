interface MIDDLEWARES {
  [key: string]: Object
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
  Array,
  JOI_SCHEMA
}