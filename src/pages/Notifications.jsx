import AdminLayout from "../components/Layout/AdminLayout";
import {
  FiBell,
  FiCheckCircle,
  FiAlertCircle,
  FiShoppingCart,
  FiMail,
  FiStar,
  FiClock,
  FiFilter,
  FiTrash2,
  FiArchive,
  FiSettings
} from "react-icons/fi";

const Notifications = () => {
  // Notification data
  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Order Shipped",
      message: "Your order #12345 has been shipped and will arrive in 2-3 days.",
      time: "5 mins ago",
      read: false,
      icon: <FiShoppingCart className="text-green-500" />
    },
    {
      id: 2,
      type: "warning",
      title: "Low Stock Alert",
      message: "Product 'Wireless Earbuds' is running low on stock (only 5 left).",
      time: "1 hour ago",
      read: false,
      icon: <FiAlertCircle className="text-yellow-500" />
    },
    {
      id: 3,
      type: "info",
      title: "New Message",
      message: "You have a new message from customer Sarah Johnson.",
      time: "3 hours ago",
      read: true,
      icon: <FiMail className="text-blue-500" />
    },
    {
      id: 4,
      type: "success",
      title: "Payment Received",
      message: "Payment of $129.99 for order #12346 has been processed.",
      time: "5 hours ago",
      read: true,
      icon: <FiCheckCircle className="text-green-500" />
    },
    {
      id: 5,
      type: "review",
      title: "New 5-Star Review",
      message: "Customer Michael Chen left a 5-star review for 'Smartphone X Pro'.",
      time: "1 day ago",
      read: true,
      icon: <FiStar className="text-purple-500" />
    }
  ];

  // Notification stats
  const stats = [
    { label: "Unread", value: "2", color: "bg-blue-100 text-blue-600" },
    { label: "Today", value: "3", color: "bg-green-100 text-green-600" },
    { label: "This Week", value: "12", color: "bg-purple-100 text-purple-600" },
    { label: "Total", value: "45", color: "bg-gray-100 text-gray-600" }
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
              <p className="text-gray-600">Manage your alerts and messages</p>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                <FiFilter className="mr-2" />
                Filter
              </button>
              <button className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-all shadow-sm">
                <FiSettings className="mr-2" />
                Settings
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-4 text-center">
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className={`text-2xl font-semibold mt-1 ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Notification List */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Notification Actions */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <h2 className="font-medium text-gray-700">Recent Notifications</h2>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  <FiTrash2 />
                </button>
                <button className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                  <FiArchive />
                </button>
              </div>
            </div>

            {/* Notifications */}
            <div className="divide-y divide-gray-100">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-start p-4 hover:bg-gray-50 transition-colors ${!notification.read ? "bg-blue-50" : ""}`}
                >
                  <div className="p-2 rounded-full bg-white shadow-sm mr-4">
                    {notification.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-800">{notification.title}</h3>
                      <span className="text-xs text-gray-500 flex items-center">
                        <FiClock className="mr-1" />
                        {notification.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 rounded-full bg-blue-500 ml-4"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="bg-gray-50 px-4 py-3 flex justify-between items-center border-t border-gray-100">
              <button className="px-3 py-1 text-sm text-gray-600 hover:text-blue-600">
                Previous
              </button>
              <div className="flex space-x-1">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className={`w-8 h-8 rounded-full text-sm ${page === 1 ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button className="px-3 py-1 text-sm text-gray-600 hover:text-blue-600">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Notifications;