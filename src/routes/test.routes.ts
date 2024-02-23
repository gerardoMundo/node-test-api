import { Router } from 'express';

const router = Router();

router.get('/user/1', (request, response) => response.send({
    _id: 1,
    name: 'Gerardo',
    lastName: 'Mundo',
    phone: '5551234567',
    address: 'Av. Siempre Viva',
    email: 'gerardo.mundo@udg.edu.mx'
}));

export default router;