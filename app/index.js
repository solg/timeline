
import bootstrap from './libs/bootstrap/dist/css/bootstrap.css'
import ionicons from './libs/ionicons/css/ionicons.css'
import main from './main.less'

import routeHandler from './routes/route-handler'
import store from './store/store'

//Import main component
import app from './components/app.component'

(() => {

  riot.mount('app', { store: store });
  routeHandler();

})();
