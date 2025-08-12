import axios from "axios";

const BASE_URL = "http://localhost:3000/api/users";

// Create a new user
export const createUser = async (userData) => {
  const response = await axios.post(`${BASE_URL}/createUser`, userData);
  return response.data;
};

// Get all users
export const getAllUsers = async () => {
  const response = await axios.get(`${BASE_URL}/getAllUsers`);
  return response.data;
};

// Delete a user
export const deleteUser = async (id) => {
  const response = await axios.delete(`${BASE_URL}/deleteUser/${id}`);
  return response.data;
};

// Update a user
export const updateUser = async (id, updatedData) => {
  const response = await axios.put(`${BASE_URL}/updateUser/${id}`, updatedData);
  return response.data;
};
