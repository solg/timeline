
let currentView = null;

function unmountIfExists () {
  if (currentView)
    currentView.unmount(true);
}

export default {

  login (id, action, store) {
    unmountIfExists();
    currentView = riot.mount('#view', 'login', { store: store })[0];
  },

  home (id, action, store) {
    unmountIfExists();
    currentView = riot.mount('#view', 'home', { store: store })[0];
  },

  timeline (id, action, store) {
    unmountIfExists();
    currentView = riot.mount('#view', 'timeline', { store: store })[0];
  },

  profile (id, action, store) {
    unmountIfExists();
    currentView = riot.mount('#view', 'profile', { store: store })[0];
    // switch (action) {
    //   case 'detail':
    //     var currentPage = Riot.mount('#view', 'people-detail', { person: params.people[id] });
    // }
  },

  settings (id, action, store) {
    unmountIfExists();
    currentView = riot.mount('#view', 'settings', { store: store })[0];
  },

  logout (id, action, store) {
    unmountIfExists();
    currentView = riot.mount('#view', 'logout', { store: store })[0];
    setTimeout(() => {
      riot.route('login');
    }, 1500);
  }
  
};
