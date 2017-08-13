import Router from 'koa-router';
import { getStation } from '../controllers';

const router = new Router();

router.get('/:stationId', getStation);
router.get('/', getStationList);

router.use('/api/stations', router.routes());

export default router;
