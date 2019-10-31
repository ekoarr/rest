import {register} from './controller';
import * as Router from 'koa-router';
import {validate} from '../../../services/joi';
const router = new Router();
router.post('/auth/register',  register);
export default router;