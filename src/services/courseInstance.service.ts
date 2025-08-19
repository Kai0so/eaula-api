import { CourseInstance } from '../models/courseInstance.model';

export const getAll = async () => CourseInstance.findAll();

export const getById = async (id: number) => CourseInstance.findByPk(id);

export const create = async (data: any) => {
  return CourseInstance.create(data);
};

export const update = async (id: number, data: any) => {
  const instance = await CourseInstance.findByPk(id);
  if (!instance) return null;
  await instance.update(data);
  return instance;
};

export const remove = async (id: number) => {
  const instance = await CourseInstance.findByPk(id);
  if (!instance) return false;
  await instance.destroy();
  return true;
};
