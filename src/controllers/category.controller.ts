import { Request, Response } from 'express';
import * as categoryService from '../services/category.service';

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.getAll();
    res.json(categories);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar categorias' });
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.getById(+req.params.id);
    if (!category) return res.status(404).json({ error: 'Categoria não encontrada' });
    res.json(category);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar categoria' });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const newCategory = await categoryService.create(req.body);
    res.status(201).json(newCategory);
  } catch {
    res.status(400).json({ error: 'Erro ao criar categoria' });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const updatedCategory = await categoryService.update(+req.params.id, req.body);
    if (!updatedCategory) return res.status(404).json({ error: 'Categoria não encontrada' });
    res.json(updatedCategory);
  } catch {
    res.status(400).json({ error: 'Erro ao atualizar categoria' });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const deleted = await categoryService.remove(+req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Categoria não encontrada' });
    res.json({ message: 'Categoria removida com sucesso' });
  } catch {
    res.status(500).json({ error: 'Erro ao remover categoria' });
  }
};
