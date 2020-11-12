import axios from 'axios';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '..', '..', '..', '.env') });

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export default api;
