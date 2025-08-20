// src/controllers/preEnrollment.controller.ts
import { Request, Response } from 'express';
import { PreEnrollmentService } from '../services/preEnrollment.service';
import { AppError } from '../errors/AppError';

export class PreEnrollmentController {
  private preEnrollmentService: PreEnrollmentService;

  constructor() {
    this.preEnrollmentService = new PreEnrollmentService();
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { cpf, name, email, phone, courseId, selectedPlan } = req.body;
      
      const preEnrollment = await this.preEnrollmentService.create({
        cpf,
        name,
        email,
        phone,
        courseId,
        selectedPlan,
      });
      
      return res.status(201).json(preEnrollment);
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
}