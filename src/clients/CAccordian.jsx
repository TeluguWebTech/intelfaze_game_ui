import React, { useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";

// Sample data with more records
const allClients = [
  { id: "CL-001", name: "John Doe", location: "Baku", contact: "+994 50 123 45 67", trts: 5, image: "https://i.pravatar.cc/50?img=1" },
  { id: "CL-002", name: "Jane Smith", location: "Ganja", contact: "+994 55 987 65 43", trts: 3, image: "https://i.pravatar.cc/50?img=2" },
  { id: "CL-003", name: "Alice Johnson", location: "Sumqayit", contact: "+994 70 555 44 33", trts: 7, image: "https://i.pravatar.cc/50?img=3" },
  { id: "CL-004", name: "Bob Brown", location: "Baku", contact: "+994 51 222 33 44", trts: 2, image: "https://i.pravatar.cc/50?img=4" },
  { id: "CL-005", name: "Charlie Davis", location: "Ganja", contact: "+994 55 777 88 99", trts: 4, image: "https://i.pravatar.cc/50?img=5" },
  { id: "CL-006", name: "Eve White", location: "Baku", contact: "+994 50 999 88 77", trts: 6, image: "https://i.pravatar.cc/50?img=6" },
  { id: "CL-007", name: "Frank Wilson", location: "Sumqayit", contact: "+994 70 111 22 33", trts: 1, image: "https://i.pravatar.cc/50?img=7" },
  { id: "CL-008", name: "Grace Lee", location: "Baku", contact: "+994 51 444 55 66", trts: 8, image: "https://i.pravatar.cc/50?img=8" },
  { id: "CL-009", name: "Henry Moore", location: "Ganja", contact: "+994 55 666 77 88", trts: 3, image: "https://i.pravatar.cc/50?img=9" },
  { id: "CL-010", name: "Ivy Taylor", location: "Baku", contact: "+994 50 888 99 00", trts: 5, image: "https://i.pravatar.cc/50?img=10" },
];

const salesByTRT = [
  { transaction: "TRT-001", amount: "100 AZN", date: "27.11.2023", status: "100%" },
  { transaction: "TRT-002", amount: "200 AZN", date: "28.11.2023", status: "50%" },
  { transaction: "TRT-003", amount: "150 AZN", date: "29.11.2023", status: "75%" },
  { transaction: "TRT-004", amount: "300 AZN", date: "30.11.2023", status: "100%" },
  { transaction: "TRT-005", amount: "250 AZN", date: "01.12.2023", status: "50%" },
  { transaction: "TRT-006", amount: "400 AZN", date: "02.12.2023", status: "100%" },
  { transaction: "TRT-007", amount: "350 AZN", date: "03.12.2023", status: "75%" },
  { transaction: "TRT-008", amount: "500 AZN", date: "04.12.2023", status: "100%" },
  { transaction: "TRT-009", amount: "450 AZN", date: "05.12.2023", status: "50%" },
  { transaction: "TRT-010", amount: "600 AZN", date: "06.12.2023", status: "100%" },
];

const salesByMatches = [
  { match: "Game A", players: 120, revenue: "2500 AZN" },
  { match: "Game B", players: 80, revenue: "1800 AZN" },
  { match: "Game C", players: 150, revenue: "3000 AZN" },
  { match: "Game D", players: 90, revenue: "2000 AZN" },
  { match: "Game E", players: 200, revenue: "5000 AZN" },
  { match: "Game F", players: 100, revenue: "2200 AZN" },
  { match: "Game G", players: 130, revenue: "2700 AZN" },
  { match: "Game H", players: 70, revenue: "1500 AZN" },
  { match: "Game I", players: 180, revenue: "4000 AZN" },
  { match: "Game J", players: 110, revenue: "2300 AZN" },
];

const locations = [
  { location: "Baku Mall", revenue: "5000 AZN", activeUsers: 320 },
  { location: "Ganja City", revenue: "3000 AZN", activeUsers: 210 },
  { location: "Sumqayit Plaza", revenue: "4000 AZN", activeUsers: 150 },
  { location: "Baku Tower", revenue: "6000 AZN", activeUsers: 400 },
  { location: "Ganja Park", revenue: "2500 AZN", activeUsers: 180 },
  { location: "Sumqayit Center", revenue: "3500 AZN", activeUsers: 220 },
  { location: "Baku Square", revenue: "4500 AZN", activeUsers: 300 },
  { location: "Ganja Mall", revenue: "2000 AZN", activeUsers: 120 },
  { location: "Sumqayit Tower", revenue: "5500 AZN", activeUsers: 350 },
  { location: "Baku Park", revenue: "1500 AZN", activeUsers: 100 },
];

const commissions = [
  { vendor: "Vendor A", commission: "15%", earnings: "500 AZN" },
  { vendor: "Vendor B", commission: "12%", earnings: "400 AZN" },
  { vendor: "Vendor C", commission: "10%", earnings: "300 AZN" },
  { vendor: "Vendor D", commission: "18%", earnings: "600 AZN" },
  { vendor: "Vendor E", commission: "14%", earnings: "450 AZN" },
  { vendor: "Vendor F", commission: "16%", earnings: "550 AZN" },
  { vendor: "Vendor G", commission: "11%", earnings: "350 AZN" },
  { vendor: "Vendor H", commission: "13%", earnings: "420 AZN" },
  { vendor: "Vendor I", commission: "17%", earnings: "580 AZN" },
  { vendor: "Vendor J", commission: "19%", earnings: "700 AZN" },
];

const services = [
  { service: "Haircut", bookings: 120, rating: "4.5/5" },
  { service: "Massage", bookings: 80, rating: "4.7/5" },
  { service: "Manicure", bookings: 90, rating: "4.6/5" },
  { service: "Pedicure", bookings: 70, rating: "4.4/5" },
  { service: "Facial", bookings: 100, rating: "4.8/5" },
  { service: "Waxing", bookings: 60, rating: "4.3/5" },
  { service: "Spa", bookings: 110, rating: "4.9/5" },
  { service: "Makeup", bookings: 85, rating: "4.7/5" },
  { service: "Hair Color", bookings: 95, rating: "4.6/5" },
  { service: "Nail Art", bookings: 75, rating: "4.5/5" },
];

const analytics = [
  { metric: "Total Revenue", value: "25,000 AZN" },
  { metric: "Total Clients", value: 350 },
  { metric: "Active Users", value: 1200 },
  { metric: "Total Bookings", value: 500 },
  { metric: "Total Services", value: 10 },
  { metric: "Total Vendors", value: 15 },
  { metric: "Total Locations", value: 5 },
  { metric: "Total Matches", value: 20 },
  { metric: "Total TRTs", value: 50 },
  { metric: "Total Earnings", value: "100,000 AZN" },
];

const CAccordian = () => {
  const [activeTable, setActiveTable] = useState("All clients");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5; // Number of records to display per page

  const tables = {
    "All clients": {
      data: allClients,
      columns: ["Profile", "Client ID", "Name", "Location", "Contact", "No. of TRT's", "Action"],
    },
    "Sales by TRT": { data: salesByTRT, columns: ["Transaction", "Amount", "Date", "Status"] },
    "Sales by Matches": { data: salesByMatches, columns: ["Match", "Players", "Revenue"] },
    "Locations": { data: locations, columns: ["Location", "Revenue", "Active Users"] },
    "Commissions": { data: commissions, columns: ["Vendor", "Commission", "Earnings"] },
    "Services": { data: services, columns: ["Service", "Bookings", "Rating"] },
    "Analytics": { data: analytics, columns: ["Metric", "Value"] },
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
      <div className="flex flex-wrap justify-center gap-2 mb-4">
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
                {activeTable === "All clients" ? (
                  <>
                    <td className="p-3"><img src={row.image} alt={row.name} className="w-10 h-10 rounded-full" /></td>
                    <td className="p-3 text-green-950">{row.id}</td>
                    <td className="p-3 text-gray-700">{row.name}</td>
                    <td className="p-3 text-gray-700">{row.location}</td>
                    <td className="p-3 text-gray-700">{row.contact}</td>
                    <td className="p-3 text-gray-700">{row.trts}</td>
                    <td className="p-3 space-x-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <FaEye />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </td>
                  </>
                ) : (
                  Object.values(row).map((value, colIndex) => (
                    <td key={colIndex} className="p-3 text-gray-700">{value}</td>
                  ))
                )}
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

export default CAccordian;