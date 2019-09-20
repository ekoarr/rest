interface MIDDLEWARES {
  [key: string]: Object
}

interface CONFIG {
    middlewares: MIDDLEWARES
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
  JOI_SCHEMA
}