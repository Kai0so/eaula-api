import { Student } from '../models/student.model';
import bcrypt from 'bcrypt';

export const getAll = async () => {
  return await Student.findAll();
};

export const getById = async (id: number) => {
  return await Student.findByPk(id);
};

export const create = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const student = await Student.create({
    ...data,
    password_hash: hashedPassword,
  });
  return student;
};

export const update = async (id: number, data: any) => {
  const student = await Student.findByPk(id);
  if (!student) return null;

  if (data.password) {
    data.password_hash = await bcrypt.hash(data.password, 10);
  }

  await student.update(data);
  return student;
};

export const remove = async (id: number) => {
  const student = await Student.findByPk(id);
  if (!student) return false;
  await student.destroy();
  return true;
};
