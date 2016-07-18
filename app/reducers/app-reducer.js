
import actionNames from '../actions/action-names'

let initialState = {
  isLoggedIn: false,
  activeNav: 'home',
  toast: null
 };

const appReducer = (state = initialState, action) => {

  switch (action.type) {

    case actionNames.LOGIN_SUCCESS:
        return Object.assign({}, state, { isLoggedIn: action.data });
      break;

    case actionNames.LOGOUT:
        return Object.assign({}, state, { isLoggedIn: false });
      break;

    case actionNames.SET_ACTIVE_NAV:
        return Object.assign({}, state, { activeNav: action.data });
      break;

    case actionNames.SHOW_TOAST:
        return Object.assign({}, state, { toast: action.data });
      break;

    case actionNames.HIDE_TOAST:
        return Object.assign({}, state, { toast: null });
      break;

    default:
      return state;
  }

};

export default appReducer;
