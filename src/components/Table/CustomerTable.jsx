import { FiEdit2, FiTrash2, FiUser, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const CustomerTable = () => {
  const customers = [
    { 
      id: 1, 
      name: "Alice Johnson", 
      email: "alice@example.com",
      phone: "+1 234 567 890",
      location: "New York, USA",
      orders: 12,
      status: "Active"
    },
    { 
      id: 2, 
      name: "Bob Smith", 
      email: "bob@example.com",
      phone: "+1 987 654 321",
      location: "Los Angeles, USA",
      orders: 5,
      status: "Active"
    },
    { 
      id: 3, 
      name: "Charlie Brown", 
      email: "charlie@example.com",
      phone: "+44 123 456 789",
      location: "London, UK",
      orders: 8,
      status: "Inactive"
    },
    { 
      id: 4, 
      name: "Diana Prince", 
      email: "diana@example.com",
      phone: "+61 987 654 321",
      location: "Sydney, Australia",
      orders: 15,
      status: "Active"
    },
  ];

  const statusStyles = {
    Active: "bg-emerald-100 text-emerald-800",
    Inactive: "bg-red-100 text-red-800",
    Pending: "bg-amber-100 text-amber-800"
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="flex justify-between items-center p-6 border-b border-slate-100">
        <h2 className="text-lg font-semibold text-slate-800">Customer List</h2>
        <button className="flex items-center px-4 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg hover:opacity-90 transition-all shadow-sm">
          <FiUser className="mr-2" />
          Add Customer
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Orders</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                      <FiUser />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-slate-900">{customer.name}</div>
                      <div className="text-sm text-slate-500">{customer.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-slate-900 flex items-center">
                    <FiPhone className="mr-2 text-slate-400" />
                    {customer.phone}
                  </div>
                  <div className="text-sm text-slate-500 flex items-center mt-1">
                    <FiMapPin className="mr-2 text-slate-400" />
                    {customer.location}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-slate-900">{customer.orders} orders</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[customer.status] || 'bg-slate-100 text-slate-800'}`}>
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-3">
                    <button className="text-emerald-600 hover:text-emerald-900 p-1.5 rounded-lg hover:bg-emerald-50 transition-colors">
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
      
      {/* Pagination would go here */}
      <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-t border-slate-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button className="relative inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50">
            Previous
          </button>
          <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50">
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of <span className="font-medium">4</span> customers
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                disabled
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50"
              >
                <span className="sr-only">Previous</span>
                &larr;
              </button>
              <button
                aria-current="page"
                className="z-10 bg-emerald-50 border-emerald-500 text-emerald-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                1
              </button>
              <button
                className="bg-white border-slate-300 text-slate-500 hover:bg-slate-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                2
              </button>
              <button
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50"
              >
                <span className="sr-only">Next</span>
                &rarr;
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;