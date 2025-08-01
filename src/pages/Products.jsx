import AdminLayout from "../components/Layout/AdminLayout";
import ProductTable from "../components/Table/ProductTable";

const Products = () => (
  <AdminLayout>
    <h1 className="text-2xl font-semibold mb-4">Products</h1>
    <ProductTable />
  </AdminLayout>
);

export default Products;
