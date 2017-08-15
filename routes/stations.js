import Router from 'koa-router';
import { getStation, updateStation } from '../controllers';

const router = new Router();

router.get('/:stationId', getStation);
router.put('/:stationId', updateStation);

router.use('/api/stations', router.routes());

export default router;
