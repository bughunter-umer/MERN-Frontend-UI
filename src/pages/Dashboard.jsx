import AdminLayout from "../components/Layout/AdminLayout";
import { 
  FiDollarSign, 
  FiUsers, 
  FiShoppingBag, 
  FiTrendingUp,
  FiActivity,
  FiCalendar
} from "react-icons/fi";

const Dashboard = () => {
  const stats = [
    { title: "Total Revenue", value: "$24,500", change: "+12.5%", icon: <FiDollarSign size={24} />, color: "bg-emerald-100 text-emerald-600" },
    { title: "Total Users", value: "1,450", change: "+8.2%", icon: <FiUsers size={24} />, color: "bg-blue-100 text-blue-600" },
    { title: "Total Products", value: "245", change: "+4.1%", icon: <FiShoppingBag size={24} />, color: "bg-purple-100 text-purple-600" },
    { title: "Total Orders", value: "845", change: "+18.7%", icon: <FiTrendingUp size={24} />, color: "bg-amber-100 text-amber-600" }
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Dashboard Overview</h1>
            <div className="flex items-center space-x-2 text-slate-500">
              <FiCalendar />
              <span>Aug 01, 2025</span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                    <p className="text-2xl font-semibold text-slate-800 mt-1">{stat.value}</p>
                    <p className="text-sm font-medium text-emerald-500 mt-1 flex items-center">
                      {stat.change} <FiTrendingUp className="ml-1" />
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              <FiActivity className="mr-2 text-emerald-500" />
              Recent Activity
            </h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-start pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600 mr-4">
                    <FiShoppingBag />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-800">New order received</p>
                    <p className="text-sm text-slate-500">Order #ORD-100{item} was placed</p>
                  </div>
                  <span className="text-sm text-slate-500">2{item} minutes ago</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;