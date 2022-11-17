import {bindActionCreators} from 'redux';
import actions from "../../actions";
import apis from "../../apis";
import {ApiResponseType} from "../../apis/api";
import store from '../../store';

type bookActionType = {
  saveBookData: Function,
  autoSaveBook: (data: any) => void;

}

const bookActions: bookActionType = {
  saveBookData: (data: any) => {
    store.dispatch({type: actions.BOOK_SAVE_DATA, data: data})
  },
  autoSaveBook: (data: any) => {
    return apis.book.postBook(data)
      .then((res: ApiResponseType) => {
        store.dispatch({ type: actions.BOOK_AUTO_SAVE_DATA, data: res.data })
      })
  }
}
export default bookActions;
