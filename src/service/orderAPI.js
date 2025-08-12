import axios from "axios";

const BASE_URL = "http://localhost:3000/api/orders";

// Get all orders
export const getAllOrders = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Get order by ID
export const getOrderById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

// Create a new order
export const createOrder = async (orderData) => {
  const response = await axios.post(BASE_URL, orderData);
  return response.data;
};

// Update an existing order
export const updateOrder = async (id, updatedData) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updatedData);
  return response.data;
};

// Delete an order
export const deleteOrder = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
