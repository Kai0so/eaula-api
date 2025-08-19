import { Grade } from '../models/grade.model';

export const getAll = async () => Grade.findAll();

export const getById = async (id: number) => Grade.findByPk(id);

export const create = async (data: any) => {
  return Grade.create(data);
};

export const update = async (id: number, data: any) => {
  const grade = await Grade.findByPk(id);
  if (!grade) return null;
  await grade.update(data);
  return grade;
};

export const remove = async (id: number) => {
  const grade = await Grade.findByPk(id);
  if (!grade) return false;
  await grade.destroy();
  return true;
};
