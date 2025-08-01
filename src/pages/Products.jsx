import AdminLayout from "../components/Layout/AdminLayout";
import ProductTable from "../components/Table/ProductTable";

const Products = () => (
  <AdminLayout>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
        </div>
        <ProductTable />
      </div>
    </div>
  </AdminLayout>
);

export default Products;