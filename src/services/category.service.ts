import { Category } from '../models/category.model';

export const getAll = async () => Category.findAll();

export const getById = async (id: number) => Category.findByPk(id);

export const create = async (data: any) => {
  return Category.create(data);
};

export const update = async (id: number, data: any) => {
  const category = await Category.findByPk(id);
  if (!category) return null;
  await category.update(data);
  return category;
};

export const remove = async (id: number) => {
  const category = await Category.findByPk(id);
  if (!category) return false;
  await category.destroy();
  return true;
};
