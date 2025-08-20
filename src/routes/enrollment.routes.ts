// src/routes/enrollment.routes.ts
import { Router } from 'express';
import { PreEnrollmentController } from '../controllers/preEnrollment.controller';
import { validateRequest } from '../middlewares/validateRequest';
import { createPreEnrollmentSchema } from '../schemas/preEnrollmentSchema';

const enrollmentRoutes = Router();
const preEnrollmentController = new PreEnrollmentController();

// Rota para criar a pré-matrícula (primeiro passo do fluxo)
enrollmentRoutes.post(
  '/pre',
  validateRequest(createPreEnrollmentSchema),
  preEnrollmentController.create
);

export default enrollmentRoutes;