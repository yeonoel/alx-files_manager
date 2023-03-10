import express from 'express';
import startServer from './libs/boot';
import injectRoutes from './routes/index';

const app = express();

injectRoutes(app);
startServer(app);

export default app;
