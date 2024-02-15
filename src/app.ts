const express = require('express');

const app = express();

app.set('port', 3001);
app.use(express.json());
export default app;