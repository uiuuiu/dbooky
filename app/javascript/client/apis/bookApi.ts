import { ApiType } from './api';
export const actions = {
  BOOK_SAVE_DATA: 'book/saveData',
  BOOK_AUTO_SAVE_DATA: 'book/autoSaveData',
}

const bookApi = (api: ApiType) => {
  return (
    {
      createOrUpdateBook: async (data) => {
        const result = await api.post('/api/books', data);
        return { type: actions.BOOK_AUTO_SAVE_DATA, data: result }
      }
    }
  )
}

export default bookApi;
