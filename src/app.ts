import express, { type Application } from 'express'

const app: Application = express();

app.use(express.json({ limit: '16kb' }));

app.use(express.urlencoded({ extended: true, limit: '16kb' }));

app.use(express.static('public'));

export { app };