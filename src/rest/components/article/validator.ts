import * as Joi from 'joi';
import { JOI_SCHEMA } from '@interfaces/type';
const insert:JOI_SCHEMA = {
  body:{
    name: Joi.string().required(),
    passowrd: Joi.string().required()
  },
  query:{
    name: Joi.string().required(),
    passowrd: Joi.string().required()
  }
}

export   {
  insert,
}