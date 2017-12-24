const Koa = require("koa");
const PORT = process.env.PORT || 4000;
const indexRoutes = require('./routes/index');
const config = require('./database/config');
const connectDatabase = require('./database/connection');
const app = new Koa();
const cors = require('koa-cors');
const queries = require('./database/queries');
const Scrapper = require('./utils/scrapper');

app.use(cors());
app.use(indexRoutes.routes());

const server = app.listen(PORT, async () => {
  try {
    const info = await connectDatabase(config.db);
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);    
    
    let scrapper = new Scrapper();             
    const itemsToInsert = await scrapper.getAllData();
    const cleanDb = await queries.cleanDatabase();
    const savedItems = await queries.saveToDatabase(itemsToInsert);

    console.log(`All inserted properly`);   

  } catch (error) {
    console.error('Unable to connect to database');
  }
  console.log(`API server listening on port: ${PORT}`);
});

module.exports = server;
