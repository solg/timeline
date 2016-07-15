
import actionNames from '../actions/action-names'

let initialState = { activeNav: 'home' };

const appReducer = (state = initialState, action) => {

  switch (action.type) {

    case actionNames.SET_ACTIVE_NAV:
        return Object.assign({}, state, { activeNav: action.data });
      break;

    default:
      return state;
  }

};

export default appReducer;
