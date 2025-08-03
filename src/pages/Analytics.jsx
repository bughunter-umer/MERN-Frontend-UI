import AdminLayout from "../components/Layout/AdminLayout";
import { 
  FiDollarSign, 
  FiUsers, 
  FiShoppingBag, 
  FiTrendingUp,
  FiPieChart,
  FiBarChart2
} from "react-icons/fi";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  // Sample data for charts
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' , 'july' , 'Aug' , 'Sep'],
    datasets: [
      {
        label: 'Sales 2025',
        data: [12000, 19000, 15000, 22000, 25000, 30000 , 31000 , 20000],
        backgroundColor: 'rgba(20, 184, 166, 0.5)',
        borderColor: 'rgba(20, 184, 166, 1)',
        borderWidth: 0.5,
        tension: 0.5
      }
    ]
  };

  const customerData = {
    labels: ['New', 'Returning', 'Inactive'],
    datasets: [
      {
        data: [300, 150, 50],
        backgroundColor: [
          'rgba(20, 184, 166, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(240, 253, 250, 0.7)'
        ],
        borderColor: [
          'rgba(20, 184, 166, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(240, 253, 250, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const productData = {
    labels: ['Electronics', 'Clothing', 'Home', 'Sports', 'Books'],
    datasets: [
      {
        label: 'Products by Category',
        data: [110, 90, 60, 45, 30],
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 1
      }
    ]
  };

  const stats = [
    { title: "Total Revenue", value: "$124,500", change: "+12.5%", icon: <FiDollarSign size={24} />, color: "bg-emerald-100 text-emerald-600" },
    { title: "Total Users", value: "2,450", change: "+8.2%", icon: <FiUsers size={24} />, color: "bg-blue-100 text-blue-600" },
    { title: "Total Products", value: "345", change: "+4.1%", icon: <FiShoppingBag size={24} />, color: "bg-purple-100 text-purple-600" },
    { title: "Total Orders", value: "1,245", change: "+18.7%", icon: <FiTrendingUp size={24} />, color: "bg-amber-100 text-amber-600" }
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Analytics Dashboard</h1>
            <div className="flex items-center space-x-2">
              <FiPieChart className="text-emerald-500" />
              <FiBarChart2 className="text-teal-500" />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                    <p className="text-2xl font-semibold text-slate-800 mt-1">{stat.value}</p>
                    <p className="text-sm font-medium text-emerald-500 mt-1 flex items-center">
                      {stat.change} <FiTrendingUp className="ml-1" />
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Sales Overview</h2>
              <div className="h-80">
                <Line 
                  data={salesData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                    },
                  }}
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Customer Distribution</h2>
              <div className="h-80">
                <Pie 
                  data={customerData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'right',
                      },
                    },
                  }}
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Products by Category</h2>
              <div className="h-80">
                <Bar 
                  data={productData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Analytics;