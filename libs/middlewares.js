import express from 'express';

/**
 * Adds middlewares to extract the body from POST requests.
 **/
const injectMiddlewares = (myApp) => {
  myApp.use(express.json({ limit: '200mb' }));
};

export default injectMiddlewares;
