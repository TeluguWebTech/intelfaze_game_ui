import React, { useState, useEffect } from "react";
import { FaEye, FaTrash } from "react-icons/fa";

const getYesterdayDate = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split("T")[0];
};

// Sample data with more records
const allCustomers = [
  { id: "CL-001", name: "John Doe", location: "New York, NY", contact: "+1 212 555 7890", rating: 4.5, image: "https://i.pravatar.cc/50?img=1" },
  { id: "CL-002", name: "Jane Smith", location: "Los Angeles, CA", contact: "+1 323 555 1234", rating: 4.8, image: "https://i.pravatar.cc/50?img=2" },
  { id: "CL-003", name: "Michael Johnson", location: "Chicago, IL", contact: "+1 312 555 9876", rating: 4.2, image: "https://i.pravatar.cc/50?img=3" },
  { id: "CL-004", name: "Emily Davis", location: "Houston, TX", contact: "+1 713 555 4567", rating: 4.7, image: "https://i.pravatar.cc/50?img=4" },
  { id: "CL-005", name: "David Wilson", location: "San Francisco, CA", contact: "+1 415 555 7890", rating: 4.3, image: "https://i.pravatar.cc/50?img=5" },
  { id: "CL-006", name: "Sophia Martinez", location: "Miami, FL", contact: "+1 305 555 2345", rating: 4.6, image: "https://i.pravatar.cc/50?img=6" },
  { id: "CL-007", name: "William Brown", location: "Dallas, TX", contact: "+1 972 555 6789", rating: 4.9, image: "https://i.pravatar.cc/50?img=7" },
  { id: "CL-008", name: "Olivia Taylor", location: "Seattle, WA", contact: "+1 206 555 3456", rating: 4.1, image: "https://i.pravatar.cc/50?img=8" },
  { id: "CL-009", name: "James Anderson", location: "Boston, MA", contact: "+1 617 555 4321", rating: 4.4, image: "https://i.pravatar.cc/50?img=9" },
  { id: "CL-010", name: "Charlotte Harris", location: "Denver, CO", contact: "+1 303 555 8765", rating: 4.5, image: "https://i.pravatar.cc/50?img=10" },
];

const blockedCustomers = [
  { id: "BLK-001", name: "Liam Anderson", reason: "Multiple fraudulent transactions", blockedDate: "2025-02-15", location: "New York", image: "https://randomuser.me/api/portraits/men/31.jpg" },
  { id: "BLK-002", name: "Emma Roberts", reason: "Chargeback abuse", blockedDate: "2025-02-18", location: "Los Angeles", image: "https://randomuser.me/api/portraits/women/32.jpg" },
  { id: "BLK-003", name: "Noah Wilson", reason: "Violation of terms of service", blockedDate: "2025-02-20", location: "Chicago", image: "https://randomuser.me/api/portraits/men/33.jpg" },
  { id: "BLK-004", name: "Olivia Davis", reason: "Suspicious account activity", blockedDate: "2025-02-22", location: "Houston", image: "https://randomuser.me/api/portraits/women/34.jpg" },
  { id: "BLK-005", name: "William Martinez", reason: "Unauthorized use of payment methods", blockedDate: "2025-02-25", location: "San Francisco", image: "https://randomuser.me/api/portraits/men/35.jpg" },
];

const reviews = [
  { id: "REV-001", customer: "John Doe", rating: 4.5, comment: "Great service!", date: "2025-03-01", image: "https://i.pravatar.cc/50?img=1" },
  { id: "REV-002", customer: "Jane Smith", rating: 4.8, comment: "Excellent experience!", date: "2025-03-02", image: "https://i.pravatar.cc/50?img=2" },
  { id: "REV-003", customer: "Michael Johnson", rating: 4.2, comment: "Could be better.", date: "2025-03-03", image: "https://i.pravatar.cc/50?img=3" },
  { id: "REV-004", customer: "Emily Davis", rating: 4.7, comment: "Very satisfied!", date: "2025-03-04", image: "https://i.pravatar.cc/50?img=4" },
  { id: "REV-005", customer: "David Wilson", rating: 4.3, comment: "Good service.", date: "2025-03-05", image: "https://i.pravatar.cc/50?img=5" },
];

