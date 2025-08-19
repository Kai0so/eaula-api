import { Router } from 'express';
import { getAreasController } from '../controllers/area.controller';

const router = Router();

router.get('/areas', getAreasController);

export default router;
