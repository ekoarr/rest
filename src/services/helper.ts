import * as  Joi from 'Joi';
import { JOI_SCHEMA } from "@interfaces/type";

function validateObj(object: Object = {}, label: string, schema: JOI_SCHEMA, options?: Object) {
  if (schema) {
    const { error, value } = Joi.validate(object, schema, options);
    console.log(error);
    console.log(value);
    if (error) throw new Error(`Invalida ${label} - ${error.message}`);
  }
}

const validate = (ValidationObj: JOI_SCHEMA) => {
  return (ctx, next) => {
    console.log(ctx.request.body)
    try {
      validateObj(ctx.headers, 'Headers', ValidationObj.headers, {allowUnknown: true});
      validateObj(ctx.params, 'URL Paramters', ValidationObj.parmas);
      validateObj(ctx.query, 'URL Query', ValidationObj.query);
      if (ctx.request.body) validateObj(ctx.request.body, 'Request body', ValidationObj.body);
      return next();
    } catch (err) { 
      ctx.throw(400, err.message);
    }
  }
}


export {
  validate
}
