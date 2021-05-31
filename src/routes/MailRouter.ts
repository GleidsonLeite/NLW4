import { Router } from 'express';
import { SendMailController } from '../controllers/SendMailController';

const mailRouter = Router();
const sendMailController = new SendMailController();

mailRouter.post('/', sendMailController.execute);

export { mailRouter };
