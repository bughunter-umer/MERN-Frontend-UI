import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  FiMenu, 
  FiX,
  FiUsers,
  FiUser,
  FiGrid,
  FiShoppingBag,
  FiShoppingCart,
  FiHome,
  FiSettings,
  FiPieChart,
  FiBarChart2,
  FiBell,
  FiLogOut,
  FiDollarSign,
  FiTrendingUp
} from "react-icons/fi";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { path: "/", icon: <FiHome />, label: "Dashboard" },
    { path: "/customers", icon: <FiUser />, label: "Customers" },
    { path: "/users", icon: <FiUsers />, label: "Users" },
    { path: "/products", icon: <FiShoppingBag />, label: "Products" },
    { path: "/orders", icon: <FiShoppingCart />, label: "Orders" },
    { path: "/categories", icon: <FiGrid />, label: "Categories" },
    { path: "/analytics", icon: <FiPieChart />, label: "Analytics" },
    { path: "/reports", icon: <FiBarChart2 />, label: "Reports" },
    { path: "/notifications", icon: <FiBell />, label: "Notifications" }
  ];

  return (
    <>
      {isMobile && (
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed top-4 left-4 z-50 p-3 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg shadow-teal-500/30 md:hidden transition-all duration-300 hover:scale-105"
        >
          {sidebarOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      )}

      <div 
        className={`fixed md:relative w-72 h-full z-40 bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl transition-all duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Header */}
          <div className="p-6 border-b border-slate-700 flex items-center">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-teal-600 to-emerald-600 flex items-center justify-center mr-3 transition-all duration-300 hover:rotate-12">
              <FiTrendingUp size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-emerald-300 bg-clip-text text-transparent">
              AdminPro
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 px-2">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className={`flex items-center px-4 py-3 rounded-lg mx-2 transition-all duration-300 ${
                      location.pathname === item.path
                        ? "bg-gradient-to-r from-teal-600/30 to-emerald-600/30 text-white border-l-4 border-emerald-400"
                        : "text-slate-300 hover:bg-slate-700/50 hover:text-white hover:translate-x-1"
                    }`}
                  >
                    <span className={`mr-3 transition-colors duration-300 ${
                      location.pathname === item.path ? "text-emerald-300" : "text-slate-400"
                    }`}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                    {location.pathname === item.path && (
                      <span className="ml-auto w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer/Settings */}
          <div className="p-4 border-t border-slate-700">
            <Link 
              to="/settings"
              className={`flex items-center px-4 py-3 rounded-lg mx-2 transition-all duration-300 ${
                location.pathname === "/settings"
                  ? "bg-gradient-to-r from-teal-600/30 to-emerald-600/30 text-white"
                  : "text-slate-300 hover:bg-slate-700/50 hover:text-white hover:translate-x-1"
              }`}
            >
              <span className={`mr-3 ${
                location.pathname === "/settings" ? "text-emerald-300" : "text-slate-400"
              }`}>
                <FiSettings />
              </span>
              <span className="font-medium">Settings</span>
            </Link>
            
          <Link 
  to="/logout" 
  className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
>
  <FiLogOut className="mr-2" />
  Log Out
</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;