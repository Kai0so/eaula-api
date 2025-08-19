import { Material } from '../models/material.model';

export const getAll = async () => Material.findAll();

export const getById = async (id: number) => Material.findByPk(id);

export const create = async (data: any) => {
  return Material.create(data);
};

export const update = async (id: number, data: any) => {
  const material = await Material.findByPk(id);
  if (!material) return null;
  await material.update(data);
  return material;
};

export const remove = async (id: number) => {
  const material = await Material.findByPk(id);
  if (!material) return false;
  await material.destroy();
  return true;
};
