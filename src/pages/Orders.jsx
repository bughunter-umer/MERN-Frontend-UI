import AdminLayout from "../components/Layout/AdminLayout";
import OrderTable from "../components/Table/OrderTable";

const Orders = () => (
  <AdminLayout>
    <h1 className="text-2xl font-semibold mb-4">Orders</h1>
    <OrderTable />
  </AdminLayout>
);

export default Orders;
