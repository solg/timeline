
import actionNames from '../actions/action-names'

let initialState = {};

const userReducer = (state = initialState, action) => {

  switch (action.type) {

    case actionNames.CHANGE_NAME:
        return Object.assign({}, state, { name: action.data });
      break;

    case actionNames.CHANGE_AGE:
        return Object.assign({}, state, { age: action.data });
      break;

    default:
      return state;
  }

};

export default userReducer;
