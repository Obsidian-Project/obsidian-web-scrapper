const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = 'Scrapper Working!';
})
  
module.exports = router;