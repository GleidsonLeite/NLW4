import { Router } from 'express';
import usersRouter from './UsersRouter';
import { surveysRouter } from './SurveysRouter';
import { mailRouter } from './MailRouter';
const router = Router();

router.use('/users', usersRouter);
router.use('/surveys', surveysRouter);
router.use('/sendMail', mailRouter);
export default router;
