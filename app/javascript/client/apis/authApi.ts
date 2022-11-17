import { ApiType } from "./api";

const authApi = (api: ApiType) => {
  return ({
    login: (data) => {
      return api.post('/users/sign_in', data);
    },
    logout: () => {
      return api.get('/users/sign_out');
    },
  })
}

export default authApi;