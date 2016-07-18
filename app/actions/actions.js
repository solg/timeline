import axios from 'axios'
import actionNames from './action-names'

const baseUrl = 'http://localhost:3000';

let serverUser = { username: 'gsolis', password: 'g50l15' };

const actions = {

  login (loginData) {
    return (dispatch, getState) => {
      dispatch(toggleLoading(true));

      setTimeout(() => {
        if(loginData.username === serverUser.username && loginData.password === serverUser.password) {
          dispatch(loginSuccess());
          dispatch(toggleLoading(false));
        }
        else {
          dispatch(tempToast({text: 'Login failed.', type: 'ERROR', timeout: 5000 }));
          dispatch(toggleLoading(false));
        }
      }, 1500);
      //dispatch(toggleLoading(true));

      // axios.post(`${baseUrl}/login`, loginData)
      //   .then((response) => {
      //     dispatch(tempToast({text: 'Timeline successfully loaded.', type: 'SUCCESS', timeout: 1500 }));
      //     dispatch(toggleLoading(false));
      //   })
      //   .catch((err) => {
      //     dispatch(tempToast({text: err, type: 'ERROR', timeout: 1500 }));
      //     dispatch(toggleLoading(false));
      //   });
    }
  },

  loadTimeline () {

    return (dispatch, getState) => {
      dispatch(toggleLoading(true));

      axios.get(`${baseUrl}/timeline`)
        .then((response) => {
          dispatch(timelineLoaded(response.data));
          dispatch(tempToast({text: 'Timeline successfully loaded.', type: 'SUCCESS', timeout: 5000 }));
          dispatch(toggleLoading(false));
        })
        .catch((err) => {
          dispatch(tempToast({text: err, type: 'ERROR', timeout: 5000 }));
          dispatch(toggleLoading(false));
        });
    }

  },

  addEntry (entry) {

    return (dispatch, getState) => {
      dispatch(toggleLoading(true));

      axios.post(`${baseUrl}/timeline`, entry)
        .then((response) => {
          dispatch(entryAdded(response.data));
          dispatch(tempToast({text: 'Entry successfully added.', type: 'INFO', timeout: 5000 }));
          dispatch(toggleLoading(false));
        })
        .catch((err) => {
          dispatch(tempToast({text: err, type: 'ERROR', timeout: 5000 }));
          dispatch(toggleLoading(false));
        });
    }

  },

  setActiveNav (navKey) {
    return { type: actionNames.SET_ACTIVE_NAV, data: navKey };
  },

  logout () {
    return { type: actionNames.LOGOUT };
  }

};

function loginSuccess () {
  return { type: actionNames.LOGIN_SUCCESS, data: true };
}

function timelineLoaded (timelineEntries) {
  return { type: actionNames.TIMELINE_LOADED, data: timelineEntries };
}

function entryAdded (entry) {
  return { type: actionNames.ENTRY_ADDED, data: entry };
}

function showToast (data) {
  return { type: actionNames.SHOW_TOAST, data: data };
}

function hideToast () {
  return { type: actionNames.HIDE_TOAST };
}

function tempToast (toast) {
  return (dispatch, getState) => {
    dispatch(showToast(toast));
    setTimeout(() => {
      dispatch(hideToast());
    }, toast.timeout)
  }
}

function toggleLoading (loading) {
  return { type: actionNames.TOGGLE_LOADING, data: loading };
}

export default actions;
