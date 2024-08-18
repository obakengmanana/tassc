// src/services/taskService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

const getAuthConfig = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    },
  };
};

export const addTask = async (task) => {
  try {
    const response = await axios.post(API_URL, task, getAuthConfig());
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateTask = async (_id, updatedTask) => {
    try {
      const response = await axios.put(`${API_URL}/${_id}`, updatedTask, getAuthConfig());
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  

export const deleteTask = async (_id) => {
    try {
      const response = await axios.delete(`${API_URL}/${_id}`, getAuthConfig());
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL, getAuthConfig());
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getTask = async (taskId) => {
  try {
    const response = await axios.get(`${API_URL}/${taskId}`, getAuthConfig());
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
