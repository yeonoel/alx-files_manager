import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';

const injectRoutes = (myApp) => {
  myApp.get('/status', AppController.getStatus);
  myApp.get('/stats', AppController.getStats);

  myApp.post('/users', UsersController.postNew);
};

export default injectRoutes;
