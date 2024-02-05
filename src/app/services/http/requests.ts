import axios from 'axios'

import { SESSION_TOKEN_KEY } from '@app/constants'

export const AuthorizedApiRequest = axios.create({
  baseURL: process.env.API_HOST,
  headers: {
    'Content-Type': 'application/json',
    session_token: localStorage.getItem(SESSION_TOKEN_KEY),
  },
})

export const UnauthorizedApiRequest = axios.create({
  baseURL: process.env.API_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
})
