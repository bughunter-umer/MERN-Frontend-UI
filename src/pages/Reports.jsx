import AdminLayout from "../components/Layout/AdminLayout";
import { 
  FiBarChart2, 
  FiPieChart, 
  FiDownload, 
  FiFilter,
  FiCalendar,
  FiDollarSign,
  FiShoppingCart,
  FiUsers,
  FiTrendingUp,
  FiTrendingDown,
  FiLoader
} from "react-icons/fi";
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
} from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

// Mock data generator functions
const generateSalesData = (range) => {
  const ranges = {
    '7d': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    '30d': Array.from({length: 30}, (_, i) => `Day ${i+1}`),
    '3m': ['Jan', 'Feb', 'Mar'],
    '6m': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    '1y': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'custom': ['Custom Start', '...', 'Custom End']
  };

  const currentYear = new Date().getFullYear();
  const prevYear = currentYear - 1;

  return {
    labels: ranges[range] || ranges['7d'],
    datasets: [
      {
        label: `${prevYear} Sales`,
        data: (ranges[range] || ranges['7d']).map(() => Math.floor(Math.random() * 30000) + 5000),
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 2,
        tension: 0.4
      },
      {
        label: `${currentYear} Sales`,
        data: (ranges[range] || ranges['7d']).map(() => Math.floor(Math.random() * 35000) + 8000),
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 2,
        tension: 0.4
      }
    ]
  };
};

const generateRevenueData = (range) => {
  const ranges = {
    '7d': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    '30d': Array.from({length: 30}, (_, i) => `Day ${i+1}`),
    '3m': ['Jan', 'Feb', 'Mar'],
    '6m': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    '1y': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'custom': ['Custom Start', '...', 'Custom End']
  };

  return {
    labels: ranges[range] || ranges['7d'],
    datasets: [
      {
        label: 'Revenue',
        data: (ranges[range] || ranges['7d']).map(() => Math.floor(Math.random() * 25000) + 5000),
        borderColor: 'rgba(139, 92, 246, 1)',
        backgroundColor: 'rgba(139, 92, 246, 0.2)',
        borderWidth: 1,
        fill: true
      }
    ]
  };
};

const generateCustomerData = (range) => {
  const channels = ['Direct', 'Social', 'Email', 'Referral', 'Organic'];
  
  // Adjust weights based on time range
  const weights = {
    '7d': [15, 30, 25, 20, 10],
    '30d': [20, 25, 25, 20, 10],
    '3m': [25, 25, 20, 20, 10],
    '6m': [30, 20, 20, 20, 10],
    '1y': [35, 20, 15, 20, 10],
    'custom': [25, 25, 25, 15, 10]
  };
  
  const currentWeights = weights[range] || weights['7d'];
  
  return {
    labels: channels,
    datasets: [
      {
        data: currentWeights,
        backgroundColor: [
          'rgba(16, 185, 129, 0.7)',
          'rgba(59, 130, 246, 0.7)',
          'rgba(245, 158, 11, 0.7)',
          'rgba(139, 92, 246, 0.7)',
          'rgba(239, 68, 68, 0.7)'
        ],
        borderColor: [
          'rgba(16, 185, 129, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(239, 68, 68, 1)'
        ],
        borderWidth: 1
      }
    ]
  };
};

const generateReportCards = (range) => {
  const ranges = {
    '7d': { min: 1000, max: 5000 },
    '30d': { min: 5000, max: 15000 },
    '3m': { min: 15000, max: 30000 },
    '6m': { min: 30000, max: 60000 },
    '1y': { min: 60000, max: 120000 },
    'custom': { min: 1000, max: 50000 }
  };
  
  const currentRange = ranges[range] || ranges['7d'];
  
  return [
    {
      title: "Total Revenue",
      value: `$${Math.floor(Math.random() * (currentRange.max - currentRange.min) + currentRange.min).toLocaleString()}`,
      change: `${(Math.random() * 15).toFixed(1)}%`,
      isPositive: Math.random() > 0.3,
      icon: <FiDollarSign className="text-emerald-500" />
    },
    {
      title: "Total Orders",
      value: Math.floor(Math.random() * 2000 + 500).toLocaleString(),
      change: `${(Math.random() * 10).toFixed(1)}%`,
      isPositive: Math.random() > 0.3,
      icon: <FiShoppingCart className="text-blue-500" />
    },
    {
      title: "New Customers",
      value: Math.floor(Math.random() * 500 + 100).toLocaleString(),
      change: `${(Math.random() * 8).toFixed(1)}%`,
      isPositive: Math.random() > 0.5,
      icon: <FiUsers className="text-purple-500" />
    },
    {
      title: "Conversion Rate",
      value: `${(Math.random() * 5 + 1).toFixed(1)}%`,
      change: `${(Math.random() * 2).toFixed(1)}%`,
      isPositive: Math.random() > 0.4,
      icon: <FiTrendingUp className="text-amber-500" />
    }
  ];
};

