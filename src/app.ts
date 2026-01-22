import express from 'express'
import type { Application, Request, Response } from 'express'

const app: Application = express();

app.use(express.json({ limit: '16kb' }));

app.use(express.urlencoded({ extended: true, limit: '16kb' }));

app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
    return res
    .status(200)
    .json({
        name: 'Prantik'
    })
})

export { app };