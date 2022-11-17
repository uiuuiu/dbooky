import { combineReducers } from 'redux';
import appReducer from './appReducer';
import authReducer from './authReducer';
import bookReducer from './bookReducer';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  book: bookReducer
})

export default rootReducer;
