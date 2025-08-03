import { 
  FiEdit2, 
  FiTrash2, 
  FiUser, 
  FiMail, 
  FiShield, 
  FiPhone,
  FiCalendar,
  FiMoreVertical,
  FiSearch,
  FiFilter
} from "react-icons/fi";
import { useState } from "react";

const UserTable = () => {
  // Sample user data with more fields
  const [users, setUsers] = useState([
    { 
      id: 1, 
      name: "Umer Daud", 
      email: "iamumerdaud@gmail.com", 
      phone: "+92 300 1234567",
      role: "Admin", 
      status: "Active", 
      joinDate: "2023-01-15",
      lastActive: "2 mins ago",
      avatar: "/avatars/1.jpg"
    },
    { 
      id: 2, 
      name: "Umair Qureshi", 
      email: "Umairqureshi231@gmail.com", 
      phone: "+92 300 7654321",
      role: "User", 
      status: "Active", 
      joinDate: "2023-02-20",
      lastActive: "1 hour ago",
      avatar: "/avatars/1.jpg"
    },
    { 
      id: 3, 
      name: "Abdullah Khan", 
      email: "abdullah.khan@example.com", 
      phone: "+92 300 1122334",
      role: "Editor", 
      status: "Inactive", 
      joinDate: "2023-03-10",
      lastActive: "3 days ago",
      avatar: "/avatars/1.jpg"
    },
    { 
      id: 4, 
      name: "Aqib Chohan", 
      email: "aqib.chohan@example.com", 
      phone: "+92 300 4455667",
      role: "Editor", 
      status: "Active", 
      joinDate: "2023-04-05",
      lastActive: "30 mins ago",
      avatar: "/avatars/1.jpg"
    },
    { 
      id: 5, 
      name: "Raza Sherazi", 
      email: "raza.sherazi@example.com", 
      phone: "+92 300 7788990",
      role: "Editor", 
      status: "Inactive", 
      joinDate: "2023-05-12",
      lastActive: "1 week ago",
      avatar: "/avatars/1.jpg"
    },
    { 
      id: 6, 
      name: "Sarah Johnson", 
      email: "sarah.johnson@example.com", 
      phone: "+1 234 5678901",
      role: "User", 
      status: "Active", 
      joinDate: "2023-06-18",
      lastActive: "5 mins ago",
      avatar: "/avatars/1.jpg"
    },
    { 
      id: 7, 
      name: "Michael Chen", 
      email: "michael.chen@example.com", 
      phone: "+1 345 6789012",
      role: "User", 
      status: "Active", 
      joinDate: "2023-07-22",
      lastActive: "2 hours ago",
      avatar: "/avatars/1.jpg"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");

  // Filter users based on search and role
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "All" || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const roleColors = {
    Admin: "bg-purple-100 text-purple-800",
    User: "bg-blue-100 text-blue-800",
    Editor: "bg-green-100 text-green-800"
  };

  const statusColors = {
    Active: "bg-green-100 text-green-800",
    Inactive: "bg-red-100 text-red-800"
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      {/* Table Header with Search and Filters */}
      <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search users..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="flex items-center">
              <FiFilter className="text-gray-500 mr-2" />
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="All">All Roles</option>
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="User">User</option>
              </select>
            </div>
            
            <button className="flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all shadow-sm">
              <FiUser className="mr-2" />
              Add User
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-indigo-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                      ) : (
                        <FiUser className="text-indigo-600" />
                      )}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">ID: {user.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 flex items-center">
                    <FiMail className="mr-2 text-gray-400" />
                    {user.email}
                  </div>
                  <div className="text-sm text-gray-500 mt-1 flex items-center">
                    <FiPhone className="mr-2 text-gray-400" />
                    {user.phone}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${roleColors[user.role]}`}>
                    <FiShield className="mr-1" />
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <FiCalendar className="mr-2 text-gray-400" />
                    {user.joinDate}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[user.status]}`}>
                    {user.status}
                  </span>
                  <div className="text-xs text-gray-500 mt-1">{user.lastActive}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <button className="text-indigo-600 hover:text-indigo-900 p-2 rounded-lg hover:bg-indigo-50 transition-colors">
                      <FiEdit2 size={16} />
                    </button>
                    <button className="text-red-600 hover:text-red-900 p-2 rounded-lg hover:bg-red-50 transition-colors">
                      <FiTrash2 size={16} />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <FiMoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination and Summary */}
      <div className="bg-gray-50 px-4 py-3 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200">
        <div className="mb-2 sm:mb-0">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredUsers.length}</span> of{' '}
            <span className="font-medium">{users.length}</span> users
          </p>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 border border-indigo-500 bg-indigo-50 text-indigo-600 rounded-md text-sm font-medium">
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;