import React, { useState } from "react";
import { FaHome, FaChevronRight, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const blockedCustomers = [
  {
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    customerId: "CUST2001",
    customerName: "Noah Williams",
    contact: "+1 321 456 7890",
    email: "noah.williams@email.com",
    address: "789 Elm St, Denver, CO",
    subscription: "Premium",
    region: "Colorado",
    reason: "Fraudulent transactions",
    blockedDate: "2025-02-15",
  },
  {
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    customerId: "CUST2002",
    customerName: "Emma Johnson",
    contact: "+1 789 654 1230",
    email: "emma.johnson@email.com",
    address: "456 River St, Austin, TX",
    subscription: "Standard",
    region: "Texas",
    reason: "Chargeback abuse",
    blockedDate: "2025-03-05",
  },
  {
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    customerId: "CUST2003",
    customerName: "Liam Brown",
    contact: "+1 654 321 9870",
    email: "liam.brown@email.com",
    address: "123 Pine St, Seattle, WA",
    subscription: "Gold",
    region: "Washington",
    reason: "Policy violation",
    blockedDate: "2025-01-20",
  },
  {
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    customerId: "CUST2004",
    customerName: "Olivia Taylor",
    contact: "+1 555 987 6543",
    email: "olivia.taylor@email.com",
    address: "567 Oak St, Miami, FL",
    subscription: "Silver",
    region: "Florida",
    reason: "Excessive refunds",
    blockedDate: "2025-04-10",
  },
  {
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    customerId: "CUST2005",
    customerName: "William Martinez",
    contact: "+1 111 222 3333",
    email: "william.martinez@email.com",
    address: "890 Maple St, Boston, MA",
    subscription: "Premium",
    region: "Massachusetts",
    reason: "Multiple disputes",
    blockedDate: "2025-02-28",
  },
  {
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    customerId: "CUST2006",
    customerName: "Sophia Davis",
    contact: "+1 777 888 9999",
    email: "sophia.davis@email.com",
    address: "234 Cedar St, Chicago, IL",
    subscription: "Standard",
    region: "Illinois",
    reason: "Unauthorized activity",
    blockedDate: "2025-03-12",
  },
];

const BlockedCustomers = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  // Pagination logic
  const totalPages = Math.ceil(blockedCustomers.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const paginatedCustomers = blockedCustomers.slice(startIndex, startIndex + recordsPerPage);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg ">
          <div className="flex items-center text-gray-600 text-sm mb-4">
                        <FaHome className="mr-1 text-blue-500" />
                        <Link to="/" className="hover:underline">Home</Link>
                        <FaChevronRight className="mx-2 text-gray-400" />
                        <Link to="/customers" className="hover:underline ">Customers</Link>
                        <FaChevronRight className="mx-2 text-gray-400" />
                        <span className=" text-amber-500">Blocked Customers</span>
                      </div>
      <h2 className="text-2xl font-semibold mb-4">Blocked Customers</h2>

      <table className="w-full border rounded-lg">
        <thead className="bg-gray-500 text-white">
          <tr>
            <th className="p-3 text-left">Customer ID</th>
            <th className="text-left">Name</th>
            <th className="text-left">Reason</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedCustomers.map((customer) => (
            <tr
              key={customer.customerId}
              className="border-b hover:bg-gray-50"
            >
              <td className="p-3">{customer.customerId}</td>
              <td className="flex items-center gap-3 p-3">
                <img
                  src={customer.image}
                  alt={customer.customerName}
                  className="w-10 h-10 rounded-full border"
                />
                {customer.customerName}
              </td>
              <td className="p-3">{customer.reason}</td>
              <td className="p-3">
                <button
                  className="text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-50"
                  onClick={() => setSelectedCustomer(customer)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-4">
  <button
    className={`px-4 py-2 text-white rounded ${currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
  >
    Previous
  </button>
  <span className="text-gray-700">
    Page {currentPage} of {totalPages}
  </span>
  <button
    className={`px-4 py-2 text-white rounded ${currentPage === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
  >
    Next
  </button>
</div>


      {/* Modal for Selected Customer */}
      {selectedCustomer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-xl relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
              onClick={() => setSelectedCustomer(null)}
            >
              &times;
            </button>

            <div className="flex flex-col items-center">
              <img
                src={selectedCustomer.image}
                alt={selectedCustomer.customerName}
                className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-sm"
              />
              <h3 className="text-lg font-bold mt-3">{selectedCustomer.customerName}</h3>
              <p className="text-gray-500">Blocked on: <strong>{selectedCustomer.blockedDate}</strong></p>
            </div>

            <div className="mt-5 space-y-2 border-t pt-4 text-gray-700">
              <p><strong>ID:</strong> {selectedCustomer.customerId}</p>
              <p><strong>Contact:</strong> {selectedCustomer.contact}</p>
              <p><strong>Email:</strong> {selectedCustomer.email}</p>
              <p><strong>Address:</strong> {selectedCustomer.address}</p>
              <p><strong>Subscription:</strong> {selectedCustomer.subscription}</p>
              <p><strong>Region:</strong> {selectedCustomer.region}</p>
              <p><strong>Reason:</strong> {selectedCustomer.reason}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlockedCustomers;
