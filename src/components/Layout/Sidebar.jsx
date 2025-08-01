import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow h-full">
      <div className="p-6 font-bold text-lg">Admin Panel</div>
      <ul>
        <li><Link to="/users" className="block p-4 hover:bg-gray-200">Users</Link></li>
        <li><Link to="/categories" className="block p-4 hover:bg-gray-200">Categories</Link></li>
        <li><Link to="/products" className="block p-4 hover:bg-gray-200">Products</Link></li>
        <li><Link to="/orders" className="block p-4 hover:bg-gray-200">Orders</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
