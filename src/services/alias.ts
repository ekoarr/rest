import * as moment from 'moment';

// interface Date<T>{
//   toJSON(): string
// };
// import {Array} from '@interfaces/type'
declare global{
interface Array<T> {
  remove(item:any):void,
  draw(): any
}
}

Array.prototype.remove = function(item) {
  let id = this.indexOf(item);
  id !== false && this.splice(id, 1);
}

Array.prototype.draw = function(){
  return this[Math.floor(Math.random() * this.length)];
}

Date.prototype.toJSON = function() {
  return moment(this).isValid() ? moment(this).utcOffset(8).format('YYYY-MM-DD HH:mm:ss') : null;
}