import React, { useState } from "react";

const gameMachines = [
  {
    machine_id: "GM-001",
    name: "Speed Racer Pro",
    type: "Racing",
    location: "Mall Plaza",
    vendor_id: "VND-1001",
    status: "Active",
    installation_date: "2023-06-15",
    last_maintenance: "2024-01-12",
    revenue_generated: 15000,
    currency: "INR",
    trt_machine_id: "TRT-001",
    notes: "High-speed racing simulator with great engagement.",
    icon: "🏎️",
  },
  {
    machine_id: "GM-002",
    name: "Galaxy Shooter X",
    type: "Shooting",
    location: "Arcade Center",
    vendor_id: "VND-1002",
    status: "Active",
    installation_date: "2023-08-05",
    last_maintenance: "2024-03-01",
    revenue_generated: 18000,
    currency: "INR",
    trt_machine_id: "TRT-002",
    notes: "Popular shooting game among arcade players.",
    icon: "🔫",
  },
  {
    machine_id: "GM-003",
    name: "Dance Revolution X",
    type: "Music & Dance",
    location: "Client D - Gaming Zone",
    vendor_id: "VND-1004",
    status: "Active",
    installation_date: "2023-10-20",
    last_maintenance: "2024-02-10",
    revenue_generated: 22000,
    currency: "INR",
    trt_machine_id: "TRT-004",
    notes: "Highly popular among teens.",
    icon: "🕺",
  },
];

const GameMacList = () => {
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
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold">Game Machines</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 mt-4">
          {gameMachines.map((machine) => (
            <div
              key={machine.machine_id}
              className="bg-white p-3 rounded-lg shadow-md border w-[170px] h-[160px] flex flex-col justify-between"
            >
              <div className="flex items-center gap-1">
                <span className="text-base">{machine.icon}</span>
                <h3 className="text-xs font-semibold">{machine.name}</h3>
              </div>
              <p className="text-xs text-gray-500">{machine.type}</p>
              <p className="text-xs text-gray-700">
                <strong>Location:</strong> {machine.location}
              </p>
              <button
                onClick={() => openModal(machine)}
                className="mt-2 text-xs px-2 py-1 bg-blue-500 text-white rounded"
              >
                See Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedMachine && (
        <div className="fixed inset-0 flex items-center justify-center z-50 transition-opacity opacity-100">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          <div className="relative bg-white p-5 rounded-lg shadow-lg w-96 z-10 transition-transform transform scale-100">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-lg font-semibold">{selectedMachine.name}</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>
            <div className="mt-3 space-y-2 text-sm">
              <p><strong>ID:</strong> {selectedMachine.machine_id}</p>
              <p><strong>Type:</strong> {selectedMachine.type}</p>
              <p><strong>Location:</strong> {selectedMachine.location}</p>
              <p><strong>Status:</strong> {selectedMachine.status}</p>
              <p><strong>Installation Date:</strong> {selectedMachine.installation_date}</p>
              <p><strong>Last Maintenance:</strong> {selectedMachine.last_maintenance}</p>
              <p><strong>Revenue:</strong> {selectedMachine.currency} {selectedMachine.revenue_generated}</p>
              <p><strong>Vendor ID:</strong> {selectedMachine.vendor_id}</p>
              <p><strong>TRT Machine ID:</strong> {selectedMachine.trt_machine_id}</p>
              <p><strong>Notes:</strong> {selectedMachine.notes}</p>
            </div>
            <div className="mt-4 flex justify-end border-t pt-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameMacList;
