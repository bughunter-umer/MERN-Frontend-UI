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
  FiFilter,
  FiPlus
} from "react-icons/fi";
import { useState, useEffect } from "react";
import { getAllUsers, createUser, deleteUser, updateUser } from "../../service/userAPI";

const UserTable = () => {
  const today = new Date().toISOString().split("T")[0]; 

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Update modal state
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
    role: "User",
    password: "",
    joinDate: today,
    status: "Active"
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getAllUsers();
      const mappedUsers = data.map((u, index) => ({
        id: u.id || index + 1,
        name: u.name || "N/A",
        email: u.email || "N/A",
        phone: u.phone || "Not Provided",
        role: u.role || "User",
        status: u.Status || "Active",
        joinDate: u.JoinDate || "N/A",
        lastActive: u.lastActive || "Recently",
        avatar: u.avatar || null
      }));
      setUsers(mappedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      await createUser({
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
        password: newUser.password,
        JoinDate: newUser.joinDate,
        Status: newUser.status
      });
      setIsModalOpen(false);
      resetNewUserForm();
      fetchUsers();
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id);
        fetchUsers();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  const handleEditClick = (user) => {
    setEditUser(user);
    setIsUpdateModalOpen(true);
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      await updateUser(editUser.id, {
        name: editUser.name,
        email: editUser.email,
        phone: editUser.phone,
        role: editUser.role,
        JoinDate: editUser.joinDate,
        Status: editUser.status
      });
      setIsUpdateModalOpen(false);
      setEditUser(null);
      fetchUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const resetNewUserForm = () => {
    setNewUser({
      name: "",
      email: "",
      phone: "",
      role: "User",
      password: "",
      joinDate: today,
      status: "Active"
    });
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
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

  if (loading) {
    return (
      <div className="p-6 text-center">
        <p>Loading users...</p>
      </div>
    );
  }

  return (
    <>
      {/* Table UI */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        {/* Header */}
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

              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all shadow-sm"
              >
                <FiPlus className="mr-2" />
                Add User
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
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
                    <span className={`px-3 py-2 flex items-center text-xs font-semibold rounded-full ${roleColors[user.role]}`}>
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
                      <button
                        onClick={() => handleEditClick(user)}
                        className="text-indigo-600 hover:text-indigo-900 p-2 rounded-lg hover:bg-indigo-50 transition-colors"
                      >
                        <FiEdit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-red-600 hover:text-red-900 p-2 rounded-lg hover:bg-red-50 transition-colors"
                      >
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
      </div>

      {/* Add User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Add New User</h2>
            <form onSubmit={handleAddUser} className="space-y-4">
              <input type="text" placeholder="Name" className="w-full border rounded px-3 py-2" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} required />
              <input type="email" placeholder="Email" className="w-full border rounded px-3 py-2" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} required />
              <input type="text" placeholder="Phone" className="w-full border rounded px-3 py-2" value={newUser.phone} onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })} />
              <select className="w-full border rounded px-3 py-2" value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
              </select>
              <input type="date" className="w-full border rounded px-3 py-2" value={newUser.joinDate} onChange={(e) => setNewUser({ ...newUser, joinDate: e.target.value })} required />
              <select className="w-full border rounded px-3 py-2" value={newUser.status} onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <input type="password" placeholder="Password" className="w-full border rounded px-3 py-2" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} required />
              <div className="flex justify-end space-x-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 border rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Add User</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Update User Modal */}
      {isUpdateModalOpen && editUser && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Update User</h2>
            <form onSubmit={handleUpdateUser} className="space-y-4">
              <input type="text" className="w-full border rounded px-3 py-2" value={editUser.name} onChange={(e) => setEditUser({ ...editUser, name: e.target.value })} required />
              <input type="email" className="w-full border rounded px-3 py-2" value={editUser.email} onChange={(e) => setEditUser({ ...editUser, email: e.target.value })} required />
              <input type="text" className="w-full border rounded px-3 py-2" value={editUser.phone} onChange={(e) => setEditUser({ ...editUser, phone: e.target.value })} />
              <select className="w-full border rounded px-3 py-2" value={editUser.role} onChange={(e) => setEditUser({ ...editUser, role: e.target.value })}>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
              </select>
              <input type="date" className="w-full border rounded px-3 py-2" value={editUser.joinDate} onChange={(e) => setEditUser({ ...editUser, joinDate: e.target.value })} required />
              <select className="w-full border rounded px-3 py-2" value={editUser.status} onChange={(e) => setEditUser({ ...editUser, status: e.target.value })}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <div className="flex justify-end space-x-3">
                <button type="button" onClick={() => setIsUpdateModalOpen(false)} className="px-4 py-2 border rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Update User</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UserTable;
