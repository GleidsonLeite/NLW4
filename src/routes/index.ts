import { Router } from 'express';
import usersRouter from './UsersRouter';
import { surveysRouter } from './SurveysRouter';
const router = Router();

router.use('/users', usersRouter);
router.use('/surveys', surveysRouter);

export default router;