const Reports = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [isLoading, setIsLoading] = useState(false);
  const [salesData, setSalesData] = useState(generateSalesData('7d'));
  const [revenueData, setRevenueData] = useState(generateRevenueData('7d'));
  const [customerData, setCustomerData] = useState(generateCustomerData('7d'));
  const [reportCards, setReportCards] = useState(generateReportCards('7d'));

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setSalesData(generateSalesData(timeRange));
      setRevenueData(generateRevenueData(timeRange));
      setCustomerData(generateCustomerData(timeRange));
      setReportCards(generateReportCards(timeRange));
      
      setIsLoading(false);
    };
    
    loadData();
  }, [timeRange]);

  const handleTimeRangeChange = (e) => {
    setTimeRange(e.target.value);
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Reports Dashboard</h1>
              <p className="text-slate-600">Analyze your business performance</p>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <button className="flex items-center px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors">
                <FiFilter className="mr-2" />
                Filters
              </button>
              <button className="flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:opacity-90 transition-all shadow-sm">
                <FiDownload className="mr-2" />
                Export
              </button>
            </div>
          </div>

          {/* Date Range Selector */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center">
                <FiCalendar className="text-slate-400 mr-2" />
                <span className="text-sm font-medium text-slate-700">Date Range:</span>
              </div>
              <select 
                value={timeRange}
                onChange={handleTimeRangeChange}
                className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-emerald-500 focus:border-emerald-500 w-full sm:w-auto"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="3m">Last 3 months</option>
                <option value="6m">Last 6 months</option>
                <option value="1y">Last year</option>
                <option value="custom">Custom range</option>
              </select>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
                <FiLoader className="animate-spin text-emerald-500 text-3xl mb-3" />
                <p className="text-slate-700">Loading report data...</p>
              </div>
            </div>
          )}

          {/* Report Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reportCards.map((card, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md"
              >
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">{card.title}</p>
                    <p className="text-2xl font-semibold text-slate-800 mt-1">{card.value}</p>
                    <p className={`text-sm font-medium mt-1 flex items-center ${
                      card.isPositive ? 'text-emerald-500' : 'text-red-500'
                    }`}>
                      {card.change}
                      {card.isPositive ? (
                        <FiTrendingUp className="ml-1" />
                      ) : (
                        <FiTrendingDown className="ml-1" />
                      )}
                    </p>
                  </div>
                  <div className="h-11 mt-5 p-3 rounded-lg bg-slate-100 text-slate-600">
                    {card.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sales Comparison Chart */}
            <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-slate-800">Sales Comparison</h2>
                <div className="flex space-x-2">
                  <span className="flex items-center text-sm">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 mr-1"></span>
                    {new Date().getFullYear() - 1}
                  </span>
                  <span className="flex items-center text-sm">
                    <span className="w-3 h-3 rounded-full bg-indigo-500 mr-1"></span>
                    {new Date().getFullYear()}
                  </span>
                </div>
              </div>
              <div className="h-80">
                {isLoading ? (
                  <div className="h-full flex items-center justify-center">
                    <FiLoader className="animate-spin text-emerald-500 text-2xl" />
                  </div>
                ) : (
                  <Bar
                    data={salesData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'top',
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          grid: {
                            drawBorder: false,
                          }
                        },
                        x: {
                          grid: {
                            display: false
                          }
                        }
                      }
                    }}
                  />
                )}
              </div>
            </div>

            {/* Revenue Trend Chart */}
            <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Revenue Trend</h2>
              <div className="h-80">
                {isLoading ? (
                  <div className="h-full flex items-center justify-center">
                    <FiLoader className="animate-spin text-emerald-500 text-2xl" />
                  </div>
                ) : (
                  <Line
                    data={revenueData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          grid: {
                            drawBorder: false,
                          }
                        },
                        x: {
                          grid: {
                            display: false
                          }
                        }
                      }
                    }}
                  />
                )}
              </div>
            </div>

            {/* Customer Acquisition Chart */}
            <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2 transition-all hover:shadow-md">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Customer Acquisition Channels</h2>
              <div className="h-80">
                {isLoading ? (
                  <div className="h-full flex items-center justify-center">
                    <FiLoader className="animate-spin text-emerald-500 text-2xl" />
                  </div>
                ) : (
                  <Pie
                    data={customerData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'right',
                        },
                      }
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Report Types */}
          <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Quick Reports</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Sales by Product',
                'Customer Demographics',
                'Inventory Levels',
                'Marketing ROI',
                'Order Fulfillment',
                'Customer Retention',
                'Product Returns',
                'Shipping Costs'
              ].map((report, index) => (
                <button
                  key={index}
                  className="p-4 border border-slate-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-colors text-left"
                >
                  <div className="flex items-center">
                    <FiBarChart2 className="text-emerald-500 mr-3" />
                    <span className="font-medium text-slate-800">{report}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Reports;