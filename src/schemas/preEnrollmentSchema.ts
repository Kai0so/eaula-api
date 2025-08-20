// src/schemas/preEnrollmentSchema.ts
import { z } from 'zod';

export const createPreEnrollmentSchema = z.object({
  body: z.object({
    cpf: z.string().trim().min(11, 'CPF deve ter 11 ou 14 caracteres').max(14, 'CPF deve ter 11 ou 14 caracteres'),
    name: z.string().min(3, 'Nome é obrigatório'),
    email: z.string().email('Email inválido'),
    phone: z.string().min(10, 'Telefone inválido'),
    courseId: z.number().int().positive('ID do curso é obrigatório'),
    selectedPlan: z.string().min(1, 'Plano de pagamento é obrigatório'),
  }),
});