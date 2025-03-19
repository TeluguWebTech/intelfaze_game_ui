import React, { useState } from "react";
import { FaDownload, FaFileInvoice } from "react-icons/fa";

const getYesterdayDate = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split("T")[0];
};


const deposits = [
  { 
    id: "TRT-1001", date: getYesterdayDate(), location: "Downtown Arcade", 
    client: "John Doe",pulled: "$500.00", employee: "Alice Smith", 
    balance: "$1,200.00", details: "Transaction approved by Alice Smith at Downtown Arcade."
  },
  { 
    id: "TRT-1002", date: getYesterdayDate(), location: "City Mall", 
    client: "Sarah Johnson",pulled: "$750.00", employee: "Bob Williams", 
    balance: "$1,750.00", details: "Transaction recorded at City Mall."
  },
  { 
    id: "TRT-1003", date: getYesterdayDate(), location: "Fun Zone", 
    client: "Michael Brown",pulled: "$620.00", employee: "Emma Davis", 
    balance: "$2,000.00", details: "Deposit confirmed for Fun Zone branch."
  },
  { 
    id: "TRT-1004", date: getYesterdayDate(), location: "Play Arena", 
    client: "David White",pulled: "$900.00", employee: "Oliver Green", 
    balance: "$2,400.00", details: "Verified by Oliver Green at Play Arena."
  },
];

export default function TrtPullOuts() {
  const [selectedDeposit, setSelectedDeposit] = useState(null);
      const [selectedDate, setSelectedDate] = useState(getYesterdayDate());
  

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">TRT Payments</h2>
        <input
          className="border border-gray-800 p-2 rounded"
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <button className="bg-gray-200 px-3 py-2 rounded flex items-center gap-2 hover:bg-gray-300">
          <FaDownload /> Download All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="border-b font-semibold bg-gray-100">
              <th className="py-2 px-3">Machine ID</th>
              <th className="py-2 px-3">Date</th>
              <th className="py-2 px-3">Location</th>
              <th className="py-2 px-3">Client ID/Name</th>
              <th className="py-2 px-3">Pulled Amount</th>
              <th className="py-2 px-3">Employee Name</th>
              <th className="py-2 px-3">Machine Balance</th>
              <th className="py-2 px-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {deposits.map((deposit, index) => (
              <tr 
                key={index} 
                className="border-b hover:bg-gray-100 cursor-pointer"
                onClick={() => setSelectedDeposit(deposit)}
              >
                <td className="py-3 px-3">{deposit.id}</td>
                <td className="py-3 px-3">{selectedDate}</td>
                <td className="py-3 px-3">{deposit.location}</td>
                <td className="py-3 px-3">{deposit.client}</td>
                <td className="py-3 px-3">{deposit.pulled}</td>
                <td className="py-3 px-3">{deposit.employee}</td>
                <td className="py-3 px-3">{deposit.balance}</td>
                <td className="py-3 px-3 text-center flex gap-2 justify-center">
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

      {selectedDeposit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">Invoice Details</h2>
            <p><strong>Machine ID:</strong> {selectedDeposit.id}</p>
            <p><strong>Date:</strong> {selectedDate}</p>
            <p><strong>Location:</strong> {selectedDeposit.location}</p>
            <p><strong>Client:</strong> {selectedDeposit.client}</p>
            <p><strong>Pulled:</strong> {selectedDeposit.pulled}</p>
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
