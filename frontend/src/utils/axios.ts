import axios from 'axios'



export const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1/'
  // headers: {'X-Custom-Header': 'foobar'}

});

// api.defaults.headers.common['Authorization'] = AUTH_TOKEN;
