//import { logger } from '@config/logger';
import MYSQL from '@services/mysql';

describe('Helper testing', () => {
  it('Compose function',   (done) => {
    var folders = MYSQL();
    console.log(folders);
  })
});