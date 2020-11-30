import { Router } from 'express';
import linksController from '../controllers/links'

const router = Router();

router.post('/links', linksController.postLink);

router.get('/links/:code', linksController.hitLink); //devolve o link

router.get('/links/:code/stats', linksController.getLink); // traz informação do link

export default router;