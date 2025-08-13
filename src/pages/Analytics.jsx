// src/pages/Analytics.jsx
import { useEffect, useState } from "react";
import AdminLayout from "../components/Layout/AdminLayout";
import {
  FiDollarSign,
  FiUsers,
  FiShoppingBag,
  FiTrendingUp
} from "react-icons/fi";
import { getAnalyticsSummary } from "../service/analyticAPI";

const Analytics = () => {
  const [summary, setSummary] = useState({
    totalUsers: 0,
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const data = await getAnalyticsSummary();
        setSummary(data);
      } catch (err) {
        console.error("Error fetching analytics:", err);
        setError("Failed to load analytics data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  const stats = [
    {
      title: "Total Revenue",
      value: `$${Number(summary.totalRevenue || 0).toLocaleString()}`,
      change: "+12.5%",
      icon: <FiDollarSign size={24} />,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Total Users",
      value: summary.totalUsers,
      change: "+8.2%",
      icon: <FiUsers size={24} />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Total Products",
      value: summary.totalProducts,
      change: "+4.1%",
      icon: <FiShoppingBag size={24} />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Total Orders",
      value: summary.totalOrders,
      change: "+18.7%",
      icon: <FiTrendingUp size={24} />,
      color: "bg-amber-100 text-amber-600"
    }
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>

        {loading ? (
          <p className="text-gray-500">Loading analytics...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 transition hover:shadow-md"
              >
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className="text-sm font-medium text-emerald-500 flex items-center mt-1">
                      {stat.change} <FiTrendingUp className="ml-1" />
                    </p>
                  </div>
                  <div className={`h-12 mt-5 p-3 rounded-lg ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Analytics;
