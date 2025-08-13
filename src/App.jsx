import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import "./index.css";
import Settings from "./pages/setting";
import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Customers from "./pages/Customers";
import Notifications from "./pages/Notifications";
import Logout from "./pages/LogOut";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  console.log("API URL:", import.meta.env.VITE_API_URL);

  return (
    <Provider store={store} >
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="Logout" element={<Logout />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