const support = [
  { id: "SUP-001", customer: "Sophia Martinez", issue: "Payment issue", status: "Resolved", date: "2025-03-06", image: "https://i.pravatar.cc/50?img=6" },
  { id: "SUP-002", customer: "William Brown", issue: "Technical problem", status: "Pending", date: "2025-03-07", image: "https://i.pravatar.cc/50?img=7" },
  { id: "SUP-003", customer: "Olivia Taylor", issue: "Account blocked", status: "Resolved", date: "2025-03-08", image: "https://i.pravatar.cc/50?img=8" },
  { id: "SUP-004", customer: "James Anderson", issue: "Refund request", status: "Pending", date: "2025-03-09", image: "https://i.pravatar.cc/50?img=9" },
  { id: "SUP-005", customer: "Charlotte Harris", issue: "Login issue", status: "Resolved", date: "2025-03-10", image: "https://i.pravatar.cc/50?img=10" },
];

const CustomerAccordian = () => {
  const [activeTable, setActiveTable] = useState("All Customers");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedDate, setSelectedDate] = useState(getYesterdayDate());

  const recordsPerPage = 5;

  const tables = {
    "All Customers": {
      data: allCustomers,
      columns: ["Profile", "Customer ID", "Name", "Location", "Contact", "Rating", "Action"],
    },
    "Blocked Customers": {
      data: blockedCustomers,
      columns: ["Profile", "Blocked ID", "Name", "Reason", "Blocked Date", "Location"],
    },
    "Reviews": {
      data: reviews,
      columns: ["Profile", "Review ID", "Customer", "Rating", "Comment", "Date"],
    },
    "Support": {
      data: support,
      columns: ["Profile", "Support ID", "Customer", "Issue", "Status", "Date"],
    },
  };

  // Pagination logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = tables[activeTable].data.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(tables[activeTable].data.length / recordsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleViewClient = (client) => {
    setSelectedClient(client);
  };

  const handleCloseModal = () => {
    setSelectedClient(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <input
          className="border border-gray-800 p-2 rounded"
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        {Object.keys(tables).map((type) => (
          <button
            key={type}
            onClick={() => {
              setActiveTable(type);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-lg transition-all duration-300 min-w-[140px] text-center ${
              activeTable === type ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden pr-8 pl-8">
          <thead>
            <tr className="bg-pink-700 text-white text-left">
              {tables[activeTable].columns.map((col, index) => (
                <th key={index} className="p-3 font-semibold">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b hover:bg-gray-50 transition-all">
                {tables[activeTable].columns.includes("Profile") && (
                  <td className="p-3 cursor-pointer" onClick={() => handleViewClient(row)}>
                    <img src={row.image} alt={row.name} className="w-10 h-10 rounded-full" />
                  </td>
                )}
                {Object.keys(row)
                  .filter((key) => key !== "image")
                  .map((key, colIndex) => (
                    <td key={colIndex} className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>
                      {row[key]}
                    </td>
                  ))}
                {tables[activeTable].columns.includes("Action") && (
                  <td className="p-3 space-x-2">
                    <button className="text-blue-500 hover:text-blue-700" onClick={() => handleViewClient(row)}>
                      <FaEye />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Modal for Client Details */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-2">Client Details</h2>
            <img src={selectedClient.image} alt={selectedClient.name} className="w-20 h-20 rounded-full mx-auto" />
            <p className="mt-3"><strong>Name:</strong> {selectedClient.name}</p>
            <p><strong>Location:</strong> {selectedClient.location}</p>
            <p><strong>Contact:</strong> {selectedClient.contact}</p>
            {/* {selectedClient.trts && <p><strong>TRTs:</strong> {selectedClient.trts}</p>} */}
            {selectedClient.rating && <p><strong>Rating:</strong> {selectedClient.rating}</p>}
            {selectedClient.reason && <p><strong>Reason:</strong> {selectedClient.reason}</p>}
            {selectedClient.blockedDate && <p><strong>Blocked Date:</strong> {selectedClient.blockedDate}</p>}
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerAccordian;