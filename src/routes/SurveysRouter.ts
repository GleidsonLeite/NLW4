import { Router } from 'express';
import { SurveysController } from '../controllers/SurveysController';

const surveysRouter = Router();
const surveysController = new SurveysController();

surveysRouter.post('/', surveysController.create);

surveysRouter.get('/', surveysController.show);

export { surveysRouter };
