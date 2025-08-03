import { FiEdit2, FiTrash2, FiPlus, FiEye, FiTruck, FiClock, FiCheckCircle, FiCheck } from "react-icons/fi";

const OrderTable = () => {
  const orders = [
    { 
      id: 101, 
      customer: "Umer Daud", 
      total: 250.0, 
      status: "Completed",
      date: "2025-08-01",
      items: 3
    },
    { 
      id: 102, 
      customer: "Umair Ejaz", 
      total: 120.5, 
      status: "Delivered",
      date: "2025-07-31",
      items: 2
    },
    { 
      id: 103, 
      customer: "Raza Sherazi", 
      total: 89.99, 
      status: "Shipped",
      date: "2025-07-16",
      items: 1
    },
    { 
      id: 104, 
      customer: "Aqib Chohan", 
      total: 320.75, 
      status: "Processing",
      date: "2025-07-17",
      items: 5
    },
  ];

  const statusStyles = {
    Pending: "bg-yellow-100 text-yellow-800",
    Delivered: "bg-green-100 text-green-800",
    Shipped: "bg-blue-100 text-blue-800",
    Processing: "bg-purple-100 text-purple-800",
    Cancelled: "bg-red-100 text-red-800"
  };

  const statusIcons = {
    Pending: <FiClock className="mr-1" />,
    Delivered: <FiCheckCircle className="mr-1" />,
    Shipped: <FiTruck className="mr-1" />,
    Processing: <FiClock className="mr-1" />,
    Cancelled: <FiCheck className="mr-1" />
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Table Header with Filter and Add Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b border-gray-100">
        <div className="flex items-center mb-4 sm:mb-0">
          <FiTruck className="text-indigo-600 mr-3 text-xl" />
          <h2 className="text-lg font-semibold text-gray-800">Order Management</h2>
        </div>
        <div className="flex space-x-3">
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Filter by Status</option>
            <option>Pending</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all shadow-sm">
            <FiPlus className="mr-2" />
            New Order
          </button>
        </div>
      </div>
      
      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{order.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{order.items} items</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  ${order.total.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[order.status] || 'bg-gray-100 text-gray-800'}`}>
                      {statusIcons[order.status]}
                      {order.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-3">
                    <button className="text-indigo-600 hover:text-indigo-900 p-1.5 rounded-lg hover:bg-indigo-50 transition-colors">
                      <FiEye size={16} />
                    </button>
                    <button className="text-yellow-600 hover:text-yellow-900 p-1.5 rounded-lg hover:bg-yellow-50 transition-colors">
                      <FiEdit2 size={16} />
                    </button>
                    <button className="text-red-600 hover:text-red-900 p-1.5 rounded-lg hover:bg-red-50 transition-colors">
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of <span className="font-medium">4</span> orders
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                1
              </button>
              <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                2
              </button>
              <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;