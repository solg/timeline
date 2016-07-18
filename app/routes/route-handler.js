
import routes from './routes'
import store from '../store/store'

riot.route.stop(); // clear all the old Riot.route callbacks
riot.route.start(); // start again

let handler = (collection, id, action) => {
  let isLoggedIn = store.getState().app.isLoggedIn;
  if(!isLoggedIn && collection !== 'login'){
    riot.route('login');
    return;
  }

  let fn = routes[collection || 'home']; // { home: function(){} } //collection = home
  return fn ? fn(id, action, store) : console.error('no route found : ', collection, id, action);

};

export default () => {
  riot.route(handler);
  riot.route.exec(handler);
}
