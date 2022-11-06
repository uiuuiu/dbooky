import Api from './api';
import authApi from './authApi';
import bookApi from './bookApi';

type ApisType = {
  [key: string]: Function;
}

const mapApitoApis = (apis: ApisType) => {
  return Object.fromEntries(
    Object.entries(apis).map(([apiName, apiFC]) => { return [apiName, apiFC(Api)] })
  )
}

const Apis = {
  auth: authApi,
  book: bookApi
}

export default mapApitoApis(Apis);
