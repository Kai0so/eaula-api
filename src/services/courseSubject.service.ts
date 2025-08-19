import { CourseSubject } from '../models/courseSubject.model';

export const getAllCourseSubjects = async () => {
  return await CourseSubject.findAll();
};

export const getCourseSubjectById = async (id: number) => {
  return await CourseSubject.findByPk(id);
};

export const createCourseSubject = async (data: {
  course_id: number;
  name: string;
  workload_hours?: number;
}) => {
  return await CourseSubject.create(data);
};

export const updateCourseSubject = async (id: number, data: Partial<CourseSubject>) => {
  const subject = await CourseSubject.findByPk(id);
  if (!subject) return null;
  return await subject.update(data);
};

export const deleteCourseSubject = async (id: number) => {
  return await CourseSubject.destroy({ where: { id } });
};
