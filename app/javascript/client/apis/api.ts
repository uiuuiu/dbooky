import axios from 'axios';

// type FunctionGet = {
//   endPoint: string,
//   query?: string,
//   cb?: Function
// }

export type ApiType = {
  get: Function,
  post: Function
}

export type ApiResponseType = {
  status: number; data: { err: any; };
}

const Api = () => {
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return (
    {
      get: (endPoint: string, query: any) => {
        return(
          axios({
            url: endPoint,
            method: 'get',
            data: query,
            ...config
          })
        )
      },
      post: (endPoint: string, body: any) => {
        return(
          axios({
            url: endPoint,
            method: 'post',
            data: body,
            ...config
          })
        )
      },
    }
  )
}

export default Api();
