import { logger } from '@config/logger';
export default function(){
  return function (err: Error, ctx){
    console.log(err);
    
    logger.debug('errorHandler~ is called');
  };
}