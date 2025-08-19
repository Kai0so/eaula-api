import { User } from '../models/user.model';
import bcrypt from 'bcrypt';

export const getAll = async () => User.findAll();

export const getById = async (id: number) => User.findByPk(id);

export const create = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return User.create({
    ...data,
    password_hash: hashedPassword,
  });
};

export const update = async (id: number, data: any) => {
  const user = await User.findByPk(id);
  if (!user) return null;

  if (data.password) {
    data.password_hash = await bcrypt.hash(data.password, 10);
  }

  await user.update(data);
  return user;
};

export const remove = async (id: number) => {
  const user = await User.findByPk(id);
  if (!user) return false;
  await user.destroy();
  return true;
};
