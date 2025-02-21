import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (username, password) => {
  try {
    const response = await api.post('/token/', { username, password });
    localStorage.setItem('token', response.data.access);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post('/users/', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getChallenges = async () => {
  try {
    const response = await api.get('/challenges/');
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const submitChallenge = async (challengeId, code) => {
  try {
    const response = await api.post('/submissions/', {
      challenge: challengeId,
      code,
      status: 'pending',
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getUserProfile = async () => {
  try {
    const response = await api.get('/users/me/');
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export default api;
