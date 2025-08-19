import { Request, Response } from 'express';
import * as studentService from '../services/student.service';

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await studentService.getAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar estudantes' });
  }
};

export const getStudentById = async (req: Request, res: Response) => {
  try {
    const student = await studentService.getById(+req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Estudante não encontrado' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar estudante' });
  }
};

export const createStudent = async (req: Request, res: Response) => {
  try {
    const newStudent = await studentService.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar estudante' });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    const updatedStudent = await studentService.update(+req.params.id, req.body);
    if (!updatedStudent) {
      return res.status(404).json({ error: 'Estudante não encontrado' });
    }
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar estudante' });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const deleted = await studentService.remove(+req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Estudante não encontrado' });
    }
    res.json({ message: 'Estudante removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover estudante' });
  }
};
