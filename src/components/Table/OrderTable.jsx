import { useEffect, useState } from "react";
import {
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiEye,
  FiTruck,
  FiClock,
  FiCheckCircle,
  FiCheck
} from "react-icons/fi";
import axios from "axios";

const ORDER_URL = "http://localhost:3000/api/orders";

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

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Modal & form state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    customer: "",
    date: "",
    items: 0,
    total: 0,
    status: "Pending"
  });
  const [orderToEdit, setOrderToEdit] = useState(null);

  // Fetch orders from API
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await axios.get(ORDER_URL);
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Filtered orders based on filterStatus
  const filteredOrders = filterStatus
    ? orders.filter(order => order.status === filterStatus)
    : orders;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const openAddModal = () => {
    setFormData({
      customer: "",
      date: "",
      items: 0,
      total: 0,
      status: "Pending"
    });
    setIsAddModalOpen(true);
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(ORDER_URL, {
        ...formData,
        items: Number(formData.items),
        total: Number(formData.total)
      });
      setIsAddModalOpen(false);
      fetchOrders();
    } catch (err) {
      console.error("Error adding order:", err);
    }
  };

  const openUpdateModal = (order) => {
    setOrderToEdit(order);
    setFormData({
      customer: order.customer,
      date: order.date,
      items: order.items,
      total: order.total,
      status: order.status
    });
    setIsUpdateModalOpen(true);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${ORDER_URL}/${orderToEdit.id}`, {
        ...formData,
        items: Number(formData.items),
        total: Number(formData.total)
      });
      setIsUpdateModalOpen(false);
      setOrderToEdit(null);
      fetchOrders();
    } catch (err) {
      console.error("Error updating order:", err);
    }
  };

  const deleteOrder = async (id) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;
    try {
      await axios.delete(`${ORDER_URL}/${id}`);
      fetchOrders();
    } catch (err) {
      console.error("Error deleting order:", err);
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Table Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b border-gray-100">
          <div className="flex items-center mb-4 sm:mb-0">
            <FiTruck className="text-indigo-600 mr-3 text-xl" />
            <h2 className="text-lg font-semibold text-gray-800">Order Management</h2>
          </div>
          <div className="flex space-x-3">
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">Filter by Status</option>
              {Object.keys(statusStyles).map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <button
              onClick={openAddModal}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all shadow-sm"
            >
              <FiPlus className="mr-2" />
              New Order
            </button>
          </div>
        </div>

        {/* Table Content */}
        {loading ? (
          <p className="p-4 text-gray-500">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map(order => (
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
                        <span
                          className={`px-2.5 py-0.5 flex gap-1 items-center rounded-full text-xs font-medium ${
                            statusStyles[order.status] || "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {statusIcons[order.status]}
                          {order.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-3">
                        <button
                          className="text-indigo-600 hover:text-indigo-900 p-1.5 rounded-lg hover:bg-indigo-50 transition-colors"
                          title="View"
                        >
                          <FiEye size={16} />
                        </button>
                        <button
                          onClick={() => openUpdateModal(order)}
                          className="text-yellow-600 hover:text-yellow-900 p-1.5 rounded-lg hover:bg-yellow-50 transition-colors"
                          title="Edit"
                        >
                          <FiEdit2 size={16} />
                        </button>
                        <button
                          onClick={() => deleteOrder(order.id)}
                          className="text-red-600 hover:text-red-900 p-1.5 rounded-lg hover:bg-red-50 transition-colors"
                          title="Delete"
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredOrders.length}</span> of <span className="font-medium">{orders.length}</span> orders
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                {/* Pagination buttons can go here */}
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" disabled>
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  1
                </button>
                <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" disabled>
                  2
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" disabled>
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Add Order Modal */}
      {isAddModalOpen && (
        <OrderModal
          title="Add New Order"
          formData={formData}
          onChange={handleInputChange}
          onClose={() => setIsAddModalOpen(false)}
          onSubmit={handleAddSubmit}
        />
      )}

      {/* Update Order Modal */}
      {isUpdateModalOpen && (
        <OrderModal
          title="Update Order"
          formData={formData}
          onChange={handleInputChange}
          onClose={() => setIsUpdateModalOpen(false)}
          onSubmit={handleUpdateSubmit}
        />
      )}
    </>
  );
};

const OrderModal = ({ title, formData, onChange, onClose, onSubmit }) => (
  <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          name="customer"
          placeholder="Customer Name"
          className="w-full border rounded px-3 py-2"
          value={formData.customer}
          onChange={onChange}
          required
          autoFocus
        />
        <input
          type="date"
          name="date"
          className="w-full border rounded px-3 py-2"
          value={formData.date}
          onChange={onChange}
          required
        />
        <input
          type="number"
          name="items"
          placeholder="Number of Items"
          className="w-full border rounded px-3 py-2"
          value={formData.items}
          onChange={onChange}
          required
          min="1"
        />
        <input
          type="number"
          name="total"
          placeholder="Total Amount"
          className="w-full border rounded px-3 py-2"
          value={formData.total}
          onChange={onChange}
          required
          min="0"
          step="0.01"
        />
        <select
          name="status"
          className="w-full border rounded px-3 py-2"
          value={formData.status}
          onChange={onChange}
          required
        >
          {Object.keys(statusStyles).map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default OrderTable;
