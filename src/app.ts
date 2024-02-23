import express from 'express';
import routes from './routes/test.routes';

const app = express();

app.set('port', 3001);
app.use(express.json());
app.use(routes);

export default app;