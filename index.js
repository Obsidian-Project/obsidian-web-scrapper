const Koa = require("koa");
const PORT = process.env.PORT || 4000;
const indexRoutes = require('./routes/index');
const config = require('./database/config');
const connectDatabase = require('./database/connection');
const app = new Koa();
const cors = require('koa-cors');

//todo error handler
app.use(cors());
app.use(indexRoutes.routes());

const server = app.listen(PORT, async () => {
  try {
    const info = await connectDatabase(config.db);
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);        
  } catch (error) {
    console.error('Unable to connect to database');
  }
  console.log(`API server listening on port: ${PORT}`);
});

module.exports = server;
