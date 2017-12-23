const Router = require('koa-router');
const router = new Router();
const queries = require('../database/queries');
const Scrapper = require('../utils/scrapper');

router.get('/', async (ctx) => {
  ctx.body = 'Scrapper Working!';
})

router.get('/scrappe', async (ctx) => {       
    try {
        let scrapper = new Scrapper();             
        const itemsToInsert = await scrapper.getAllData();
        const cleanDb = await queries.cleanDatabase();
        const savedItems = await queries.saveToDatabase(itemsToInsert);
        ctx.body = "All inserted successfully"
      } catch (err) {
        console.log(err)
      }
  })
  
module.exports = router;