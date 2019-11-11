# REST

Rest is a simple Typescript Koa2 api stater. It's my first typesciprt program and is a project aim to reduce my development costs

### Framework Used in this project:

- Koa
- Joi
- PassportJS

### The structure:

The design of this restful api has been inspired by this article [Project structure for an Express REST API when there is no “standard way”](https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way/).The architecture diagram below shows the main idea.  

![diagram](https://i2.wp.com/www.coreycleary.me/wp-content/uploads/2018/11/Express-REST-API-Struc.png?w=741&ssl=1)

Controllers: You should never put any logic in controller layer. They call the ```service ```, which contain pure business logic
Service: should contain the majority of your business logic, that calls your data access layer or model

## Model:
To create an new project you will need to init sequelize model. Please  read [Sequelize migrations](https://sequelize.org/v5/manual/migrations.html "Sequelize migrations") for futher information. Once you finished your database initiation,  modify  ```smaple/example.js```  and copy into your ```rest/component/<something>``` folder 
  

## Module-alias:

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

## Start up the application:

run ``` SET NODE_ENV=<DEV|PROD>``` in cmd then run ``` npm run start ```

