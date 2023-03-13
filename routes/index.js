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
  api.get('/files/:id', xTokenAuthenticate, FilesController.getShow);
  api.get('/files', xTokenAuthenticate, FilesController.getIndex);
  api.put('/files/:id/publish', xTokenAuthenticate, FilesController.putPublish);
  api.put('/files/:id/unpublish', xTokenAuthenticate, FilesController.putUnpublish);
  api.get('/files/:id/data', FilesController.getFile);

  api.all('*', (req, res, next) => {
    errorResponse(new APIError(404, `Cannot ${req.method} ${req.url}`), req, res, next);
  });
  api.use(errorResponse);
};

export default injectRoutes;
