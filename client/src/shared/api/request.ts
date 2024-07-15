import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

export const request = axios.create({
  baseURL: BASE_URL,
  timeout: 1000
})
