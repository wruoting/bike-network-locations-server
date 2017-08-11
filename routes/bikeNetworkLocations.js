import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = {
    text: 'Hello from api',
  };
});

router.use('/api', router.routes());

export default router;
