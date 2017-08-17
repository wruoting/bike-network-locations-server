import Koa from 'koa';
import views from 'koa-views';
import json from 'koa-json';
import onerror from 'koa-onerror';
import bodyparser from 'koa-bodyparser';
import logger from 'koa-logger';

// routes
import { main, networks, stations, reviews } from './routes';

// DB
import mongoose from './db/mongoose';

export const app = new Koa();

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  }),
);
app.use(json());
if (process.env.NODE_ENV !== 'test') app.use(logger());
app.use(require('koa-static')(`${__dirname}/public`));

app.use(
  views(`${__dirname}/views`, {
    extension: 'pug',
  }),
);

// routes
app.use(networks.routes(), networks.allowedMethods());
app.use(stations.routes(), stations.allowedMethods());
app.use(reviews.routes(), reviews.allowedMethods());
app.use(main.routes(), main.allowedMethods());

app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT);
});
