import React, { useState } from "react";
const gameMachines = [
  {
    machine_id: "GM-001",
    name:"TRT-001",
    type:"id/trt-001",
    location: "Mall Plaza",
    region: "North",
    branch: "Branch A",
    vendor_id: "VND-1001",
    status: "Active",
    installation_date: "2023-06-15",
    last_maintenance: "2024-01-12",
    revenue_generated: 15000,
    currency: "INR",
    trt_machine_id: "TRT-001",
    notes: "High-speed racing simulator with great engagement.",
  },
  {
    machine_id: "GM-002",
    name:"TRT-001",
    type:"id/trt-001",
    location: "Arcade Center",
    region: "South",
    branch: "Branch B",
    vendor_id: "VND-1002",
    status: "Active",
    installation_date: "2023-08-05",
    last_maintenance: "2024-03-01",
    revenue_generated: 18000,
    currency: "INR",
    trt_machine_id: "TRT-002",
    notes: "Popular shooting game among arcade players.",
  },
  {
    machine_id: "GM-003",
    name:"TRT-001",
    type:"id/trt-001",
    location: "Client D - Gaming Zone",
    region: "East",
    branch: "Branch C",
    vendor_id: "VND-1004",
    status: "Active",
    installation_date: "2023-10-20",
    last_maintenance: "2024-02-10",
    revenue_generated: 22000,
    currency: "INR",
    trt_machine_id: "TRT-004",
    notes: "Highly popular among teens.",
  },
  {
    machine_id: "GM-004",
    name:"TRT-001",
    type:"id/trt-001",
    location: "Sports Complex",
    region: "West",
    branch: "Branch D",
    vendor_id: "VND-1003",
    status: "Active",
    installation_date: "2024-01-15",
    last_maintenance: "2024-03-10",
    revenue_generated: 14000,
    currency: "INR",
    trt_machine_id: "TRT-005",
    notes: "A VR-based boxing experience.",
  },
  {
    machine_id: "GM-005",
    name:"TRT-001",
    type:"id/trt-001",
    location: "Gaming Lounge",
    region: "North",
    branch: "Branch A",
    vendor_id: "VND-1005",
    status: "Inactive",
    installation_date: "2023-11-10",
    last_maintenance: "2024-02-25",
    revenue_generated: 19500,
    currency: "INR",
    trt_machine_id: "TRT-006",
    notes: "Co-op zombie shooting game with multiple levels.",
  },
  {
    machine_id: "GM-006",
    name:"TRT-001",
    type:"id/trt-001",
    location: "Entertainment Hub",
    region: "South",
    branch: "Branch E",
    vendor_id: "VND-1006",
    status: "Active",
    installation_date: "2023-09-01",
    last_maintenance: "2024-01-30",
    revenue_generated: 12500,
    currency: "INR",
    trt_machine_id: "TRT-007",
    notes: "Classic air hockey with multiplayer support.",
  },
  {
    machine_id: "GM-007",
    name:"TRT-001",
    type:"id/trt-001",
    location: "Gaming Arena",
    region: "West",
    branch: "Branch F",
    vendor_id: "VND-1007",
    status: "Active",
    installation_date: "2023-07-22",
    last_maintenance: "2024-02-15",
    revenue_generated: 23000,
    currency: "INR",
    trt_machine_id: "TRT-008",
    notes: "Battle Royale-style FPS with VR integration.",
  },
  {
    machine_id: "GM-008",
    name:"TRT-001",
    type:"id/trt-001",
    location: "Theme Park",
    region: "East",
    branch: "Branch G",
    vendor_id: "VND-1008",
    status: "Active",
    installation_date: "2023-05-10",
    last_maintenance: "2024-03-05",
    revenue_generated: 27500,
    currency: "INR",
    trt_machine_id: "TRT-009",
    notes: "Family-friendly kart racing with power-ups.",
  },
  {
    machine_id: "GM-009",
    name:"TRT-001",
    type:"id/trt-001",
    location: "Science Museum",
    region: "North",
    branch: "Branch H",
    vendor_id: "VND-1009",
    status: "Active",
    installation_date: "2023-12-01",
    last_maintenance: "2024-02-20",
    revenue_generated: 16000,
    currency: "INR",
    trt_machine_id: "TRT-010",
    notes: "VR space exploration game with interactive missions.",
  },
  {
    machine_id: "GM-010",
    name:"TRT-001",
    type:"id/trt-001",
    location: "Game Land",
    region: "South",
    branch: "Branch I",
    vendor_id: "VND-1010",
    status: "Active",
    installation_date: "2023-06-25",
    last_maintenance: "2024-01-18",
    revenue_generated: 19000,
    currency: "INR",
    trt_machine_id: "TRT-011",
    notes: "Medieval fantasy RPG with multiplayer mode.",
  },
];

