import axios from "axios";

const BASE_URL = "http://localhost:3000/api/products";

// Create a new product
export const createproduct = async (productData) => {
  const response = await axios.post(`${BASE_URL}/createProduct`, productData);
  return response.data;
};

// Get all products
export const getAllproducts = async () => {
  const response = await axios.get(`${BASE_URL}/`);
  return response.data;
};

// Get product by ID
export const getproductById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

// Update a product
export const updateproduct = async (id, updatedData) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updatedData);
  return response.data;
};

// Delete a product
export const deleteproduct = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
