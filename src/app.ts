import express from 'express';
import cors from 'cors';

import { sequelize } from './database';

import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import studentRoutes from './routes/student.routes';
import courseRoutes from './routes/course.routes';
import categoryRoutes from './routes/category.routes';
import courseInstanceRoutes from './routes/courseInstance.routes';
import enrollmentRoutes from './routes/enrollment.routes';
import paymentRoutes from './routes/payment.routes';
import gradeRoutes from './routes/grade.routes';
import materialRoutes from './routes/material.routes';
import areaRoutes from './routes/area.routes';
import courseSubjectRoutes from './routes/courseSubject.routes';

import { authenticateJWT } from './middlewares/authMiddleware';
import { authorizeRoles } from './middlewares/roleMiddleware';

import { associateAll } from './models/associations';

associateAll();

const app = express();
app.use(cors());
app.use(express.json());

// ROTA PÚBLICA
app.use('/auth', authRoutes);

// ROTAS PROTEGIDAS
app.use('/users', userRoutes);
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/categories', categoryRoutes);
app.use('/course-instances', courseInstanceRoutes);
app.use('/enrollments', enrollmentRoutes);
app.use('/payments', paymentRoutes);
app.use('/grades', gradeRoutes);
app.use('/materials', materialRoutes);
app.use('/areas', areaRoutes); // supondo que áreas também sejam sensíveis
app.use('/course-subjects', courseSubjectRoutes);

// Testar conexão ao iniciar
sequelize.authenticate()
  .then(() => console.log('Conectado ao banco com sucesso!'))
  .catch((err) => console.error('Erro ao conectar com o banco:', err));

export default app;
