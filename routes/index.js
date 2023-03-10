import AppController from '../controllers/AppController'


const injectRoutes = (myApp) => {

  myApp.get('/status', AppController.getStatus);
  myApp.get('/stats', AppController.getStats);

}

export default injectRoutes;
