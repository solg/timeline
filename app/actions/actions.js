import axios from 'axios'
import actionNames from './action-names'

const baseUrl = 'http://localhost:3000';

const actions = {

  loadTimeline () {

    return (dispatch, getState) => {
      dispatch(toggleLoading(true));

      axios.get(`${baseUrl}/timeline`)
        .then((response) => {
          dispatch(timelineLoaded(response.data));
          dispatch(tempToast({msg: 'Timeline successfully loaded.', type: 'SUCCESS', timeout: 1500 }));
          dispatch(toggleLoading(false));
        })
        .catch((err) => {
          dispatch(tempToast({msg: err, type: 'ERROR', timeout: 1500 }));
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
          dispatch(tempToast({msg: 'Entry successfully added.', type: 'SUCCESS', timeout: 1500 }));
          dispatch(toggleLoading(false));
        })
        .catch((err) => {
          dispatch(tempToast({msg: err, type: 'ERROR', timeout: 1500 }));
          dispatch(toggleLoading(false));
        });
    }

  },

  setActiveNav (navKey) {
    return { type: actionNames.SET_ACTIVE_NAV, data: navKey };
  }

};

function timelineLoaded (timelineEntries) {
  return { type: actionNames.TIMELINE_LOADED, data: timelineEntries };
}

function entryAdded (entry) {
  return { type: actionNames.ENTRY_ADDED, data: entry };
}

function showMsg (data) {
  return { type: actionNames.SHOW_MSG, data: data };
}

function hideMsg () {
  return { type: actionNames.HIDE_MSG };
}

function tempToast (msgData) {
  return (dispatch, getState) => {
    dispatch(showMsg(msgData));
    setTimeout(() => {
      dispatch(hideMsg());
    }, msgData.timeout)
  }
}

function toggleLoading (loading) {
  return { type: actionNames.TOGGLE_LOADING, data: loading };
}

export default actions;
