import axios from 'axios'

export const AuthorizedApiRequest = axios.create({
  baseURL: process.env.API_HOST,
  headers: {
    'Content-Type': 'application/json',
    session_token: localStorage.getItem('session_token'),
  },
})

export const UnauthorizedApiRequest = axios.create({
  baseURL: process.env.API_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
})
