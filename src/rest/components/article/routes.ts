import {getArticles, insertArticle} from './controller';
import * as Router from 'koa-router';
import { insert } from './validator';
import {validate} from './../../../services/helper';
// import { validate } from ''
// console.log(34);
// console.log(validate)
const router = new Router();
router.get('/article', validate(insert), getArticles);
router.post('/', validate(insert), insertArticle);
export default router;