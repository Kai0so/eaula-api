import { Request, Response, NextFunction } from 'express';

export const isSelfOrRole = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const loggedUser = req.user;

    if (!loggedUser) {
      return res.status(401).json({ error: 'Não autenticado' });
    }

    const paramId = Number(req.params.id);

    // Permite se for o próprio usuário (mesmo ID)
    if (loggedUser.id === paramId) {
      return next();
    }

    // Permite se tiver uma role autorizada
    if (roles.includes(loggedUser.role)) {
      return next();
    }

    return res.status(403).json({ error: 'Acesso negado' });
  };
};
