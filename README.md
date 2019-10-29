# REST

___
Rest is a simple Typescript Koa2 api stater. It a project aim to reduce my development costs

### Fetures
- Joi validation
- PassportJS authentication


## Model
To create an new project you will need to init sequelize model. Please  read [Sequelize migrations](https://sequelize.org/v5/manual/migrations.html "Sequelize migrations") for futher information. Once you finished your database initiation,  modify  ```smaple/example.js```  and copy into your ```rest/component/<something>``` folder 
  

## Module-alias

module alias 

```
  // "_moduleAliases": {
  //   "@config": "<rootDir>/src/config",
  //   "@interfaces": "<rootDir>/src/interfaces",
  //   "@services": "<rootDir>/src/services",
  //   "@components": "<rootDir>/src/rest/components"
  // },
  ```
| Alias     |
|-----------|
| @config   |
| @interface|
| @services |

## Start up the application

run ``` SET NODE_ENV=<DEV|PROD>``` in cmd then run ``` npm run start ```

