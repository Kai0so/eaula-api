import { Request, Response } from 'express';
import * as materialService from '../services/material.service';

export const getAllMaterials = async (req: Request, res: Response) => {
  try {
    const materials = await materialService.getAll();
    res.json(materials);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar materiais' });
  }
};

export const getMaterialById = async (req: Request, res: Response) => {
  try {
    const material = await materialService.getById(+req.params.id);
    if (!material) return res.status(404).json({ error: 'Material não encontrado' });
    res.json(material);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar material' });
  }
};

export const createMaterial = async (req: Request, res: Response) => {
  try {
    const newMaterial = await materialService.create(req.body);
    res.status(201).json(newMaterial);
  } catch {
    res.status(400).json({ error: 'Erro ao criar material' });
  }
};

export const updateMaterial = async (req: Request, res: Response) => {
  try {
    const updatedMaterial = await materialService.update(+req.params.id, req.body);
    if (!updatedMaterial) return res.status(404).json({ error: 'Material não encontrado' });
    res.json(updatedMaterial);
  } catch {
    res.status(400).json({ error: 'Erro ao atualizar material' });
  }
};

export const deleteMaterial = async (req: Request, res: Response) => {
  try {
    const deleted = await materialService.remove(+req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Material não encontrado' });
    res.json({ message: 'Material removido com sucesso' });
  } catch {
    res.status(500).json({ error: 'Erro ao remover material' });
  }
};
