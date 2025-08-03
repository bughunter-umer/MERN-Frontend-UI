import AdminLayout from "../components/Layout/AdminLayout";
import UserTable from "../components/Table/UserTable";

const Users = () => {
  // Sample user data (should come from API/state in real app)
  const users = [
    { id: 1, name: "Umer Daud", email: "iamumerdaud@gmail.com", role: "Admin", status: "Active", lastActive: "2 mins ago" },
    { id: 2, name: "Umair Qureshi", email: "Umairqureshi231@gmail.com", role: "User", status: "Active", lastActive: "1 hour ago" },
    // ... other users
  ];

  return (
    <AdminLayout>
      <div className="max-w-full mx-auto px-4 py-8"> {/* Changed to max-w-full */}
        <div className="flex flex-col space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Users</h1>
          </div>
          
          {/* Table Container - Removed extra padding and borders */}
          <div className="overflow-hidden"> {/* Removed bg-white and shadow */}
            <UserTable users={users} /> {/* Pass users data as prop */}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Users;