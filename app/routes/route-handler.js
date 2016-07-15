import Riot from 'riot'
import routes from './routes'

Riot.route.stop(); // clear all the old Riot.route callbacks
Riot.route.start(); // start again

let handler = (collection, id, action) => {

  let fn = routes[collection || 'home']; // {home: fn} //collection = home
  return fn ? fn(id, action) : console.error('no route found : ', collection, id, action);

};

export default () => {
  Riot.route(handler);
  Riot.route.exec(handler);
}
