import express, { Request, Response } from 'express';
import next from 'next';
import path from 'path';

require('dotenv').config({
  path: path.join(__dirname, '../env/.env'),
});

const dev = process.env.NODE_ENV !== 'development';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;
console.log(process.env.PORT);

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.all('*', (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(
        `> Ready on localhost:${port} - env ${process.env.NODE_ENV} - http://127.0.0.1:${port}`,
      );
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