const GameMacList = () => {
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [filteredMachines, setFilteredMachines] = useState(gameMachines);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState("All");
  const [activeBranch, setActiveBranch] = useState("All");

  const openModal = (machine) => {
    setSelectedMachine(machine);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMachine(null), 300);
  };

  const filterMachines = (region, branch) => {
    let filtered = gameMachines;

    if (region !== "All") {
      filtered = filtered.filter((m) => m.region === region);
    } else if (branch !== "All") {
      filtered = filtered.filter((m) => m.branch === branch);
    }

    setFilteredMachines(filtered);
  };

  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value;
    setActiveRegion(selectedRegion);
    setActiveBranch("All"); // Reset branch when region is selected
    filterMachines(selectedRegion, "All");
  };

  const handleBranchChange = (event) => {
    const selectedBranch = event.target.value;
    setActiveBranch(selectedBranch);
    setActiveRegion("All"); // Reset region when branch is selected
    filterMachines("All", selectedBranch);
  };

  const resetFilters = () => {
    setFilteredMachines(gameMachines);
    setActiveRegion("All");
    setActiveBranch("All");
  };

  const uniqueRegions = ["Regions ", ...new Set(gameMachines.map((m) => m.region))];
  const uniqueBranches = ["Branches", ...new Set(gameMachines.map((m) => m.branch))];


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-full mx-auto px-4 md:px-8">
        <div className="flex justify-center gap-4 mt-4">
          <button onClick={resetFilters} className="px-3 py-1 bg-blue-600 text-white rounded">
            All Machines
          </button>

          {activeBranch === "All" && (
            <select
              value={activeRegion}
              onChange={handleRegionChange}
              className="px-3 py-1 border rounded bg-gray-200 text-gray-800"
            >
              {uniqueRegions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          )}

          {activeRegion === "All" && (
            <select
              value={activeBranch}
              onChange={handleBranchChange}
              className="px-3 py-1 border rounded bg-gray-200 text-gray-800"
            >
              {uniqueBranches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-4">
          {filteredMachines.map((machine) => (
            <div
              key={machine.machine_id}
              className="bg-white p-3 rounded-lg shadow-md border w-[180px] h-[170px] flex flex-col justify-between"
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
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          <div className="relative bg-white p-5 rounded-lg shadow-lg w-96 z-10">
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
              <p>
                <strong>ID:</strong> {selectedMachine.machine_id}
              </p>
              <p>
                <strong>Type:</strong> {selectedMachine.type}
              </p>
              <p>
                <strong>Location:</strong> {selectedMachine.location}
              </p>
              <p>
                <strong>Status:</strong> {selectedMachine.status}
              </p>
              <p>
                <strong>Installation Date:</strong>{" "}
                {selectedMachine.installation_date}
              </p>
              <p>
                <strong>Last Maintenance:</strong>{" "}
                {selectedMachine.last_maintenance}
              </p>
              <p>
                <strong>Revenue:</strong> {selectedMachine.currency}{" "}
                {selectedMachine.revenue_generated}
              </p>
              <p>
                <strong>Vendor ID:</strong> {selectedMachine.vendor_id}
              </p>
              <p>
                <strong>TRT Machine ID:</strong> {selectedMachine.trt_machine_id}
              </p>
              <p>
                <strong>Notes:</strong> {selectedMachine.notes}
              </p>
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
