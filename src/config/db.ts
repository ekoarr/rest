export default {
  DEV: {
    MYSQL: {
      username: 'root',
      password: '',
      database: 'database_development',
      host: '127.0.0.1' , 
      logging:false ,
      timezone: "+8:00",
      dialect: "mysql",
      port: 3306
    }
  },
  PROD: {
    MYSQL: {
      username: 'root',
      password: '',
      database: 'database_development',
      host: '127.0.0.1' , 
      logging:false ,
      timezone: "+8:00",
      dialect: "mysql",
      port: 3306
    }
  }
}