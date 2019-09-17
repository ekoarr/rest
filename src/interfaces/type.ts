interface MIDDLEWARES {
  [key: string]: Object
}

interface CONFIG {
    middlewares: MIDDLEWARES
}

export {
  MIDDLEWARES,
  CONFIG
}