import { Request, Response } from 'express';
import * as gradeService from '../services/grade.service';

export const getAllGrades = async (req: Request, res: Response) => {
  try {
    const grades = await gradeService.getAll();
    res.json(grades);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar notas' });
  }
};

export const getGradeById = async (req: Request, res: Response) => {
  try {
    const grade = await gradeService.getById(+req.params.id);
    if (!grade) return res.status(404).json({ error: 'Nota não encontrada' });
    res.json(grade);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar nota' });
  }
};

export const createGrade = async (req: Request, res: Response) => {
  try {
    const newGrade = await gradeService.create(req.body);
    res.status(201).json(newGrade);
  } catch {
    res.status(400).json({ error: 'Erro ao criar nota' });
  }
};

export const updateGrade = async (req: Request, res: Response) => {
  try {
    const updatedGrade = await gradeService.update(+req.params.id, req.body);
    if (!updatedGrade) return res.status(404).json({ error: 'Nota não encontrada' });
    res.json(updatedGrade);
  } catch {
    res.status(400).json({ error: 'Erro ao atualizar nota' });
  }
};

export const deleteGrade = async (req: Request, res: Response) => {
  try {
    const deleted = await gradeService.remove(+req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Nota não encontrada' });
    res.json({ message: 'Nota removida com sucesso' });
  } catch {
    res.status(500).json({ error: 'Erro ao remover nota' });
  }
};
