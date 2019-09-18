import {getArticles, insertArticle} from './controller';
import * as Router from 'koa-router';

const router = new Router();
router.get('/article', getArticles);
router.post('/', insertArticle);
export default router;