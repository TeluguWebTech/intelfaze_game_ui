import React, { useState } from "react";
import { FaHome, FaChevronRight, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const locations = [
  {
    clientImage: "https://randomuser.me/api/portraits/men/1.jpg",
    clientName: "John Doe",
    location: "New York, USA",
    address: "123 Main Street, NY 10001",
    trtMachines: 2,
    gameMachines: 10,
    type: "branch",
  },
  {
    clientImage: "https://randomuser.me/api/portraits/women/2.jpg",
    clientName: "Emily Johnson",
    location: "Los Angeles, USA",
    address: "456 Sunset Blvd, CA 90028",
    trtMachines: 1,
    gameMachines: 15,
    type: "region",
  },
  {
    clientImage: "https://randomuser.me/api/portraits/men/3.jpg",
    clientName: "Michael Smith",
    location: "Chicago, USA",
    address: "789 Michigan Ave, IL 60611",
    trtMachines: 2,
    gameMachines: 8,
    type: "branch",
  },
  {
    clientImage: "https://randomuser.me/api/portraits/women/4.jpg",
    clientName: "Sophia Martinez",
    location: "Houston, USA",
    address: "321 Bayou Road, TX 77002",
    trtMachines: 1,
    gameMachines: 12,
    type: "region",
  },
  {
    clientImage: "https://randomuser.me/api/portraits/men/5.jpg",
    clientName: "Daniel Brown",
    location: "Miami, USA",
    address: "654 Ocean Drive, FL 33139",
    trtMachines: 2,
    gameMachines: 7,
    type: "branch",
  },
  {
    clientImage: "https://randomuser.me/api/portraits/women/6.jpg",
    clientName: "Olivia Wilson",
    location: "Seattle, USA",
    address: "987 Pine Street, WA 98101",
    trtMachines: 1,
    gameMachines: 9,
    type: "region",
  },
  {
    clientImage: "https://randomuser.me/api/portraits/men/7.jpg",
    clientName: "William Taylor",
    location: "Denver, USA",
    address: "1590 Rocky Road, CO 80202",
    trtMachines: 2,
    gameMachines: 6,
    type: "branch",
  },
  {
    clientImage: "https://randomuser.me/api/portraits/women/8.jpg",
    clientName: "Ava Anderson",
    location: "San Francisco, USA",
    address: "202 Golden Gate Ave, CA 94102",
    trtMachines: 1,
    gameMachines: 14,
    type: "region",
  },
  {
    clientImage: "https://randomuser.me/api/portraits/men/9.jpg",
    clientName: "James White",
    location: "Boston, USA",
    address: "700 Harvard St, MA 02134",
    trtMachines: 2,
    gameMachines: 5,
    type: "branch",
  },
  {
    clientImage: "https://randomuser.me/api/portraits/women/10.jpg",
    clientName: "Sophia Lee",
    location: "Dallas, USA",
    address: "876 Lone Star Blvd, TX 75201",
    trtMachines: 1,
    gameMachines: 11,
    type: "region",
  },
  {
    clientImage: "https://randomuser.me/api/portraits/men/11.jpg",
    clientName: "Alexander Harris",
    location: "Atlanta, USA",
    address: "990 Peachtree St, GA 30303",
    trtMachines: 2,
    gameMachines: 9,
    type: "branch",
  },
  {
    clientImage: "https://randomuser.me/api/portraits/women/12.jpg",
    clientName: "Mia Thompson",
    location: "Las Vegas, USA",
    address: "1000 Casino Way, NV 89109",
    trtMachines: 1,
    gameMachines: 13,
    type: "region",
  },
  {
    clientImage: "https://randomuser.me/api/portraits/men/13.jpg",
    clientName: "David Moore",
    location: "Philadelphia, USA",
    address: "405 Liberty St, PA 19106",
    trtMachines: 2,
    gameMachines: 6,
    type: "branch",
  },
  {
    clientImage: "https://randomuser.me/api/portraits/women/14.jpg",
    clientName: "Emma Davis",
    location: "Phoenix, USA",
    address: "300 Desert Drive, AZ 85001",
    trtMachines: 1,
    gameMachines: 8,
    type: "region",
  },
  {
    clientImage: "https://randomuser.me/api/portraits/men/15.jpg",
    clientName: "Henry Clark",
    location: "Austin, USA",
    address: "750 Riverwalk St, TX 78701",
    trtMachines: 2,
    gameMachines: 7,
    type: "branch",
  },
];

const CShowLocation = () => {
  const [filter, setFilter] = useState("all");
  const [selectedClient, setSelectedClient] = useState(null);

  // Filter logic
  const filteredLocations =
    filter === "all"
      ? locations
      : locations.filter((loc) => loc.type === filter);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Breadcrumbs */}
      <div className="flex items-center text-gray-600 text-sm mb-4">
        <FaHome className="mr-1 text-blue-500" />
        <Link to="/" className="hover:underline">Home</Link>
        <FaChevronRight className="mx-2 text-gray-400" />
        <Link to="/clients" className="hover:underline">Clients</Link>
        <FaChevronRight className="mx-2 text-gray-400" />
        <span className="text-gray-500">Client Locations</span>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Client Locations</h2>
        <div className="flex gap-4">
          {["all", "branch", "region"].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded-md transition ${
                filter === type
                  ? "bg-blue-700 text-white"
                  : "border border-gray-500 text-black hover:bg-blue-700"
              }`}
              onClick={() => setFilter(type)}
            >
              {type === "all" ? "All" : type.charAt(0).toUpperCase() + type.slice(1) + "es"}
            </button>
          ))}
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2">
  <FaPlus /> New Location
</button>

      </div>

      <p className="text-gray-600 mb-6">Overview of all client locations and their Machines.</p>

      {/* Locations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredLocations.map((client, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200 cursor-pointer"
            onClick={() => setSelectedClient(client)}
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={client.clientImage}
                alt={client.clientName}
                className="w-12 h-12 rounded-full border border-gray-300"
              />
              <div>
                <h3 className="text-lg font-semibold">{client.clientName}</h3>
                <p className="text-sm text-gray-500">{client.location}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Address:</strong> {client.address}
            </p>
            <p className="text-sm font-medium text-gray-900">
              <strong>TRT Machines:</strong> {client.trtMachines}
            </p>
            <p className="text-sm font-medium text-gray-900">
              <strong>Game Machines:</strong> {client.gameMachines}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-2">{selectedClient.clientName}</h2>
            <img
              src={selectedClient.clientImage}
              alt={selectedClient.clientName}
              className="w-20 h-20 rounded-full mx-auto border border-gray-300 mb-4"
            />
            <p className="text-gray-700"><strong>Location:</strong> {selectedClient.location}</p>
            <p className="text-gray-700"><strong>Address:</strong> {selectedClient.address}</p>
            <p className="text-gray-700"><strong>TRT Machines:</strong> {selectedClient.trtMachines}</p>
            <p className="text-gray-700"><strong>Game Machines:</strong> {selectedClient.gameMachines}</p>
            <button 
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md w-full"
              onClick={() => setSelectedClient(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CShowLocation;
