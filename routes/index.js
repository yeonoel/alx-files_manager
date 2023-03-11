import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import { basicAuthenticate, xTokenAuthenticate } from '../middlewares/auth';

const injectRoutes = (myApp) => {
  myApp.get('/status', AppController.getStatus);
  myApp.get('/stats', AppController.getStats);

  myApp.get('/connect', basicAuthenticate, AuthController.getConnect);
  myApp.get('/disconnect', xTokenAuthenticate, AuthController.getDisconnect);
  myApp.get('users/me', xTokenAuthenticate, UsersController.getMe);

  myApp.post('/users', UsersController.postNew);
};

export default injectRoutes;
