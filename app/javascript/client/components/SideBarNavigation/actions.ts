import store from "../../store";
import apis from "../../apis";
import actions from "../../actions";

type authActionType = {
  [key: string]: Function
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
  [key: string]: Function
}

export const bookActions: bookActionType = {
  list: async () => {
    const result = await apis.book.getBooks()
    store.dispatch({type: actions.BOOK_LIST, data: result.data})
  },
  fetchChapters: async (bookId: string) => {
    const result = await apis.book.getBookChapters(bookId);
    store.dispatch({type: actions.BOOK_CHAPTER_LIST, data: result.data})
  },
  fetchPages: async (bookId: string) => {
    const result = await apis.book.getBookPages(bookId);
    store.dispatch({type: actions.BOOK_PAGE_LIST, data: result.data})
  }, 
}
