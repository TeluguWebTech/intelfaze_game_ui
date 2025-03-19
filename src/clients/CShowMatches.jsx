import React, { useState } from "react";
import { FaChevronRight, FaDownload, FaEye, FaHome, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const gameTransactions = [
  {
    gameMachine: "Machine-01",
    location: "Arcade Center A",
    region: "North",
    client: "Client-123",
    customerId: "CUST-001",
    customerName: "John Doe",
    gameAmount: "$50.00",
    customerDeposit: "$30.00",
    gameWon: "$20.00",
    gameLost: "$10.00",
    paid: "$20.00",
    profit: "$10.00",
    loss: "$10.00",
    actions: ["View", "Edit", "Delete"],
  },
  {
    gameMachine: "Machine-02",
    location: "Arcade Center B",
    region: "South",
    client: "Client-456",
    customerId: "CUST-002",
    customerName: "Jane Smith",
    gameAmount: "$40.00",
    customerDeposit: "$40.00",
    gameWon: "$25.00",
    gameLost: "$15.00",
    paid: "$25.00",
    profit: "$10.00",
    loss: "$15.00",
    actions: ["View", "Edit", "Delete"],
  },
  {
    gameMachine: "Machine-03",
    location: "Gaming Hub C",
    region: "East",
    client: "Client-789",
    customerId: "CUST-003",
    customerName: "Alice Brown",
    gameAmount: "$60.00",
    customerDeposit: "$35.00",
    gameWon: "$30.00",
    gameLost: "$5.00",
    paid: "$30.00",
    profit: "$25.00",
    loss: "$5.00",
    actions: ["View", "Edit", "Delete"],
  },
  {
    gameMachine: "Machine-04",
    location: "Fun Zone D",
    region: "West",
    client: "Client-234",
    customerId: "CUST-004",
    customerName: "Bob Williams",
    gameAmount: "$30.00",
    customerDeposit: "$30.00",
    gameWon: "$10.00",
    gameLost: "$20.00",
    paid: "$10.00",
    profit: "$0.00",
    loss: "$20.00",
    actions: ["View", "Edit", "Delete"],
  },
  {
    gameMachine: "Machine-05",
    location: "Arcade City E",
    region: "Central",
    client: "Client-678",
    customerId: "CUST-005",
    customerName: "Emma Davis",
    gameAmount: "$70.00",
    customerDeposit: "$50.00",
    gameWon: "$40.00",
    gameLost: "$10.00",
    paid: "$40.00",
    profit: "$30.00",
    loss: "$10.00",
    actions: ["View", "Edit", "Delete"],
  },
];

export default function CShowMatches() {
  const [selectedRecord, setSelectedRecord] = useState(null);

  const openModal = (record) => {
    setSelectedRecord(record);
  };

  const closeModal = () => {
    setSelectedRecord(null);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center text-gray-600 text-sm mb-4">
              <FaHome className="mr-1 text-blue-500" />
              <Link to="/" className="hover:underline">Home</Link>
              <FaChevronRight className="mx-2 text-gray-400" />
              <Link to="/clients" className="hover:underline text-blue-400">Clients</Link>
              <FaChevronRight className="mx-2 text-gray-400" />
              <span className="text-green-500">Maches Summary</span>
            </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Match Sales</h2>
        <button className="bg-gray-200 px-3 py-2 rounded flex items-center gap-2 hover:bg-gray-300">
          <FaDownload /> Download All
        </button>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b font-semibold">
            <th className="py-2">Game Machine</th>
            <th className="py-2">Location</th>
            <th className="py-2">Client</th>
            <th className="py-2">Customer</th>
            {/* <th className="py-2">Game Amount</th> */}
            <th className="py-2">Game Deposit</th>
            <th className="py-2">Game Won</th>
            <th className="py-2">Game Lost</th>
            <th className="py-2">Paid</th>
            {/* <th className="py-2">Profit</th> */}
            {/* <th className="py-2">Loss</th> */}
            <th className="py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {gameTransactions.map((invoice, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-100 cursor-pointer"
              onClick={() => openModal(invoice)}
            >
              <td className="py-3">{invoice.gameMachine}</td>
              <td className="py-3">{invoice.location}</td>
              <td className="py-3">{invoice.client}</td>
              <td className="py-3">{invoice.customerName}</td>
              {/* <td className="py-3">{invoice.gameAmount}</td> */}
              <td className="py-3">{invoice.customerDeposit}</td>
              <td className="py-3">{invoice.gameWon}</td>
              <td className="py-3">{invoice.gameLost}</td>
              <td className="py-3">{invoice.paid}</td>
              {/* <td className="py-3">{invoice.profit}</td> */}
              {/* <td className="py-3">{invoice.loss}</td> */}
              <td className="py-3 text-center">
                <button className="flex text-blue-500 hover:text-blue-700">
                         <FaEye className="mr-4 ml-4 text-green-800"/>
               
                                 <FaDownload />
                               </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedRecord && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Transaction Details</h3>
              <button className="text-gray-600 hover:text-gray-900" onClick={closeModal}>
                <FaTimes />
              </button>
            </div>
            <p><strong>Game Machine:</strong> {selectedRecord.gameMachine}</p>
            <p><strong>Location:</strong> {selectedRecord.location}</p>
            <p><strong>Client:</strong> {selectedRecord.client}</p>
            <p><strong>Customer:</strong> {selectedRecord.customerName}</p>
            <p><strong>Game Amount:</strong> {selectedRecord.gameAmount}</p>
            <p><strong>Deposit:</strong> {selectedRecord.customerDeposit}</p>
            <p><strong>Won:</strong> {selectedRecord.gameWon}</p>
            <p><strong>Lost:</strong> {selectedRecord.gameLost}</p>
            <p><strong>Paid:</strong> {selectedRecord.paid}</p>
            <p><strong>Profit:</strong> {selectedRecord.profit}</p>
            <p><strong>Loss:</strong> {selectedRecord.loss}</p>
            <div className="mt-4 text-right">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
       <div className="mt-4 text-center">
        <a href="#" className="text-blue-500 hover:underline">View all </a>
      </div>
    </div>
  );
}
