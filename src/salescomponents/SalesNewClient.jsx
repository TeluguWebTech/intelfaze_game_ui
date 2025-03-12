import React, { useState } from "react";

const data = [
  { id: 1, name: "Abram Schleifer", position: "Sales Assistant", office: "Edinburgh", age: 57, startDate: "25 Apr, 2027", salary: "$89,500", image: "https://i.pravatar.cc/40?img=1" },
  { id: 2, name: "Carla George", position: "Sales Assistant", office: "London", age: 45, startDate: "11 May, 2027", salary: "$15,500", image: "https://i.pravatar.cc/40?img=2" },
  { id: 3, name: "John Doe", position: "Software Engineer", office: "New York", age: 30, startDate: "12 Jan, 2024", salary: "$120,000", image: "https://i.pravatar.cc/40?img=3" },
  { id: 4, name: "Alice Brown", position: "Project Manager", office: "Toronto", age: 37, startDate: "5 Mar, 2026", salary: "$105,000", image: "https://i.pravatar.cc/40?img=4" },
  { id: 5, name: "Daniel Green", position: "HR Manager", office: "San Francisco", age: 42, startDate: "10 Dec, 2025", salary: "$98,000", image: "https://i.pravatar.cc/40?img=5" },
  { id: 6, name: "Emma Wilson", position: "Marketing Lead", office: "Sydney", age: 29, startDate: "18 Sep, 2028", salary: "$78,500", image: "https://i.pravatar.cc/40?img=6" },
  { id: 7, name: "Michael Scott", position: "Regional Manager", office: "Scranton", age: 45, startDate: "1 Apr, 2015", salary: "$120,000", image: "https://i.pravatar.cc/40?img=7" },
];

const SalesNewClient = () => {
  const [search, setSearch] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  // Filter data based on search input
  const filteredData = data.filter((row) =>
    Object.values(row).some((value) => value.toString().toLowerCase().includes(search.toLowerCase()))
  );

  // Paginate filtered data
  const paginatedData = filteredData.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

  return (
    <div className="flex">
       <div className="p-4 bg-gray-100 min-h-screen border w-full">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">New Clients</h3>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          />
        </div>

        {/* Table */}
        <table className="w-full border-collapse border text-sm">
          <thead className="bg-gray-200">
            <tr className="border-b">
              <th className="p-2 text-left">User</th>
              <th className="p-2 text-left">Position</th>
              <th className="p-2 text-left">Office</th>
              <th className="p-2 text-left">Age</th>
              <th className="p-2 text-left">Start Date</th>
              <th className="p-2 text-left">Salary</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {paginatedData.map((row) => (
              <tr key={row.id} className="border-b">
                <td className="p-2 flex items-center space-x-2">
                  <img src={row.image} alt={row.name} className="w-8 h-8 rounded-full" />
                  <span>{row.name}</span>
                </td>
                <td className="p-2">{row.position}</td>
                <td className="p-2">{row.office}</td>
                <td className="p-2">{row.age}</td>
                <td className="p-2">{row.startDate}</td>
                <td className="p-2">{row.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm">
            Showing {pageIndex * pageSize + 1} to {Math.min((pageIndex + 1) * pageSize, filteredData.length)} of {filteredData.length} entries
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => setPageIndex((old) => Math.max(old - 1, 0))}
              disabled={pageIndex === 0}
              className="px-2 py-1 bg-gray-300 rounded text-sm"
            >
              Prev
            </button>
            <button
              onClick={() => setPageIndex((old) => Math.min(old + 1, Math.ceil(filteredData.length / pageSize) - 1))}
              disabled={pageIndex >= Math.ceil(filteredData.length / pageSize) - 1}
              className="px-2 py-1 bg-gray-300 rounded text-sm"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
   
    </div>
  );
};

export default SalesNewClient;
