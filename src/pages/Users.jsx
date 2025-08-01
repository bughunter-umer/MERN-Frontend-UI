import AdminLayout from "../components/Layout/AdminLayout";
import UserTable from "../components/Table/UserTable";

const Users = () => (
  <AdminLayout>
    <h1 className="text-2xl font-semibold mb-4">Users</h1>
    <UserTable />
  </AdminLayout>
);

export default Users;
