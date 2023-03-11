import express from 'express';

import injectMiddlewares from './libs/middlewares';
import startServer from './libs/boot';
import injectRoutes from './routes/index';

const app = express();

injectMiddlewares(app);
injectRoutes(app);
startServer(app);

export default app;
