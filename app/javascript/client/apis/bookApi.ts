import { ApiType } from './api';

const bookApi = (api: ApiType) => {
  return (
    {
      postBook: (data) => {
        return api.post('/api/books', data);
      },
      getBooks: () => {
        return api.get('/api/books');
      },
      getBookChapters: (bookId) => {
        return api.get(`/api/books/${bookId}/chapters`)
      },
      getBookPages: (bookId) => {
        return api.get(`/api/books/${bookId}/pages`)
      },
    }
  )
}

export default bookApi;
