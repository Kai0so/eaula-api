import { Request, Response } from 'express';
import * as courseService from '../services/course.service';


export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await courseService.getAll();
    res.json(courses);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar cursos' });
  }
};

export const getCourseById = async (req: Request, res: Response) => {
  try {
    const course = await courseService.getById(+req.params.id);
    if (!course) return res.status(404).json({ error: 'Curso não encontrado' });
    res.json(course);
    console.log(course);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar curso' });
  }
};

export const createCourse = async (req: Request, res: Response) => {
  try {
    const newCourse = await courseService.create(req.body);
    res.status(201).json(newCourse);
  } catch {
    res.status(400).json({ error: 'Erro ao criar curso' });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const updatedCourse = await courseService.update(+req.params.id, req.body);
    if (!updatedCourse) return res.status(404).json({ error: 'Curso não encontrado' });
    res.json(updatedCourse);
  } catch {
    res.status(400).json({ error: 'Erro ao atualizar curso' });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const deleted = await courseService.remove(+req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Curso não encontrado' });
    res.json({ message: 'Curso removido com sucesso' });
  } catch {
    res.status(500).json({ error: 'Erro ao remover curso' });
  }
};
