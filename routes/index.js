import networks from './networks';
import stations from './stations';
import Router from 'koa-router';

const router = new Router(); // require('koa-router')()

router.get('/', async (ctx) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
  });
});

router.get('/string', async (ctx) => {
  ctx.body = 'koa2 string';
});

router.get('/json', async (ctx) => {
  ctx.body = {
    title: 'koa2 json',
  };
});

export { router as main, networks, stations };
