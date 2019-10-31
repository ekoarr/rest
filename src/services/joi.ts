import * as  Joi from 'Joi';
import { JOI_SCHEMA } from "@interfaces/type";

function validateObj(object: Object = {}, label: string, schema: JOI_SCHEMA, options?: Object) {
  if (schema) {
    const { error } = Joi.validate(object, schema, options);
    if (error) throw new Error(`Invalida ${label} - ${error.message}`);
  }
}

const validate = (ValidationObj: JOI_SCHEMA) => {
  return (ctx, next) => {
    try {
      validateObj(ctx.headers, 'Headers', ValidationObj.headers, {allowUnknown: true});
      validateObj(ctx.params, 'URL Paramters', ValidationObj.parmas);
      if(ctx.query)validateObj(ctx.query, 'URL Query', ValidationObj.query);
      if (ctx.body) validateObj(ctx.request.body, 'Request body', ValidationObj.body);
      return next();
    } catch (err) { 
      ctx.throw(400, err.message);
    }
  }
}


export {
  validate
}
