import React, { useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";

// Sample data for Client Contacts
const allClients = [
  { id: "CL-001", name: "John Doe", location: "New York, NY", contact: "+1 212-555-1234", trts: 5, image: "https://i.pravatar.cc/50?img=1" },
  { id: "CL-002", name: "Jane Smith", location: "Los Angeles, CA", contact: "+1 310-555-5678", trts: 3, image: "https://i.pravatar.cc/50?img=2" },
  { id: "CL-003", name: "Alice Johnson", location: "Chicago, IL", contact: "+1 312-555-9876", trts: 7, image: "https://i.pravatar.cc/50?img=3" },
  { id: "CL-004", name: "Bob Brown", location: "Houston, TX", contact: "+1 713-555-6543", trts: 2, image: "https://i.pravatar.cc/50?img=4" },
  { id: "CL-005", name: "Charlie Davis", location: "Miami, FL", contact: "+1 305-555-7890", trts: 4, image: "https://i.pravatar.cc/50?img=5" },
];

// Sample data for Sales Contacts
const salesContacts = [
  { id: "SL-001", name: "Michael Scott", location: "Scranton, PA", contact: "+1 570-555-1010", sales: 10, image: "https://i.pravatar.cc/50?img=6" },
  { id: "SL-002", name: "Pam Beesly", location: "San Francisco, CA", contact: "+1 415-555-2020", sales: 8, image: "https://i.pravatar.cc/50?img=7" },
  { id: "SL-003", name: "Jim Halpert", location: "Seattle, WA", contact: "+1 206-555-3030", sales: 12, image: "https://i.pravatar.cc/50?img=8" },
  { id: "SL-004", name: "Dwight Schrute", location: "Austin, TX", contact: "+1 512-555-4040", sales: 15, image: "https://i.pravatar.cc/50?img=9" },
  { id: "SL-005", name: "Angela Martin", location: "Denver, CO", contact: "+1 303-555-5050", sales: 9, image: "https://i.pravatar.cc/50?img=10" },
];

// Sample data for Employee Contacts
const employeeContacts = [
  { id: "EM-001", name: "Kevin Malone", location: "Boston, MA", contact: "+1 617-555-6060", role: "Developer", image: "https://i.pravatar.cc/50?img=11" },
  { id: "EM-002", name: "Stanley Hudson", location: "Atlanta, GA", contact: "+1 404-555-7070", role: "Manager", image: "https://i.pravatar.cc/50?img=12" },
  { id: "EM-003", name: "Phyllis Vance", location: "Las Vegas, NV", contact: "+1 702-555-8080", role: "Designer", image: "https://i.pravatar.cc/50?img=13" },
  { id: "EM-004", name: "Ryan Howard", location: "Phoenix, AZ", contact: "+1 602-555-9090", role: "Intern", image: "https://i.pravatar.cc/50?img=14" },
  { id: "EM-005", name: "Kelly Kapoor", location: "Orlando, FL", contact: "+1 407-555-1111", role: "Marketing", image: "https://i.pravatar.cc/50?img=15" },
];

// Sample data for Tech Contacts
const techContacts = [
  { id: "TC-001", name: "Andy Bernard", location: "San Diego, CA", contact: "+1 619-555-1212", expertise: "Networking", image: "https://i.pravatar.cc/50?img=16" },
  { id: "TC-002", name: "Oscar Martinez", location: "Dallas, TX", contact: "+1 214-555-1313", expertise: "Security", image: "https://i.pravatar.cc/50?img=17" },
  { id: "TC-003", name: "Creed Bratton", location: "Philadelphia, PA", contact: "+1 215-555-1414", expertise: "Cloud", image: "https://i.pravatar.cc/50?img=18" },
  { id: "TC-004", name: "Darryl Philbin", location: "Charlotte, NC", contact: "+1 704-555-1515", expertise: "DevOps", image: "https://i.pravatar.cc/50?img=19" },
  { id: "TC-005", name: "Toby Flenderson", location: "Detroit, MI", contact: "+1 313-555-1616", expertise: "AI/ML", image: "https://i.pravatar.cc/50?img=20" },
];


const ContactAccordian = () => {
  const [activeTable, setActiveTable] = useState("Client Contacts");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5; // Number of records to display per page

  const tables = {
    "Client Contacts": {
      data: allClients,
      columns: ["Profile", "Client ID", "Name", "Location", "Contact", "No. of TRT's", "Action"],
    },
    "Sales Executives": {
      data: salesContacts,
      columns: ["Profile", "Sales ID", "Name", "Location", "Contact", "Total Sales", "Action"],
    },
    "Employees": {
      data: employeeContacts,
      columns: ["Profile", "Employee ID", "Name", "Location", "Contact", "Role", "Action"],
    },
    "Technicians": {
      data: techContacts,
      columns: ["Profile", "Tech ID", "Name", "Location", "Contact", "Expertise", "Action"],
    },
  };

  // Pagination logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = tables[activeTable].data.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(tables[activeTable].data.length / recordsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
<div className="flex flex-wrap items-center gap-2 mb-4">
  {/* Button Group - Centered */}
  <div className="flex flex-wrap justify-center gap-2 flex-grow">
    {Object.keys(tables).map((type) => (
      <button
        key={type}
        onClick={() => {
          setActiveTable(type);
          setCurrentPage(1); // Reset to the first page when switching tables
        }}
        className={`px-4 py-2 rounded-lg transition-all duration-300 min-w-[140px] text-center ${
          activeTable === type ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        {type}
      </button>
    ))}
  </div>

  {/* Search Input - Pushed to the Right */}
  <input
    type="text"
    placeholder="Search"
    className="border border-gray-800 px-4 py-2 rounded-lg"
  />
</div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden pr-8 pl-8">
          <thead>
            <tr className="bg-orange-500 text-white text-left">
              {tables[activeTable].columns.map((col, index) => (
                <th key={index} className="p-3 font-semibold">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b hover:bg-gray-50 transition-all">
                <td className="p-3">
                  <img src={row.image} alt={row.name} className="w-10 h-10 rounded-full" />
                </td>
                <td className="p-3 text-green-950">{row.id}</td>
                <td className="p-3 text-gray-700">{row.name}</td>
                <td className="p-3 text-gray-700">{row.location}</td>
                <td className="p-3 text-gray-700">{row.contact}</td>
                <td className="p-3 text-gray-700">
                  {activeTable === "Client Contacts" && row.trts}
                  {activeTable === "Sales Executives" && row.sales}
                  {activeTable === "Employees" && row.role}
                  {activeTable === "Technicians" && row.expertise}
                </td>
                <td className="p-3 space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaEye />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ContactAccordian;