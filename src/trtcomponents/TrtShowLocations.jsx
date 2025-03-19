import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";

const statusStyles = {
  Active: "bg-green-100 text-green-700 px-2 py-1 rounded text-sm",
  Inactive: "bg-red-100 text-red-700 px-2 py-1 rounded text-sm",
  Upcoming: "bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm",
  Paid: "bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm",
  Declined: "bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm",
};

const gameMachines = [
  { id: "GM-001", location: "New York", clientId: "C-1234", clientName: "Kalyan", date: "6 Aug, 2024", status: "Active", name: "Speed Racer Pro", type: "Racing", vendor_id: "VND-1001", installation_date: "2023-06-15", last_maintenance: "2024-01-12", revenue_generated: 15000, currency: "INR", trt_machine_id: "TRT-001", notes: "High-speed racing simulator with great engagement.", icon: "🏎️" },
  { id: "GM-002", location: "Los Angeles", clientId: "C-5678", clientName: "Pratap", date: "17 Jun, 2024", status: "Inactive", name: "Galaxy Shooter X", type: "Shooting", vendor_id: "VND-1002", installation_date: "2023-08-05", last_maintenance: "2024-03-01", revenue_generated: 18000, currency: "INR", trt_machine_id: "TRT-002", notes: "Popular shooting game among arcade players.", icon: "🔫" },
];

const trtMachines = [
  { id: "TRT-001", location: "New York", clientId: "C-1234", clientName: "Kalyan", date: "28 March, 2024", status: "Active", carryingAmount: "₹1524" },
  { id: "TRT-002", location: "Los Angeles", clientId: "C-5678", clientName: "Pratap", date: "4 September, 2024", status: "Active", carryingAmount: "₹1894" },
];

export default function TrtShowLocations() {
  const [activeTab, setActiveTab] = useState("game");
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (machine) => {
    setSelectedMachine(machine);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMachine(null), 300);
  };

  return (
    <div className=" bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setActiveTab("game")}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${activeTab === "game" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
        >
          Game Machines
        </button>
        <button
          onClick={() => setActiveTab("trt")}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${activeTab === "trt" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
        >
          TRT Machines
        </button>
      </div>
      {activeTab === "game" ? (
        <TableComponent type="game" data={gameMachines} openModal={openModal} />
      ) : (
        <TableComponent type="trt" data={trtMachines} openModal={openModal} />
      )}

      {isModalOpen && selectedMachine && (
        <div className="fixed inset-0 flex items-center justify-center z-50 transition-opacity opacity-100">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-white p-5 rounded-lg shadow-lg w-96 z-10 transition-transform transform scale-100">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-lg font-semibold">{selectedMachine.name || "TRT Machine Details"}</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
            </div>
            <div className="mt-3 space-y-2 text-sm">
              <p><strong>ID:</strong> {selectedMachine.id}</p>
              {selectedMachine.type && <p><strong>Type:</strong> {selectedMachine.type}</p>}
              {selectedMachine.location && <p><strong>Location:</strong> {selectedMachine.location}</p>}
              <p><strong>Status:</strong> {selectedMachine.status}</p>
              <p><strong>Client ID/Name:</strong> {selectedMachine.clientId}/{selectedMachine.clientName}</p>
              {selectedMachine.carryingAmount && <p><strong>Carrying Amount:</strong> {selectedMachine.carryingAmount}</p>}
              {selectedMachine.notes && <p><strong>Notes:</strong> {selectedMachine.notes}</p>}
            </div>
            <div className="mt-4 flex justify-end border-t pt-3">
              <button onClick={closeModal} className="px-4 py-2 bg-red-500 text-white rounded">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TableComponent({ type, data, openModal }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{type === "game" ? "Game Machines Locations" : "TRT Locations"}</h2>
        <button className="bg-gray-200 px-3 py-2 rounded flex items-center gap-2 hover:bg-gray-300">
          <FaDownload /> Download All
        </button>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b font-semibold">
            <th className="py-2">Machine Id</th>
            <th className="py-2">Location</th>
            <th className="py-2">Client Name</th>
            <th className="py-2">Status</th>
            {type === "trt" && <th className="py-2">Carrying Amount</th>}
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="py-3">{item.id}</td>
              <td className="py-3">{item.location}</td>
              <td className="py-3">{item.clientName}</td>
              <td className="py-3"><span className={statusStyles[item.status]}>{item.status}</span></td>
              {type === "trt" && <td className="py-3">{item.carryingAmount}</td>}
              <td className="py-3">
                <button onClick={() => openModal(item)} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                  See Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
