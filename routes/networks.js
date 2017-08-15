import Router from 'koa-router';
import { getNetworkList, getStationList } from '../controllers';

const router = new Router();

router.get('/', getNetworkList);
router.get('/:parentNetwork', getStationList);

router.use('/api/networks', router.routes());

export default router;
