import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL;
const categories_url = `${BASE_URL}/categories`

// Create a new category
export const createCategory = async (categoryData) => {
  const response = await axios.post(`${categories_url}/createCategories`, categoryData);
  return response.data;
};

// Get all categories
export const getAllCategories = async () => {
  const response = await axios.get(`${categories_url}/`);
  return response.data;
};

// Get category by ID
export const getCategoryById = async (id) => {
  const response = await axios.get(`${categories_url}/${id}`);
  return response.data;
};

// Update a category
export const updateCategory = async (id, updatedData) => {
  const response = await axios.put(`${categories_url}/${id}`, updatedData);
  return response.data;
};

// Delete a category
export const deleteCategory = async (id) => {
  const response = await axios.delete(`${categories_url}/${id}`);
  return response.data;
};
