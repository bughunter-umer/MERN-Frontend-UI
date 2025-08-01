import AdminLayout from "../components/Layout/AdminLayout";
import CategoryTable from "../components/Table/CategoryTable";

const Categories = () => (
  <AdminLayout>
    <h1 className="text-2xl font-semibold mb-4">Categories</h1>
    <CategoryTable />
  </AdminLayout>
);

export default Categories;
