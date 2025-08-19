import { Request, Response } from 'express';
import * as enrollmentService from '../services/enrollment.service';

export const getAllEnrollments = async (req: Request, res: Response) => {
  try {
    const enrollments = await enrollmentService.getAll();
    res.json(enrollments);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar matrículas' });
  }
};

export const getEnrollmentById = async (req: Request, res: Response) => {
  try {
    const enrollment = await enrollmentService.getById(+req.params.id);
    if (!enrollment) return res.status(404).json({ error: 'Matrícula não encontrada' });
    res.json(enrollment);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar matrícula' });
  }
};

export const createEnrollment = async (req: Request, res: Response) => {
  try {
    const newEnrollment = await enrollmentService.create(req.body);
    res.status(201).json(newEnrollment);
  } catch {
    res.status(400).json({ error: 'Erro ao criar matrícula' });
  }
};

export const updateEnrollment = async (req: Request, res: Response) => {
  try {
    const updatedEnrollment = await enrollmentService.update(+req.params.id, req.body);
    if (!updatedEnrollment) return res.status(404).json({ error: 'Matrícula não encontrada' });
    res.json(updatedEnrollment);
  } catch {
    res.status(400).json({ error: 'Erro ao atualizar matrícula' });
  }
};

export const deleteEnrollment = async (req: Request, res: Response) => {
  try {
    const deleted = await enrollmentService.remove(+req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Matrícula não encontrada' });
    res.json({ message: 'Matrícula removida com sucesso' });
  } catch {
    res.status(500).json({ error: 'Erro ao remover matrícula' });
  }
};
