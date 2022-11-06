import { actions } from "../../apis/bookApi";
import apis from "../../apis";

const bookActions = (function () {
  const obj = {};

  obj.setDispatch = (dispatch) => {
    this.dispatch = dispatch
  }

  obj.saveBookData = (data) => {
    this.dispatch({type: actions.BOOK_SAVE_DATA, data: data})
  }

  obj.autoSaveBook = async (data) => {
    this.dispatch(await apis.book.createOrUpdateBook(data))
  }

  return obj;
})();

export default bookActions;
