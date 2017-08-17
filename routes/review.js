import Router from 'koa-router';
import { postReview } from '../controllers';

const router = new Router();

router.post('/:networkId/:stationId', postReview);

router.use('/api/reviews', router.routes());

export default router;
