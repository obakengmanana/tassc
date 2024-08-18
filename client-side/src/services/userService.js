// src/services/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

const getAuthConfig = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    },
  };
};

export const getProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/me`, getAuthConfig());
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateProfile = async (userData) => {
  try {
    const response = await axios.put(`${API_URL}/me`, userData, getAuthConfig());
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
