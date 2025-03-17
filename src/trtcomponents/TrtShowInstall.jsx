import React, { useState } from "react";
import { FaDownload, FaFileInvoice } from "react-icons/fa";

const deposits = [
  { 
    id: "TRT-1001", date: "10 Mar, 2025", location: "Downtown Arcade", 
    client: "John Doe", deposit: "$500.00", employee: "Alice Smith", 
    balance: "$1,200.00", details: "Transaction approved by Alice Smith at Downtown Arcade."
  },
  { 
    id: "TRT-1002", date: "12 Mar, 2025", location: "City Mall", 
    client: "Sarah Johnson", deposit: "$750.00", employee: "Bob Williams", 
    balance: "$1,750.00", details: "Transaction recorded at City Mall."
  },
  { 
    id: "TRT-1003", date: "15 Mar, 2025", location: "Fun Zone", 
    client: "Michael Brown", deposit: "$620.00", employee: "Emma Davis", 
    balance: "$2,000.00", details: "Deposit confirmed for Fun Zone branch."
  },
  { 
    id: "TRT-1004", date: "18 Mar, 2025", location: "Play Arena", 
    client: "David White", deposit: "$900.00", employee: "Oliver Green", 
    balance: "$2,400.00", details: "Verified by Oliver Green at Play Arena."
  },
];

export default function TrtShowInstall() {
  const [selectedDeposit, setSelectedDeposit] = useState(null);

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">TRT Deposits</h2>
        <button className="bg-gray-200 px-3 py-2 rounded flex items-center gap-2 hover:bg-gray-300">
          <FaDownload /> Download All
        </button>
      </div>

      {/* Table Wrapper for Scrollable Content */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="border-b font-semibold bg-gray-100">
              <th className="py-3 px-4">Machine ID</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Client ID/Name</th>
              <th className="py-3 px-4">Deposit Amount</th>
              <th className="py-3 px-4">Employee Name</th>
              <th className="py-3 px-4">Machine Balance</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {deposits.map((deposit, index) => (
              <tr 
                key={index} 
                className="border-b hover:bg-gray-100 cursor-pointer"
                onClick={() => setSelectedDeposit(deposit)}
              >
                <td className="py-4 px-4">{deposit.id}</td>
                <td className="py-4 px-4">{deposit.date}</td>
                <td className="py-4 px-4">{deposit.location}</td>
                <td className="py-4 px-4">{deposit.client}</td>
                <td className="py-4 px-4">{deposit.deposit}</td>
                <td className="py-4 px-4">{deposit.employee}</td>
                <td className="py-4 px-4">{deposit.balance}</td>
                <td className="py-4 px-4 text-center flex gap-2 justify-center">
                  <button 
                    className="text-green-500 hover:text-green-700 flex items-center gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDeposit(deposit);
                    }}
                  >
                    <FaFileInvoice /> Invoice
                  </button>
                  <button 
                    className="text-blue-500 hover:text-blue-700"
                    onClick={(e) => e.stopPropagation()} // Prevent modal open
                  >
                    <FaDownload />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Deposit Details */}
      {selectedDeposit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">Invoice Details</h2>
            <p><strong>Machine ID:</strong> {selectedDeposit.id}</p>
            <p><strong>Date:</strong> {selectedDeposit.date}</p>
            <p><strong>Location:</strong> {selectedDeposit.location}</p>
            <p><strong>Client:</strong> {selectedDeposit.client}</p>
            <p><strong>Deposit:</strong> {selectedDeposit.deposit}</p>
            <p><strong>Employee:</strong> {selectedDeposit.employee}</p>
            <p><strong>Machine Balance:</strong> {selectedDeposit.balance}</p>
            <p className="mt-2 text-gray-600">{selectedDeposit.details}</p>
            <button 
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => setSelectedDeposit(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
