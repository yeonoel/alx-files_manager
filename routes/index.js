import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import { basicAuthenticate, xTokenAuthenticate } from '../middlewares/auth';
import FilesController from '../controllers/FilesController';

const injectRoutes = (myApp) => {
  myApp.get('/status', AppController.getStatus);
  myApp.get('/stats', AppController.getStats);

  myApp.get('/connect', basicAuthenticate, AuthController.getConnect);
  myApp.get('/disconnect', xTokenAuthenticate, AuthController.getDisconnect);

  myApp.post('/users', UsersController.postNew);
  myApp.get('/users/me', xTokenAuthenticate, UsersController.getMe);

  myApp.post('/files', xTokenAuthenticate, FilesController.postUpload);
  myApp.get('/files/:id', xTokenAuthenticate, FilesController.getShow);
  myApp.get('/files', xTokenAuthenticate, FilesController.getIndex);
  myApp.put('/files/:id/publish', xTokenAuthenticate, FilesController.putPublish);
  myApp.put('/files/:id/unpublish', xTokenAuthenticate, FilesController.putUnpublish);
  myApp.get('/files/:id/data', FilesController.getFile);

  myApp.all('*', (req, res, next) => {
    errorResponse(new APIError(404, `Cannot ${req.method} ${req.url}`), req, res, next);
  });
  myApp.use(errorResponse);
};

export default injectRoutes;
