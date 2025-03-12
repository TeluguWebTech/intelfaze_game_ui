import { useState } from "react";

const orders = [
  { id: 14550, customer: "Brian Cox", status: "Completed", total: "$40.00", dateAdded: "25/12/2021", dateModified: "30/12/2021" },
  { id: 14551, customer: "Francis Mitcham", status: "Completed", total: "$384.00", dateAdded: "22/12/2021", dateModified: "29/12/2021" },
  { id: 14552, customer: "Dan Wilson", status: "Completed", total: "$83.00", dateAdded: "25/12/2021", dateModified: "28/12/2021" },
  { id: 14553, customer: "Emma Bold", status: "Cancelled", total: "$127.00", dateAdded: "21/12/2021", dateModified: "27/12/2021" },
  { id: 14554, customer: "Emma Smith", status: "Completed", total: "$418.00", dateAdded: "22/12/2021", dateModified: "26/12/2021" },
  { id: 14555, customer: "Sean Bean", status: "Completed", total: "$248.00", dateAdded: "19/12/2021", dateModified: "24/12/2021" },
  { id: 14556, customer: "Lucy Kunic", status: "Completed", total: "$361.00", dateAdded: "20/12/2021", dateModified: "24/12/2021" },
  { id: 14557, customer: "Dan Wilson", status: "Completed", total: "$95.00", dateAdded: "18/12/2021", dateModified: "23/12/2021" },
  { id: 14558, customer: "Sean Bean", status: "Completed", total: "$101.00", dateAdded: "15/12/2021", dateModified: "22/12/2021" },
  { id: 14559, customer: "Lucy Kunic", status: "Pending", total: "$63.00", dateAdded: "16/12/2021", dateModified: "21/12/2021" },
];

export default function RevShowTrt() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredOrders = orders.filter(
    (order) =>
      order.customer.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter ? order.status === statusFilter : true)
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        TRT Transactions
        <input
          type="text"
          placeholder="Search Order"
          className="p-2 border rounded w-1/3"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Pending">Pending</option>
        </select>
        <button className="bg-blue-500 text-white p-2 rounded">Add Order</button>
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Order ID</th>
            <th className="p-2 border">Customer</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Total</th>
            <th className="p-2 border">Date Added</th>
            <th className="p-2 border">Date Modified</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id} className="text-center">
              <td className="p-2 border">{order.id}</td>
              <td className="p-2 border">{order.customer}</td>
              <td className={`p-2 border ${order.status === 'Completed' ? 'text-green-500' : order.status === 'Cancelled' ? 'text-red-500' : 'text-yellow-500'}`}>{order.status}</td>
              <td className="p-2 border">{order.total}</td>
              <td className="p-2 border">{order.dateAdded}</td>
              <td className="p-2 border">{order.dateModified}</td>
              <td className="p-2 border">
                <button className="bg-gray-300 p-1 rounded">Actions</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
