import axios from 'axios'

export const apiNibAssento = axios.create({
  baseURL: 'https://backendreservaassentosnib-production.up.railway.app'
  // 'http://localhost:3001'
})
export default apiNibAssento
