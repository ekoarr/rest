import {getArticles, insertArticle} from './controller';
import * as Router from 'koa-router';
import { schema } from './validator';
import {validate} from './../../../services/helper';
const router = new Router();
router.get('/article', validate(schema), getArticles);
router.post('/', validate(schema), insertArticle);
export default router;