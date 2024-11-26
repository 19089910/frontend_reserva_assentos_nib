import axios from 'axios'

export const apiNibAssento = axios.create({
  baseURL: 'http://localhost:3001'
})
export default apiNibAssento
