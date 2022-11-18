import store from "../store";
import actions from ".";

const appActions = {
  changeSidebarTab: (tab: string) => {
    store.dispatch({type: actions.APP_CHANGE_SIDEBAR_TAB, data: tab})
  },
  selectBook: (book: {}) => {
    store.dispatch({type: actions.BOOK_SELECT, data: book})
  }
}

export default appActions;
