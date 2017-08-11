import Koa from 'koa';
import views from 'koa-views';
import json from 'koa-json';
import onerror from 'koa-onerror';
import bodyparser from 'koa-bodyparser';
import logger from 'koa-logger';

// routes
import index from './routes/index';
import bikeNetworkLocations from './routes/bikeNetworkLocations';

// DB
import connectMongoose from './db/mongoose';

const app = new Koa();

(async () => {
  try {
    const isConnected = await connectMongoose();
    console.log(isConnected);
  } catch (err) {
    console.log(err);
  }
})();

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  }),
);
app.use(json());
app.use(logger());
app.use(require('koa-static')(`${__dirname}/public`));

app.use(
  views(`${__dirname}/views`, {
    extension: 'pug',
  }),
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(bikeNetworkLocations.routes(), bikeNetworkLocations.allowedMethods());
app.use(index.routes(), index.allowedMethods());

module.exports = app;
