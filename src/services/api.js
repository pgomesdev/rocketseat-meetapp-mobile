import axios from 'axios';

const api = axios.create({
  baseURL: '192.168.0.13:3001',
});

export default api;
