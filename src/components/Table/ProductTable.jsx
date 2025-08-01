const ProductTable = () => {
  const products = [
    { id: 1, name: "Smartphone", price: 500, category: "Electronics" },
    { id: 2, name: "Jeans", price: 40, category: "Clothing" },
  ];

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="border px-4 py-2">ID</th>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Price ($)</th>
          <th className="border px-4 py-2">Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="border px-4 py-2">{product.id}</td>
            <td className="border px-4 py-2">{product.name}</td>
            <td className="border px-4 py-2">{product.price}</td>
            <td className="border px-4 py-2">{product.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
