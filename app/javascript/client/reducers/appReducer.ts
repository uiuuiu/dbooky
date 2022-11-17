import { AnyAction } from 'redux';
import actions from '../actions';

const initialState = {
  selectedTab: localStorage.getItem('selectedTab') || "1"
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action: AnyAction) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions

    case actions.APP_CHANGE_SIDEBAR_TAB:
      localStorage.setItem('selectedTab', action.data);
      return {
        ...state,
        selectedTab: action.data,
      }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}