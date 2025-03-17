import React, { useState } from "react";

const trtMachines = [
  {
    trt_id: "TRT-001",
    name: "TRT Vault 1",
    location: "Mall Plaza",
    status: "Active",
    vendor_id: "VND-1001",
    installed_date: "2023-06-15",
    last_maintenance: "2024-01-12",
    total_cash: 50000,
    currency: "INR",
    associated_machines: ["GM-001", "GM-002"],
    notes: "Secure transaction machine with real-time monitoring.",
    icon: "💰",
  },
  {
    trt_id: "TRT-002",
    name: "TRT SecureBox",
    location: "Arcade Center",
    status: "Active",
    vendor_id: "VND-1002",
    installed_date: "2023-08-05",
    last_maintenance: "2024-03-01",
    total_cash: 65000,
    currency: "INR",
    associated_machines: ["GM-003"],
    notes: "Advanced security features with cash deposit logs.",
    icon: "🛡️",
  },
  {
    trt_id: "TRT-003",
    name: "TRT CashSafe",
    location: "Gaming Zone",
    status: "Active",
    vendor_id: "VND-1003",
    installed_date: "2023-10-20",
    last_maintenance: "2024-02-10",
    total_cash: 72000,
    currency: "INR",
    associated_machines: ["GM-002", "GM-003"],
    notes: "Monitors and records all transactions in real-time.",
    icon: "🏦",
  },
];

const TRTMacList = () => {
  const [selectedTRT, setSelectedTRT] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (trt) => {
    setSelectedTRT(trt);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTRT(null), 300);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold">TRT Machines</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 mt-4">
          {trtMachines.map((trt) => (
            <div
              key={trt.trt_id}
              className="bg-white p-3 rounded-lg shadow-md border w-[170px] h-[160px] flex flex-col justify-between"
            >
              <div className="flex items-center gap-1">
                <span className="text-base">{trt.icon}</span>
                <h3 className="text-xs font-semibold">{trt.name}</h3>
              </div>
              <p className="text-xs text-gray-500">{trt.location}</p>
              <p className="text-xs text-gray-700">
                <strong>Status:</strong> {trt.status}
              </p>
              <button
                onClick={() => openModal(trt)}
                className="mt-2 text-xs px-2 py-1 bg-blue-500 text-white rounded"
              >
                See Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedTRT && (
        <div className="fixed inset-0 flex items-center justify-center z-50 transition-opacity opacity-100">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          <div className="relative bg-white p-5 rounded-lg shadow-lg w-96 z-10 transition-transform transform scale-100">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-lg font-semibold">{selectedTRT.name}</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>
            <div className="mt-3 space-y-2 text-sm">
              <p><strong>ID:</strong> {selectedTRT.trt_id}</p>
              <p><strong>Location:</strong> {selectedTRT.location}</p>
              <p><strong>Status:</strong> {selectedTRT.status}</p>
              <p><strong>Installed Date:</strong> {selectedTRT.installed_date}</p>
              <p><strong>Last Maintenance:</strong> {selectedTRT.last_maintenance}</p>
              <p><strong>Total Cash:</strong> {selectedTRT.currency} {selectedTRT.total_cash}</p>
              <p><strong>Vendor ID:</strong> {selectedTRT.vendor_id}</p>
              <p><strong>Associated Machines:</strong> {selectedTRT.associated_machines.join(", ")}</p>
              <p><strong>Notes:</strong> {selectedTRT.notes}</p>
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

export default TRTMacList;
