import { Router } from 'express';
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from '../controllers/student.controller';

import { authenticateJWT } from '../middlewares/authMiddleware';
import { authorizeRoles } from '../middlewares/roleMiddleware';
import { isSelfOrRole } from '../middlewares/isSelfOrRole';

const router = Router();

// 🧾 Listar todos os estudantes – apenas papéis internos
router.get('/', authenticateJWT, authorizeRoles('admin', 'coord', 'atendente'), getAllStudents);

// 👤 Ver um estudante específico – ele mesmo OU usuários internos
router.get('/:id', authenticateJWT, isSelfOrRole('admin', 'coord', 'atendente'), getStudentById);

// 📝 Criar estudante – público (ex: matrícula aberta)
router.post('/', createStudent);

// ✏️ Atualizar estudante – ele mesmo OU admin/coord
router.put('/:id', authenticateJWT, isSelfOrRole('admin', 'coord'), updateStudent);

// ❌ Deletar estudante – apenas admin
router.delete('/:id', authenticateJWT, authorizeRoles('admin'), deleteStudent);

export default router;
