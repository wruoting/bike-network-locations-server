import Router from 'koa-router';
import { getStation, updateStation, getStationReviews } from '../controllers';

const router = new Router();

router.get('/:stationId/reviews', getStationReviews);
router.get('/:stationId', getStation);
router.put('/:stationId', updateStation);

router.use('/api/stations', router.routes());

export default router;
