import express from 'express';
import pool from './db/server.js';
import Router from './routes/Router.js';

const app = express();
const port = 8000;

app.use(express.json());
app.use('/', Router);

app.listen(port, () => console.log(`server is running on port: ${port}`));