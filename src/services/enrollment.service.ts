import { Enrollment } from '../models/enrollment.model';

export const getAll = async () => Enrollment.findAll();

export const getById = async (id: number) => Enrollment.findByPk(id);

export const create = async (data: any) => {
  return Enrollment.create(data);
};

export const update = async (id: number, data: any) => {
  const enrollment = await Enrollment.findByPk(id);
  if (!enrollment) return null;
  await enrollment.update(data);
  return enrollment;
};

export const remove = async (id: number) => {
  const enrollment = await Enrollment.findByPk(id);
  if (!enrollment) return false;
  await enrollment.destroy();
  return true;
};
