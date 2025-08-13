// service/analytic.API.js
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const getAnalyticsSummary = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/analytics`);
    return response.data;
  } catch (error) {
    console.error("Error fetching analytics:", error);
    throw error;
  }
};
