import { AnyAction } from 'redux';
import actions from '../actions';

const initialState = {
  // token: localStorage.getItem('token'),
  loginSuccess: false,
  loginError: null,
  loggedIn: localStorage.getItem('loggedIn') === 'true'
}

// Use the initialState as a default value
export default function authReducer(state = initialState, action: AnyAction) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions

    case actions.AUTH_LOGIN:
      localStorage.setItem('loggedIn', 'true');
      return {
        ...state,
        loginSuccess: true,
        loggedIn: true
      }
    case actions.AUTH_LOGIN_ERROR:
      // localStorage.setItem('token', action.data.token);
      return {
        ...state,
        // token: action.data.token,
        loginError: action.data.error
      }
    case actions.AUTH_LOGOUT:
      localStorage.removeItem('loggedIn');
      return {
        ...state,
        loginSuccess: false,
        loggedIn: false
      }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}