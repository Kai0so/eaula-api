import { Course } from '../models/course.model';
import { InstitutionalCourse } from '../models/institutionalCourse.model';

export const getAll = async () => InstitutionalCourse.findAll();

export const getById = async (id: number) => InstitutionalCourse.findByPk(id);

export const create = async (data: any) => {
  return InstitutionalCourse.create(data);
};

export const update = async (id: number, data: any) => {
  const course = await InstitutionalCourse.findByPk(id);
  if (!course) return null;
  await course.update(data);
  return course;
};

export const remove = async (id: number) => {
  const course = await InstitutionalCourse.findByPk(id);
  if (!course) return false;
  await course.destroy();
  return true;
};
