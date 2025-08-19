import { Request, Response } from 'express';
import { getAllAreas } from '../services/area.service';

export const getAreasController = async (req: Request, res: Response) => {
  try {
    const areas = await getAllAreas();
    res.status(200).json(areas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar areas' });
  }
};
