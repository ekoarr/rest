import { logger } from '@config/logger';
export default function(){
  return function (err: Error, ctx){
    logger.debug('errorHandler~ is called');
  };
}