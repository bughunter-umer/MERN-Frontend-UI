import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  FiMenu, 
  FiX,
  FiUsers,
  FiGrid,
  FiShoppingBag,
  FiShoppingCart,
  FiHome,
  FiSettings,
  FiPieChart,
  FiBell,
  FiLogOut
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
    { path: "/users", icon: <FiUsers />, label: "Users" },
    { path: "/categories", icon: <FiGrid />, label: "Categories" },
    { path: "/products", icon: <FiShoppingBag />, label: "Products" },
    { path: "/orders", icon: <FiShoppingCart />, label: "Orders" },
    { path: "/analytics", icon: <FiPieChart />, label: "Analytics" },
    { path: "/notifications", icon: <FiBell />, label: "Notifications" }
  ];

  return (
    <>
      {isMobile && (
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed top-4 left-4 z-50 p-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30 md:hidden transition-all duration-300 hover:scale-105"
        >
          {sidebarOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      )}

      <div 
        className={`fixed md:relative w-72 h-full z-40 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl transition-all duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Header */}
          <div className="p-6 border-b border-gray-700 flex items-center">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mr-3 transition-all duration-300 hover:rotate-12">
              <FiHome size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
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
                        ? "bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-white border-l-4 border-indigo-400"
                        : "text-gray-300 hover:bg-gray-700/50 hover:text-white hover:translate-x-1"
                    }`}
                  >
                    <span className={`mr-3 transition-colors duration-300 ${
                      location.pathname === item.path ? "text-indigo-300" : "text-gray-400"
                    }`}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                    {location.pathname === item.path && (
                      <span className="ml-auto w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer/Settings */}
          <div className="p-4 border-t border-gray-700">
            <Link 
              to="/settings"
              className={`flex items-center px-4 py-3 rounded-lg mx-2 transition-all duration-300 ${
                location.pathname === "/settings"
                  ? "bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-white"
                  : "text-gray-300 hover:bg-gray-700/50 hover:text-white hover:translate-x-1"
              }`}
            >
              <span className={`mr-3 ${
                location.pathname === "/settings" ? "text-indigo-300" : "text-gray-400"
              }`}>
                <FiSettings />
              </span>
              <span className="font-medium">Settings</span>
            </Link>
            
            <button className="w-full flex items-center px-4 py-3 rounded-lg mx-2 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 mt-1 hover:translate-x-1 group">
              <FiLogOut className="mr-3 text-gray-400 group-hover:text-red-400 transition-colors duration-300" />
              <span className="font-medium group-hover:text-red-300 transition-colors duration-300">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;