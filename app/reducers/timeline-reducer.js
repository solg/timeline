
import actionNames from '../actions/action-names'

let initialState = { timeline: [] };

const timelineReducer = (state = initialState, action) => {

  switch (action.type) {

    case actionNames.TIMELINE_LOADED:
        return Object.assign({}, state, { timeline: action.data });
      break;

    case actionNames.ENTRY_ADDED:
        let last = state.timeline[0], align = 'left';
        if (last) align = last.align === 'left' ? 'right' : 'left';
        action.data.align = align;

        return Object.assign({}, state, { timeline: [action.data, ...state.timeline] });
      break;

    default:
      return state;

  }

};

export default timelineReducer;
