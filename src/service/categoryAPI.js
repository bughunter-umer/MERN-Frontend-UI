import axios from "axios";

const BASE_URL = "http://localhost:3000/api/categories";

// Create a new category
export const createCategory = async (categoryData) => {
  const response = await axios.post(`${BASE_URL}/createCategories`, categoryData);
  return response.data;
};

// Get all categories
export const getAllCategories = async () => {
  const response = await axios.get(`${BASE_URL}/`);
  return response.data;
};

// Get category by ID
export const getCategoryById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

// Update a category
export const updateCategory = async (id, updatedData) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updatedData);
  return response.data;
};

// Delete a category
export const deleteCategory = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
