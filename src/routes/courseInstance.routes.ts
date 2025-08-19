import { Router } from 'express';
import {
  getAllCourseInstances,
  getCourseInstanceById,
  createCourseInstance,
  updateCourseInstance,
  deleteCourseInstance,
} from '../controllers/courseInstance.controller';

const router = Router();

router.get('/', getAllCourseInstances);
router.get('/:id', getCourseInstanceById);
router.post('/', createCourseInstance);
router.put('/:id', updateCourseInstance);
router.delete('/:id', deleteCourseInstance);

export default router;
