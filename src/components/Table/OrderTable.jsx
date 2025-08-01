const OrderTable = () => {
  const orders = [
    { id: 101, customer: "Alice", total: 250.0, status: "Pending" },
    { id: 102, customer: "Bob", total: 120.5, status: "Delivered" },
  ];

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="border px-4 py-2">Order ID</th>
          <th className="border px-4 py-2">Customer</th>
          <th className="border px-4 py-2">Total ($)</th>
          <th className="border px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td className="border px-4 py-2">{order.id}</td>
            <td className="border px-4 py-2">{order.customer}</td>
            <td className="border px-4 py-2">{order.total}</td>
            <td className="border px-4 py-2">{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
