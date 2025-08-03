import AdminLayout from "../components/Layout/AdminLayout";
import {
  FiUsers,
  FiActivity,
  FiBell,
  FiMail,
  FiShoppingCart,
  FiStar,
  FiClock,
  FiFilter,
  FiDownload
} from "react-icons/fi";
import { Bar, Pie, Line } from 'react-chartjs-2';
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

const Customers = () => {
  // Customer growth data
  const growthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'New Customers',
        data: [45, 60, 50, 75, 90, 110, 95],
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 2,
        tension: 0.4
      }
    ]
  };

  // Customer demographics
  const demographicsData = {
    labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
    datasets: [
      {
        data: [15, 35, 25, 15, 10],
        backgroundColor: [
          'rgba(99, 102, 241, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(245, 158, 11, 0.7)',
          'rgba(239, 68, 68, 0.7)',
          'rgba(139, 92, 246, 0.7)'
        ],
        borderColor: [
          'rgba(99, 102, 241, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(139, 92, 246, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  // Customer value
  const valueData = {
    labels: ['Top 20%', 'Middle 60%', 'Bottom 20%'],
    datasets: [
      {
        label: 'Revenue Contribution',
        data: [65, 30, 5],
        backgroundColor: 'rgba(139, 92, 246, 0.5)',
        borderColor: 'rgba(139, 92, 246, 1)',
        borderWidth: 2
      }
    ]
  };

  // Customer notifications
  const notifications = [
    {
      id: 1,
      type: 'purchase',
      message: 'New order from Sarah Johnson',
      time: '2 mins ago',
      read: false
    },
    {
      id: 2,
      type: 'review',
      message: 'New 5-star review from Michael Chen',
      time: '1 hour ago',
      read: false
    },
    {
      id: 3,
      type: 'abandoned',
      message: 'Cart abandoned by David Wilson',
      time: '3 hours ago',
      read: true
    },
    {
      id: 4,
      type: 'signup',
      message: 'New customer registered: Emily Davis',
      time: '5 hours ago',
      read: true
    },
    {
      id: 5,
      type: 'feedback',
      message: 'Customer feedback received from Robert Brown',
      time: '1 day ago',
      read: true
    }
  ];

  // Customer stats
  const stats = [
    { title: "Total Customers", value: "2,450", change: "+12.5%", icon: <FiUsers className="text-indigo-500" />, color: "bg-indigo-100" },
    { title: "New This Month", value: "345", change: "+8.2%", icon: <FiActivity className="text-emerald-500" />, color: "bg-emerald-100" },
    { title: "Repeat Customers", value: "1,245", change: "+4.1%", icon: <FiShoppingCart className="text-purple-500" />, color: "bg-purple-100" },
    { title: "Avg. Satisfaction", value: "4.7", change: "+0.2", icon: <FiStar className="text-amber-500" />, color: "bg-amber-100" }
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Customer Analytics</h1>
              <p className="text-slate-600">Understand and engage with your customers</p>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <button className="flex items-center px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors">
                <FiFilter className="mr-2" />
                Filters
              </button>
              <button className="flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all shadow-sm">
                <FiDownload className="mr-2" />
                Export
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                    <p className="text-2xl font-semibold text-slate-800 mt-1">{stat.value}</p>
                    <p className={`text-sm font-medium mt-1 ${stat.change.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Customer Growth Chart */}
            <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Customer Growth</h2>
              <div className="h-80">
                <Line 
                  data={growthData}
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

            {/* Customer Demographics */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Customer Demographics</h2>
              <div className="h-80">
                <Pie 
                  data={demographicsData}
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

            {/* Customer Value */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Customer Value Segments</h2>
              <div className="h-80">
                <Bar 
                  data={valueData}
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

            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-slate-800">Recent Customer Activity</h2>
                <button className="text-sm text-indigo-600 hover:text-indigo-800">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`flex items-start p-4 rounded-lg ${!notification.read ? 'bg-indigo-50' : 'bg-white'} border border-slate-100`}
                  >
                    <div className={`p-2 rounded-lg mr-4 ${
                      notification.type === 'purchase' ? 'bg-emerald-100 text-emerald-600' :
                      notification.type === 'review' ? 'bg-amber-100 text-amber-600' :
                      notification.type === 'signup' ? 'bg-blue-100 text-blue-600' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {notification.type === 'purchase' && <FiShoppingCart />}
                      {notification.type === 'review' && <FiStar />}
                      {notification.type === 'signup' && <FiUsers />}
                      {notification.type === 'abandoned' && <FiClock />}
                      {notification.type === 'feedback' && <FiMail />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-800">{notification.message}</p>
                      <p className="text-sm text-slate-500 mt-1">{notification.time}</p>
                    </div>
                    {!notification.read && (
                      <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Customer Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Customer Engagement Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <FiMail className="text-blue-500" />, label: "Email Campaign" },
                { icon: <FiBell className="text-purple-500" />, label: "Push Notification" },
                { icon: <FiUsers className="text-emerald-500" />, label: "Customer Survey" },
                { icon: <FiStar className="text-amber-500" />, label: "Loyalty Program" }
              ].map((action, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center justify-center p-6 border border-slate-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
                >
                  <div className="p-3 rounded-full bg-indigo-100 text-indigo-600 mb-3">
                    {action.icon}
                  </div>
                  <span className="font-medium text-slate-800">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Customers;