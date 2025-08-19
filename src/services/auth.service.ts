import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()
import bcrypt from 'bcrypt';
import { User } from '../models/user.model';
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) throw new Error('JWT_SECRET não definido');

interface JwtPayload {
  id: number;
  role: string;
}

export const authenticate = async (email: string, password: string) => {
  const user = await User.findOne({ where: { email } });
  if (!user) return null;

  const validPassword = await bcrypt.compare(password, user.password_hash);
  if (!validPassword) return null;

  const payload: JwtPayload = {
    id: user.id,
    role: user.role,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });
  return { token, user };
};
