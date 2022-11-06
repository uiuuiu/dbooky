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

const Api = () => {
  return (
    {
      get: (endPoint, query, cb) => {
        axios({
          url: endPoint,
          method: 'get',
          data: query
        })
        .then(res => {
          console.log(res)
          if(cb) cb()
        })
        .catch(error => console.log(error));
      },
      post: (endPoint, body, cb) => {
        axios({
          url: endPoint,
          method: 'post',
          data: body
        })
        .then(res => {
          console.log(res)
          if(cb) cb()
        })
        .catch(error => console.log(error));
      },
    }
  )
}

export default Api();
