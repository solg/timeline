import Riot from 'riot'
import store from '../store/store'

let currentView = null;

export default {
    home: (id, action) => {
      currentView = Riot.mount('#view', 'timeline', { store: store })[0];
    },
    profile: (id, action) => {
      currentView = Riot.mount('#view', 'profile', { store: store })[0];
      // switch (action) {
      //   case 'detail':
      //     var currentPage = Riot.mount('#view', 'people-detail', { person: params.people[id] });
      // }
    },
    settings: (id, action) => {
      currentView = Riot.mount('#view', 'settings', { store: store })[0];
    }
};
