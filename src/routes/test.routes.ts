import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => response.send('Ruta de GET'));

export default router;