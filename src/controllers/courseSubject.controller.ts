import { Request, Response } from 'express';
import * as courseSubjectService from '../services/courseSubject.service';

export const getAll = async (req: Request, res: Response) => {
  const subjects = await courseSubjectService.getAllCourseSubjects();
  return res.json(subjects);
};

export const getById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const subject = await courseSubjectService.getCourseSubjectById(id);
  if (!subject) return res.status(404).json({ message: 'Disciplina não encontrada' });
  return res.json(subject);
};

export const create = async (req: Request, res: Response) => {
  const data = req.body;
  const created = await courseSubjectService.createCourseSubject(data);
  return res.status(201).json(created);
};

export const update = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updated = await courseSubjectService.updateCourseSubject(id, req.body);
  if (!updated) return res.status(404).json({ message: 'Disciplina não encontrada' });
  return res.json(updated);
};

export const remove = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const deleted = await courseSubjectService.deleteCourseSubject(id);
  if (!deleted) return res.status(404).json({ message: 'Disciplina não encontrada' });
  return res.status(204).send();
};
