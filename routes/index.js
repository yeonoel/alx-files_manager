import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import { basicAuthenticate, xTokenAuthenticate } from '../middlewares/auth';

const injectRoutes = (myApp) => {
  myApp.get('/status', AppController.getStatus);
  myApp.get('/stats', AppController.getStats);

  myApp.get('/connect', basicAuthenticate, AuthController.getConnect);
  myApp.get('/disconnect', xTokenAuthenticate, AuthController.getDisconnect);

  myApp.post('/users', UsersController.postNew);
  myApp.get('/users/me', xTokenAuthenticate, UsersController.getMe);
};

export default injectRoutes;
