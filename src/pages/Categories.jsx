import AdminLayout from "../components/Layout/AdminLayout";
import CategoryTable from "../components/Table/CategoryTable";

const Categories = () => (
  <AdminLayout>
    <div className="max-w-7xl mx-auto px-4 mt-14 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
        </div>
        <CategoryTable />
      </div>
    </div>
  </AdminLayout>
);

export default Categories;