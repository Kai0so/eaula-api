// src/services/preEnrollment.service.ts
import { PreEnrollment } from '../models/PreEnrollment';
import sequelize from '../database';
import { AppError } from '../errors/AppError';

interface CreatePreEnrollmentDTO {
  cpf: string;
  name: string;
  email: string;
  phone: string;
  courseId: number;
  selectedPlan: string;
}

export class PreEnrollmentService {
  public async create(data: CreatePreEnrollmentDTO): Promise<PreEnrollment> {
    const transaction = await sequelize.transaction();

    try {
      // Verifica se já existe uma pré-matrícula para este CPF
      const existingPreEnrollment = await PreEnrollment.findOne({
        where: { cpf: data.cpf },
        transaction,
      });

      if (existingPreEnrollment) {
        // Se existir, atualiza os dados e retorna o registro existente.
        // Isso evita duplicatas e permite que o usuário continue o processo.
        await existingPreEnrollment.update(data, { transaction });
        await transaction.commit();
        return existingPreEnrollment;
      }
      
      // Se não existir, cria um novo
      const preEnrollment = await PreEnrollment.create(data, { transaction });
      
      await transaction.commit();
      
      return preEnrollment;
    } catch (error) {
      await transaction.rollback();
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError('Error creating pre-enrollment.', 500);
    }
  }
}