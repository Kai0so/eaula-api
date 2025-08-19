import { Area } from '../models/area.model';

export const getAllAreas = async () => {
  const areas = await Area.findAll();
  return areas;
};
