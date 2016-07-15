import Riot from 'riot'
import store from '../store/store'

let currentView = null;

export default {
    home: (id, action) => {
      if (currentView)
        currentView.unmount(true);

      currentView = Riot.mount('#view', 'home', { store: store })[0];
    },
    timeline: (id, action) => {
      if (currentView)
        currentView.unmount(true);

      currentView = Riot.mount('#view', 'timeline', { store: store })[0];
    },
    profile: (id, action) => {
      if (currentView)
        currentView.unmount(true);

      currentView = Riot.mount('#view', 'profile', { store: store })[0];
      // switch (action) {
      //   case 'detail':
      //     var currentPage = Riot.mount('#view', 'people-detail', { person: params.people[id] });
      // }
    },
    settings: (id, action) => {
      if (currentView)
        currentView.unmount(true);

      currentView = Riot.mount('#view', 'settings', { store: store })[0];
    }
};
