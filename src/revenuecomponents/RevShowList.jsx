import { useState } from "react";
import { FaEdit, FaTrash, FaEnvelope, FaSort, FaEye, FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const getYesterdayDate = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split("T")[0];
};

const members = [
  {
    id: 1,
    name: "Ana Simmons",
    location: "New York, USA",
    revenue: 525,
    period: getYesterdayDate(),
    progress: 50,
    progressColor: "bg-blue-500",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Jessie Clarcon",
    location: "Los Angeles, USA",
    revenue: 326,
    period: getYesterdayDate(),
    progress: 70,
    progressColor: "bg-red-500",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Lebron Wayde",
    location: "Chicago, USA",
    revenue: 289,
    period: getYesterdayDate(),
    progress: 60,
    progressColor: "bg-green-500",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Natali Goodwin",
    location: "Houston, USA",
    revenue: 895,
    period: getYesterdayDate(),
    progress: 50,
    progressColor: "bg-yellow-500",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Kevin Leonard",
    location: "San Francisco, USA",
    revenue: 526,
    period: getYesterdayDate(),
    progress: 90,
    progressColor: "bg-purple-500",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];


const RevShowList = () => {
  const [data, setData] = useState(members);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);

  const handleViewClient = (client) => {
    setSelectedClient(client);
  };

  const handleCloseModal = () => {
    setSelectedClient(null);
  };

  return (
   <div className="">
          {/* Breadcrumbs */}
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <FaHome className="mr-1 text-blue-500" />
            <Link to="/">
            Home
            </Link>
            <FaChevronRight className="mx-2 text-gray-400" />

            <Link to="/clients">
         
            <span className="text-gray-500">Clients</span>
            </Link>
            <FaChevronRight className="mx-2 text-gray-400" />
          
            <span className=" text-orange-500">Revenue</span>
          </div>
     <div className="bg-white p-6 shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Total Revenue List</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          + New Client
        </button>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="p-3">Client Name</th>
            <th className="p-3">Period</th>
            <th className="p-3">Revenue</th>
            <th className="p-3">Progress</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((member) => (
            <tr key={member.id} className="border-b">
              <td className="p-3 flex items-center space-x-3 cursor-pointer" onClick={() => handleViewClient(member)}>
                <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.location}</p>
                </div>
              </td>
              <td className="p-3">{member.period}</td>
              <td className="p-3">${member.revenue}</td>
              <td className="p-3">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className={`h-2 rounded-full ${member.progressColor}`} style={{ width: `${member.progress}%` }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{member.progress}%</p>
              </td>
              <td className="p-3 flex space-x-3">
                <button className="text-blue-500 hover:text-blue-600 cursor-pointer" onClick={() => handleViewClient(member)}>
                  <FaEye />
                </button>
                <button className="text-green-500 hover:text-blue-600"  >
                  <FaEnvelope />
                </button>
          
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => handleDelete(member.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-2">Client Details</h2>
            <img src={selectedClient.avatar} alt={selectedClient.name} className="w-20 h-20 rounded-full mx-auto" />
            <p className="mt-3"><strong>Name:</strong> {selectedClient.name}</p>
            <p><strong>Location:</strong> {selectedClient.location}</p>
            <p><strong>Revenue:</strong> ${selectedClient.revenue}</p>
            <p><strong>Progress:</strong> {selectedClient.progress}%</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
   </div>
  );
};

export default RevShowList;
