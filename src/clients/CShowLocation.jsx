import React from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const locations = [
  {
    clientImage: "https://randomuser.me/api/portraits/men/1.jpg",
    clientName: "John Doe",
    location: "New York, USA",
    address: "123 Main Street, NY 10001",
    trtMachines: 5,
  },
  {
    clientImage: "https://randomuser.me/api/portraits/women/2.jpg",
    clientName: "Emily Johnson",
    location: "Los Angeles, USA",
    address: "456 Sunset Blvd, CA 90028",
    trtMachines: 8,
  },
  {
    clientImage: "https://randomuser.me/api/portraits/men/3.jpg",
    clientName: "Michael Smith",
    location: "Chicago, USA",
    address: "789 Michigan Ave, IL 60611",
    trtMachines: 3,
  },
  {
    clientImage: "https://randomuser.me/api/portraits/women/4.jpg",
    clientName: "Sophia Martinez",
    location: "Houston, USA",
    address: "321 Bayou Road, TX 77002",
    trtMachines: 6,
  },
  {
    clientImage: "https://randomuser.me/api/portraits/men/5.jpg",
    clientName: "Daniel Brown",
    location: "Miami, USA",
    address: "654 Ocean Drive, FL 33139",
    trtMachines: 4,
  },
  {
    clientImage: "https://randomuser.me/api/portraits/women/6.jpg",
    clientName: "Olivia Wilson",
    location: "Seattle, USA",
    address: "987 Pine Street, WA 98101",
    trtMachines: 7,
  },
];

const CShowLocation = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <FaHome className="mr-1 text-blue-500" />
          <Link to="/" className="hover:underline" >
          Home
          </Link>
          {/* <a href="/" className="hover:underline">Home</a> */}
          <FaChevronRight className="mx-2 text-gray-400" />
          <Link to="/clients" className="hover:underline" >
            Clients
          </Link>
          {/* <span className="text-gray-500">Clients</span> */}
          {/* <a href="/" className="hover:underline">Home</a> */}
          <FaChevronRight className="mx-2 text-gray-400" />
          <span className="text-gray-500">Client Locations</span>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Client Locations</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">New Location</button>
        </div>
        <p className="text-gray-600 mb-6">Overview of all client locations and their TRT machines.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {locations.map((client, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <img src={client.clientImage} alt={client.clientName} className="w-12 h-12 rounded-full border border-gray-300" />
                <div>
                  <h3 className="text-lg font-semibold">{client.clientName}</h3>
                  <p className="text-sm text-gray-500">{client.location}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-2"><strong>Address:</strong> {client.address}</p>
              <p className="text-sm font-medium text-gray-900"><strong>TRT Machines:</strong> {client.trtMachines}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CShowLocation;
