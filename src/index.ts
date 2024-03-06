import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Test server 1');
});

app.get('/serverV1', (req: Request, res: Response) => {
  res.send('Route: serverV1');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at port ${port}`);
});
