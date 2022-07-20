import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000/api/v1'})


export const signIn = (formData) => API.post('/dj-rest-auth/login/',formData)
export const signUp = (formData) => API.post('/dj-rest-auth/registration/',formData)