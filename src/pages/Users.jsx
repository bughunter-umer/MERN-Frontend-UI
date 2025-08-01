import AdminLayout from "../components/Layout/AdminLayout";
import UserTable from "../components/Table/UserTable";

const Users = () => (
  <AdminLayout>
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Users</h1>
      <UserTable />
    </div>
  </AdminLayout>
);

export default Users;