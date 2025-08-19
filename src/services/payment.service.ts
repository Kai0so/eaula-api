import { Payment } from '../models/payment.model';

export const getAll = async () => Payment.findAll();

export const getById = async (id: number) => Payment.findByPk(id);

export const create = async (data: any) => {
  return Payment.create(data);
};

export const update = async (id: number, data: any) => {
  const payment = await Payment.findByPk(id);
  if (!payment) return null;
  await payment.update(data);
  return payment;
};

export const remove = async (id: number) => {
  const payment = await Payment.findByPk(id);
  if (!payment) return false;
  await payment.destroy();
  return true;
};
