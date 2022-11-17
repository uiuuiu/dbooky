import { ApiType } from './api';

const bookApi = (api: ApiType) => {
  return (
    {
      postBook: (data) => {
        return api.post('/api/books', data);
      },
      getBooks: () => {
        return api.get('/api/books');
      }
    }
  )
}

export default bookApi;
