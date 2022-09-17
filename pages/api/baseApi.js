import axios from 'axios'

const baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://www.admins.alarcongroup.us/balam/index.php/wp-json/api'
    : 'http://www.admins.alarcongroup.us/balam/index.php/wp-json/api'

export const baseApi = axios.create({
  baseURL
})
