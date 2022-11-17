import store from "../../store";
import apis from "../../apis";
import actions from "../../actions";

type authActionType = {
  login: Function,
  logout: Function,
  register: Function
}

export const authActions: authActionType = {
  login: async ({email, password}) => {
    const data = {
      user: {
        email: email,
        password: password
      }
    }
    const result = await apis.auth.login(data);
    store.dispatch({type: actions.AUTH_LOGIN, data: result.data});
  },
  logout: async () => {
    const result = await apis.auth.logout();
    store.dispatch({type: actions.AUTH_LOGOUT, data: result.data})
  },
  register: async (data) => {
    // this.dispatch(await apis.book.createOrUpdateBook(data))
  },
}

type bookActionType = {
  list: Function
}

export const bookActions: bookActionType = {
  list: async () => {
    store.dispatch(await apis.book.getBooks())
  }
}
