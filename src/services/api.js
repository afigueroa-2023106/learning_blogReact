import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:2636/v1', // NO pongas doble /v1 en los servicios
  headers: {
    'Content-Type': 'application/json'
  }
});

export default API;
