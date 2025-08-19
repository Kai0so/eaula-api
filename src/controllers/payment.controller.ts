import { Request, Response } from 'express';
import * as paymentService from '../services/payment.service';

export const getAllPayments = async (req: Request, res: Response) => {
  try {
    const payments = await paymentService.getAll();
    res.json(payments);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar pagamentos' });
  }
};

export const getPaymentById = async (req: Request, res: Response) => {
  try {
    const payment = await paymentService.getById(+req.params.id);
    if (!payment) return res.status(404).json({ error: 'Pagamento não encontrado' });
    res.json(payment);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar pagamento' });
  }
};

export const createPayment = async (req: Request, res: Response) => {
  try {
    const newPayment = await paymentService.create(req.body);
    res.status(201).json(newPayment);
  } catch {
    res.status(400).json({ error: 'Erro ao criar pagamento' });
  }
};

export const updatePayment = async (req: Request, res: Response) => {
  try {
    const updatedPayment = await paymentService.update(+req.params.id, req.body);
    if (!updatedPayment) return res.status(404).json({ error: 'Pagamento não encontrado' });
    res.json(updatedPayment);
  } catch {
    res.status(400).json({ error: 'Erro ao atualizar pagamento' });
  }
};

export const deletePayment = async (req: Request, res: Response) => {
  try {
    const deleted = await paymentService.remove(+req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Pagamento não encontrado' });
    res.json({ message: 'Pagamento removido com sucesso' });
  } catch {
    res.status(500).json({ error: 'Erro ao remover pagamento' });
  }
};
