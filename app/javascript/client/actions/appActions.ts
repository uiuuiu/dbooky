import store from "../store";
import actions from ".";

const appActions = {
  changeSidebarTab: (tab) => {
    store.dispatch({type: actions.APP_CHANGE_SIDEBAR_TAB, data: tab})
  }
}

export default appActions;
