const CategoryTable = () => {
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
  ];

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="border px-4 py-2">ID</th>
          <th className="border px-4 py-2">Name</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category.id}>
            <td className="border px-4 py-2">{category.id}</td>
            <td className="border px-4 py-2">{category.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoryTable;
