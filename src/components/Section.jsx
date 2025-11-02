import React from "react";
import { useState } from "react";
export default function Section() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    price: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add new product to the list
  const handleAdd = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.weight || !formData.price) return;

    setProducts([
      ...products,
      {
        id: Date.now(),
        name: formData.name,
        weight: formData.weight,
        price: parseFloat(formData.price),
      },
    ]);

    setFormData({ name: "", weight: "", price: "" });
  };

  // Remove product
  const handleRemove = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Calculate total price
  const total = products.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="w-full bg-gray-50 flex flex-col items-center p-8 mb-20 ">

      {/* Add Product Form */}
      <form
        onSubmit={handleAdd}
        className="print:hidden flex flex-col md:flex-row gap-3 mb-6 bg-white p-4 rounded-xl"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
          className="border rounded-lg px-3 py-2 flex-1 focus:ring-2 focus:ring-blue-500 print:hidden"
        />
        <input
          type="text"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          placeholder="Weight"
          required
          className="border rounded-lg px-3 py-2 flex-1 focus:ring-2 print:hidden focus:ring-blue-500"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
          className="border rounded-lg px-3 py-2 flex-1 focus:ring-2 print:hidden focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg print:hidden hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>

      {/* Product Table */}
      {products.length > 0 ? (
        <div className="w-full bg-white rounded-xl shadow-lg overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">S.No</th>
                <th className="p-3">Product Name</th>
                <th className="p-3">Weight</th>
                <th className="p-3">Price (₹)</th>
                <th className="p-3 text-center print:hidden">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, index) => (
                <tr key={p.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{p.name}</td>
                  <td className="p-3">{p.weight}</td>
                  <td className="p-3">₹{p.price}</td>
                  <td className="p-3 text-center print:hidden">
                    <button
                      onClick={() => handleRemove(p.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      ❌ Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="font-semibold bg-gray-100">
                <td className="p-3" colSpan="3">
                  Total
                </td>
                <td className="p-3">₹{total}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 mt-6">No products added yet.</p>
      )}
    </div>
  );
}
