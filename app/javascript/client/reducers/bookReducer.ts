import { AnyAction } from 'redux';
import actions from '../actions';

const initialState = {
  edittingBookData: localStorage.getItem('edittingBookData'),
  books: [],
  chapters: [],
  pages: []
}

// Use the initialState as a default value
export default function authReducer(state = initialState, action: AnyAction) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions

    case actions.BOOK_SAVE_DATA:
      localStorage.setItem('edittingBookData', action.data);
      return {
        ...state,
        edittingBookData: action.data,
      }
    case actions.BOOK_AUTO_SAVE_DATA:
      return {
        ...state
      }
    case actions.BOOK_LIST:
      return {
        ...state,
        books: action.data.data
      }
    case actions.BOOK_CHAPTER_LIST:
      return {
        ...state,
        chapters: action.data.data
      }
    case actions.BOOK_PAGE_LIST:
      return {
        ...state,
        pages: action.data.data
      }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}