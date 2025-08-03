import AdminLayout from "../components/Layout/AdminLayout";
import { 
  FiUser, FiMail, FiLock, FiGlobe, FiCreditCard, 
  FiBell, FiUpload, FiShield, FiDollarSign, 
  FiCalendar, FiActivity, FiMoon, FiSun 
} from "react-icons/fi";
import { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [profilePic, setProfilePic] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <AdminLayout>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="flex flex-col space-y-8">
          {/* Header with Theme Toggle */}
          <div className="flex justify-between items-center">
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
              Account Settings
            </h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-64">
              <nav className={`rounded-xl shadow-sm p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <ul className="space-y-2">
                  {[
                    { id: "profile", icon: <FiUser />, label: "Profile" },
                    { id: "security", icon: <FiShield />, label: "Security" },
                    { id: "billing", icon: <FiDollarSign />, label: "Billing" },
                    { id: "notifications", icon: <FiBell />, label: "Notifications" },
                    { id: "appearance", icon: darkMode ? <FiSun /> : <FiMoon />, label: "Appearance" },
                    { id: "activity", icon: <FiActivity />, label: "Activity Log" },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === item.id 
                          ? darkMode 
                            ? 'bg-indigo-600 text-white' 
                            : 'bg-indigo-50 text-indigo-700'
                          : darkMode 
                            ? 'text-gray-300 hover:bg-gray-700' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Storage Usage Widget */}
              <div className={`mt-6 rounded-xl shadow-sm p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`text-sm font-medium mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Storage Usage
                </h3>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" 
                    style={{ width: '65%' }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-xs">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>6.5 GB used</span>
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>10 GB total</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div className={`rounded-xl shadow-sm p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                    Profile Information
                  </h2>
                  
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Profile Picture Section */}
                    <div className="w-full md:w-48">
                      <div className="relative group">
                        <div className={`w-40 h-40 rounded-full overflow-hidden border-2 ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                          <img
                            src={profilePic || "/avatars/1.jpg"}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <label className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full cursor-pointer hover:bg-indigo-700 transition-colors">
                          <FiUpload />
                          <input
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                            accept="image/*"
                          />
                        </label>
                      </div>
                      <p className={`mt-3 text-md ${darkMode ? 'text-gray-300 font-bold pl-11' : 'text-gray-600 font-bold pl-11'}`}>
                        AwanEditz
                      </p>
                    </div>

                    {/* Profile Form */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                          Full Name
                        </label>
                        <div className="relative">
                          <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${darkMode ? 'text-gray-400' : 'text-slate-400'}`}>
                            <FiUser />
                          </div>
                          <input
                            type="text"
                            className={`block w-full pl-10 pr-3 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-slate-300'}`}
                            placeholder="Umer Awan"
                            defaultValue="Admin User"
                          />
                        </div>
                      </div>

                      <div>
                        <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                          Email Address
                        </label>
                        <div className="relative">
                          <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${darkMode ? 'text-gray-400' : 'text-slate-400'}`}>
                            <FiMail />
                          </div>
                          <input
                            type="email"
                            className={`block w-full pl-10 pr-3 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-slate-300'}`}
                            placeholder="email@example.com"
                            defaultValue="iamumerdaud@gmail.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                          Bio
                        </label>
                        <textarea
                          rows={3}
                          className={`block w-full rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-slate-300'}`}
                          placeholder="Tell us about yourself..."
                          defaultValue="Administrator with full system access"
                        ></textarea>
                      </div>

                      <div className="pt-2">
                        <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all shadow-md font-medium">
                          Update Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === "security" && (
                <div className={`rounded-xl shadow-sm p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                    Security Settings
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Password Change */}
                    <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        Change Password
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                            Current Password
                          </label>
                          <div className="relative">
                            <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${darkMode ? 'text-gray-400' : 'text-slate-400'}`}>
                              <FiLock />
                            </div>
                            <input
                              type="password"
                              className={`block w-full pl-10 pr-3 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-slate-300'}`}
                              placeholder="••••••••"
                            />
                          </div>
                        </div>

                        <div>
                          <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                            New Password
                          </label>
                          <div className="relative">
                            <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${darkMode ? 'text-gray-400' : 'text-slate-400'}`}>
                              <FiLock />
                            </div>
                            <input
                              type="password"
                              className={`block w-full pl-10 pr-3 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-slate-300'}`}
                              placeholder="••••••••"
                            />
                          </div>
                          <p className={`mt-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Must be at least 8 characters
                          </p>
                        </div>

                        <div className="pt-2">
                          <button className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all shadow-sm font-medium">
                            Update Password
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Two-Factor Authentication */}
                    <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        Two-Factor Authentication
                      </h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-slate-700'}`}>
                            Authenticator App
                          </h4>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Add an extra layer of security
                          </p>
                        </div>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                          Enable
                        </button>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        Recent Security Activity
                      </h3>
                      <div className="space-y-4">
                        {[
                          { id: 1, action: "Password changed", date: "2 hours ago", location: "New York, US" },
                          { id: 2, action: "Logged in from new device", date: "1 day ago", location: "London, UK" },
                          { id: 3, action: "Two-factor authentication enabled", date: "1 week ago", location: "San Francisco, US" },
                        ].map((item) => (
                          <div key={item.id} className="flex items-start">
                            <div className={`p-2 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-indigo-100'}`}>
                              <FiShield className={darkMode ? 'text-indigo-400' : 'text-indigo-600'} />
                            </div>
                            <div className="ml-4">
                              <h4 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-slate-700'}`}>
                                {item.action}
                              </h4>
                              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {item.date} • {item.location}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Billing Tab */}
              {activeTab === "billing" && (
                <div className={`rounded-xl shadow-sm p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                    Billing Information
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Current Plan */}
                    <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        Current Plan
                      </h3>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h4 className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                            Premium Plan
                          </h4>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Next billing date: <span className="font-medium">June 15, 2023</span>
                          </p>
                        </div>
                        <div className="text-right">
                          <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                            $29.99<span className="text-sm font-normal">/month</span>
                          </p>
                          <button className="mt-2 px-4 py-2 text-sm border border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                            Change Plan
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        Payment Method
                      </h3>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center">
                          <div className="w-10 h-6 bg-blue-500 rounded flex items-center justify-center text-white">
                            <FiCreditCard />
                          </div>
                          <div className="ml-4">
                            <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-slate-700'}`}>
                              Visa ending in 4242
                            </h4>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              Expires 04/2025
                            </p>
                          </div>
                        </div>
                        <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                          Edit
                        </button>
                      </div>
                      <button className="mt-4 px-4 py-2 border cursor-pointer border-dashed rounded-lg w-full hover:bg-gray-100 transition-colors text-sm font-medium">
                        + Add Payment Method
                      </button>
                    </div>

                    {/* Billing History */}
                    <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        Billing History
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full">
                          <thead>
                            <tr className={`border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                              <th className={`py-3 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                                Date
                              </th>
                              <th className={`py-3 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                                Description
                              </th>
                              <th className={`py-3 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                                Amount
                              </th>
                              <th className={`py-3 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { id: 1, date: "May 15, 2023", description: "Premium Plan", amount: "$29.99", status: "Paid" },
                              { id: 2, date: "Apr 15, 2023", description: "Premium Plan", amount: "$29.99", status: "Paid" },
                              { id: 3, date: "Mar 15, 2023", description: "Premium Plan", amount: "$29.99", status: "Paid" },
                            ].map((item) => (
                              <tr key={item.id} className={`border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                                <td className={`py-3 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                  {item.date}
                                </td>
                                <td className={`py-3 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                  {item.description}
                                </td>
                                <td className={`py-3 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                  {item.amount}
                                </td>
                                <td className="py-3">
                                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                                    {item.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === "notifications" && (
                <div className={`rounded-xl shadow-sm p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                    Notification Preferences
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Email Notifications */}
                    <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        Email Notifications
                      </h3>
                      <div className="space-y-3">
                        {[
                          { id: 1, label: "Product updates", description: "News about product updates and features" },
                          { id: 2, label: "Security alerts", description: "Important security notifications" },
                          { id: 3, label: "Newsletter", description: "Weekly product newsletter" },
                        ].map((item) => (
                          <div key={item.id} className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id={`email-${item.id}`}
                                name={`email-${item.id}`}
                                type="checkbox"
                                className={`h-4 w-4 rounded focus:ring-indigo-500 ${darkMode ? 'bg-gray-600 border-gray-500 text-indigo-500' : 'border-slate-300 text-indigo-600'}`}
                                defaultChecked={item.id !== 3}
                              />
                            </div>
                            <div className="ml-3">
                              <label htmlFor={`email-${item.id}`} className={`font-medium ${darkMode ? 'text-gray-200' : 'text-slate-700'}`}>
                                {item.label}
                              </label>
                              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Push Notifications */}
                    <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        Push Notifications
                      </h3>
                      <div className="space-y-3">
                        {[
                          { id: 1, label: "New messages", description: "When someone sends you a message" },
                          { id: 2, label: "Reminders", description: "Scheduled reminders and tasks" },
                        ].map((item) => (
                          <div key={item.id} className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id={`push-${item.id}`}
                                name={`push-${item.id}`}
                                type="checkbox"
                                className={`h-4 w-4 rounded focus:ring-indigo-500 ${darkMode ? 'bg-gray-600 border-gray-500 text-indigo-500' : 'border-slate-300 text-indigo-600'}`}
                                defaultChecked
                              />
                            </div>
                            <div className="ml-3">
                              <label htmlFor={`push-${item.id}`} className={`font-medium ${darkMode ? 'text-gray-200' : 'text-slate-700'}`}>
                                {item.label}
                              </label>
                              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Notification Frequency */}
                    <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        Notification Frequency
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                            Email Digest
                          </label>
                          <select
                            className={`block w-full rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-slate-300'}`}
                          >
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                          </select>
                        </div>
                        <div>
                          <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                            Quiet Hours
                          </label>
                          <div className="flex space-x-4">
                            <select
                              className={`block w-1/2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-slate-300'}`}
                            >
                              <option>10:00 PM</option>
                              <option>11:00 PM</option>
                              <option>12:00 AM</option>
                            </select>
                            <select
                              className={`block w-1/2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-slate-300'}`}
                            >
                              <option>6:00 AM</option>
                              <option>7:00 AM</option>
                              <option>8:00 AM</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all shadow-md font-medium">
                        Save Preferences
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Appearance Tab */}
              {activeTab === "appearance" && (
                <div className={`rounded-xl shadow-sm p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                    Appearance Settings
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Theme Selection */}
                    <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        Theme
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { id: "light", label: "Light", active: !darkMode },
                          { id: "dark", label: "Dark", active: darkMode },
                          { id: "system", label: "System", active: false },
                        ].map((theme) => (
                          <button
                            key={theme.id}
                            onClick={() => theme.id !== "system" && setDarkMode(theme.id === "dark")}
                            className={`p-4 rounded-lg border transition-colors ${theme.active 
                              ? darkMode 
                                ? 'border-indigo-500 bg-indigo-900' 
                                : 'border-indigo-500 bg-indigo-50'
                              : darkMode 
                                ? 'border-gray-600 hover:bg-gray-600' 
                                : 'border-gray-200 hover:bg-gray-100'
                            }`}
                          >
                            <div className={`w-full h-24 rounded mb-3 ${theme.id === "dark" ? 'bg-gray-800' : 'bg-white'} border ${theme.id === "dark" ? 'border-gray-700' : 'border-gray-200'}`}></div>
                            <div className="flex items-center justify-center">
                              <span className={`font-medium ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                                {theme.label}
                              </span>
                              {theme.active && (
                                <span className="ml-2 text-indigo-600">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </span>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Accent Color */}
                    <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        Accent Color
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {[
                          { id: "indigo", color: "bg-indigo-500" },
                          { id: "blue", color: "bg-blue-500" },
                          { id: "green", color: "bg-green-500" },
                          { id: "red", color: "bg-red-500" },
                          { id: "purple", color: "bg-purple-500" },
                          { id: "pink", color: "bg-pink-500" },
                        ].map((item) => (
                          <button
                            key={item.id}
                            className={`w-10 h-10 rounded-full ${item.color} ${item.id === "indigo" ? 'ring-2 ring-offset-2 ring-indigo-500' : ''}`}
                          ></button>
                        ))}
                      </div>
                    </div>

                    {/* Font Size */}
                    <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        Font Size
                      </h3>
                      <div className="flex items-center space-x-4">
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Small</span>
                        <input
                          type="range"
                          min="14"
                          max="18"
                          defaultValue="16"
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Large</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Activity Log Tab */}
              {activeTab === "activity" && (
                <div className={`rounded-xl shadow-sm p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                    Activity Log
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Timeline */}
                    <div className="relative">
                      {/* Timeline line */}
                      <div className={`absolute left-5 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                      
                      {/* Timeline items */}
                      <div className="space-y-8">
                        {[
                          { 
                            id: 1, 
                            icon: <FiUser className="text-indigo-500" />, 
                            title: "Profile updated", 
                            description: "Changed profile picture and bio", 
                            time: "2 hours ago" 
                          },
                          { 
                            id: 2, 
                            icon: <FiLock className="text-green-500" />, 
                            title: "Password changed", 
                            description: "Updated account password", 
                            time: "1 day ago" 
                          },
                          { 
                            id: 3, 
                            icon: <FiBell className="text-purple-500" />, 
                            title: "Notification settings updated", 
                            description: "Enabled email notifications", 
                            time: "3 days ago" 
                          },
                          { 
                            id: 4, 
                            icon: <FiGlobe className="text-blue-500" />, 
                            title: "Timezone updated", 
                            description: "Changed to (UTC-05:00) Eastern Time", 
                            time: "1 week ago" 
                          },
                        ].map((item) => (
                          <div key={item.id} className="relative pl-16">
                            <div className={`absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                              {item.icon}
                            </div>
                            <div>
                              <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                                {item.title}
                              </h3>
                              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {item.description}
                              </p>
                              <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                                {item.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Settings;