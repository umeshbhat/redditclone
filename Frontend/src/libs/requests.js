import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3001'

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
  // 'x-user-lang-pref': 'en'
  // 'Access-Control-Allow-Origin': 'http://localhost:3002'
}

const get = async (url) => axios.get(url, { headers })

const post = async (url, data) => axios.post(url, data, { headers })

const put = async (url, data) => axios.put(url, data, { headers })

const del = async (url) => axios.delete(url, { headers })

export { get, post, put, del }
