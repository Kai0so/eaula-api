import { Request, Response } from 'express';
import * as courseInstanceService from '../services/courseInstance.service';

export const getAllCourseInstances = async (req: Request, res: Response) => {
  try {
    const instances = await courseInstanceService.getAll();
    res.json(instances);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar turmas' });
  }
};

export const getCourseInstanceById = async (req: Request, res: Response) => {
  try {
    const instance = await courseInstanceService.getById(+req.params.id);
    if (!instance) return res.status(404).json({ error: 'Turma não encontrada' });
    res.json(instance);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar turma' });
  }
};

export const createCourseInstance = async (req: Request, res: Response) => {
  try {
    const newInstance = await courseInstanceService.create(req.body);
    res.status(201).json(newInstance);
  } catch {
    res.status(400).json({ error: 'Erro ao criar turma' });
  }
};

export const updateCourseInstance = async (req: Request, res: Response) => {
  try {
    const updatedInstance = await courseInstanceService.update(+req.params.id, req.body);
    if (!updatedInstance) return res.status(404).json({ error: 'Turma não encontrada' });
    res.json(updatedInstance);
  } catch {
    res.status(400).json({ error: 'Erro ao atualizar turma' });
  }
};

export const deleteCourseInstance = async (req: Request, res: Response) => {
  try {
    const deleted = await courseInstanceService.remove(+req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Turma não encontrada' });
    res.json({ message: 'Turma removida com sucesso' });
  } catch {
    res.status(500).json({ error: 'Erro ao remover turma' });
  }
};
