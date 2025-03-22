import React, { useState, useEffect } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
const getYesterdayDate = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split("T")[0];
};

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

const initialSalesByTRT = [
  { trtId: "TRT-001", period: getYesterdayDate(), location: "Baku", client: "ABC Gaming Center", deposits: "$500", payments: "$250", carryingAmount: "$250" },
  { trtId: "TRT-002", period: getYesterdayDate(), location: "Ganja", client: "XYZ Entertainment", deposits: "$700", payments: "$350", carryingAmount: "$350" },
  { trtId: "TRT-003", period: getYesterdayDate(), location: "Sumqayit", client: "GameZone Hub", deposits: "$600", payments: "$400", carryingAmount: "$200" },
  { trtId: "TRT-004", period: getYesterdayDate(), location: "Shaki", client: "Royal Gaming", deposits: "$800", payments: "$500", carryingAmount: "$300" },
  { trtId: "TRT-005", period: getYesterdayDate(), location: "Lankaran", client: "TopPlay Club", deposits: "$550", payments: "$250", carryingAmount: "$300" },
  { trtId: "TRT-006", period: getYesterdayDate(), location: "Mingachevir", client: "FunWorld", deposits: "$900", payments: "$600", carryingAmount: "$300" },
  { trtId: "TRT-007", period: getYesterdayDate(), location: "Gabala", client: "GameFest Arena", deposits: "$400", payments: "$200", carryingAmount: "$200" },
  { trtId: "TRT-008", period: getYesterdayDate(), location: "Shamakhi", client: "TurboPlay Zone", deposits: "$750", payments: "$500", carryingAmount: "$250" },
  { trtId: "TRT-009", period: getYesterdayDate(), location: "Zagatala", client: "HyperGames", deposits: "$850", payments: "$600", carryingAmount: "$250" },
  { trtId: "TRT-010", period: getYesterdayDate(), location: "Nakhchivan", client: "Elite Gaming Club", deposits: "$1000", payments: "$700", carryingAmount: "$300" },
];

const initialSalesByMatches = [
  { gameMachineId: "GM-001", period: "March 2025", location: "Baku", client: "Client A", noOfGames: 120, revenue: "2500 AZN" },
  { gameMachineId: "GM-002", period: "March 2025", location: "Ganja", client: "Client B", noOfGames: 80, revenue: "1800 AZN" },
  { gameMachineId: "GM-003", period: "March 2025", location: "Sumqayit", client: "Client C", noOfGames: 150, revenue: "3000 AZN" },
  { gameMachineId: "GM-004", period: "March 2025", location: "Shaki", client: "Client D", noOfGames: 90, revenue: "2000 AZN" },
  { gameMachineId: "GM-005", period: "March 2025", location: "Lankaran", client: "Client E", noOfGames: 200, revenue: "5000 AZN" },
  { gameMachineId: "GM-006", period: "March 2025", location: "Mingachevir", client: "Client F", noOfGames: 100, revenue: "2200 AZN" },
  { gameMachineId: "GM-007", period: "March 2025", location: "Nakhchivan", client: "Client G", noOfGames: 130, revenue: "2700 AZN" },
  { gameMachineId: "GM-008", period: "March 2025", location: "Shirvan", client: "Client H", noOfGames: 70, revenue: "1500 AZN" },
  { gameMachineId: "GM-009", period: "March 2025", location: "Gabala", client: "Client I", noOfGames: 180, revenue: "4000 AZN" },
  { gameMachineId: "GM-010", period: "March 2025", location: "Zagatala", client: "Client J", noOfGames: 110, revenue: "2300 AZN" },
];

const locations = [
  { location: "New York Plaza", client: "Client A", trtMachines: 10, gameMachines: 50, actions: <FaEye /> },
  { location: "Los Angeles Center", client: "Client B", trtMachines: 8, gameMachines: 40, actions: <FaEye />},
  { location: "Chicago Arcade", client: "Client C", trtMachines: 12, gameMachines: 55, actions: <FaEye /> },
  { location: "Houston Mall", client: "Client D", trtMachines: 15, gameMachines: 70, actions: <FaEye /> },
  { location: "Phoenix Plaza", client: "Client E", trtMachines: 7, gameMachines: 35, actions: <FaEye /> },
  { location: "Philadelphia Park", client: "Client F", trtMachines: 9, gameMachines: 45, actions: <FaEye /> },
  { location: "San Antonio Arcade", client: "Client G", trtMachines: 11, gameMachines: 60, actions: <FaEye /> },
  { location: "San Diego Tower", client: "Client H", trtMachines: 6, gameMachines: 30, actions: <FaEye /> },
  { location: "Dallas Square", client: "Client I", trtMachines: 13, gameMachines: 65, actions: <FaEye /> },
  { location: "San Jose Mall", client: "Client J", trtMachines: 5, gameMachines: 25, actions: <FaEye /> },
];

const initialSalesByCommission = [
  { vendor: "Vendor A",period:getYesterdayDate(), commission: "15%", earnings: "NA", paid:"NA", pending:"NA"  },
  { vendor: "Vendor B",period:getYesterdayDate(), commission: "12%", earnings: "NA", paid:"NA", pending:"NA"  },
  { vendor: "Vendor C",period:getYesterdayDate(), commission: "10%", earnings: "NA", paid:"NA", pending:"NA"  },
  { vendor: "Vendor D",period:getYesterdayDate(), commission: "18%", earnings: "NA", paid:"NA", pending:"NA"  },
  { vendor: "Vendor E",period:getYesterdayDate(), commission: "14%", earnings: "NA", paid:"NA", pending:"NA"  },
  { vendor: "Vendor F",period:getYesterdayDate(), commission: "16%", earnings: "NA", paid:"NA", pending:"NA"  },
  { vendor: "Vendor G",period:getYesterdayDate(), commission: "11%", earnings: "NA", paid:"NA", pending:"NA"  },
  { vendor: "Vendor H",period:getYesterdayDate(), commission: "13%", earnings: "NA", paid:"NA", pending:"NA"  },
  { vendor: "Vendor I",period:getYesterdayDate(), commission: "17%", earnings: "NA", paid:"NA", pending:"NA"  },
  { vendor: "Vendor J",period:getYesterdayDate(), commission: "19%", earnings: "NA", paid:"NA", pending:"NA"  },
];

const services = [
  { service: "TRT Machine Setup", bookings: 150, rating: "4.8/5" },
  { service: "Cash Deposit Processing", bookings: 120, rating: "4.7/5" },
  { service: "Machine Maintenance", bookings: 100, rating: "4.6/5" },
  { service: "Transaction Monitoring", bookings: 130, rating: "4.9/5" },
  { service: "Revenue Reconciliation", bookings: 110, rating: "4.7/5" },
  { service: "Error Handling & Support", bookings: 90, rating: "4.5/5" },
  { service: "TRT Machine Installation", bookings: 140, rating: "4.8/5" },
  { service: "Client Dashboard Assistance", bookings: 95, rating: "4.6/5" },
  { service: "Employee Cash Collection", bookings: 80, rating: "4.4/5" },
  { service: "Machine Software Update", bookings: 105, rating: "4.7/5" },
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
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedDate, setSelectedDate] = useState(getYesterdayDate());
  const [salesByTRT, setSalesByTRT] = useState(initialSalesByTRT);
  const [salesByMatches, setSalesByMatches] = useState(initialSalesByMatches);
  const [salesByCommission, setSalesByCommission] = useState(initialSalesByCommission);

  const recordsPerPage = 5;

  useEffect(() => {
    // Update the period in salesByTRT and salesByMatches when the selected date changes
    const updatedSalesByTRT = initialSalesByTRT.map((sale) => ({
      ...sale,
      period: selectedDate,
    }));
    const updatedSalesByMatches = initialSalesByMatches.map((sale) => ({
      ...sale,
      period: selectedDate,
    }));
    const updatedSalesByCommission = initialSalesByCommission.map((sale) => ({
      ...sale,
      period: selectedDate,
    }));

    setSalesByTRT(updatedSalesByTRT);
    setSalesByMatches(updatedSalesByMatches);
    setSalesByCommission(updatedSalesByCommission);
  }, [selectedDate]);

  const handleViewClient = (client) => {
    setSelectedClient(client);
  };

  const handleCloseModal = () => {
    setSelectedClient(null);
  };

  const tables = {
    "All clients": {
      data: allClients,
      columns: ["Profile", "Client ID", "Name", "Location", "Contact", "No. of TRT's", "Action"],
    },
    "TRT Machines": { data: salesByTRT, columns: ["Trt Machine Id", "Period", "Location", "Client", "Deposits", "Withdrawls", "Carrying Amount"] },
    "Game Machines": { data: salesByMatches, columns: ["Game Machine ID", "Period", "Location", "Client", "No. of Matches", "Revenue"] },
    "Locations": { data: locations, columns: ["Locations", "Client", "TRT Machines", "Game Machines", "Actions"] },
    "Commissions": { data: salesByCommission, columns: ["Vendor", "Period", "Commission", "Earnings", "Paid", "Pending"] },
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

  // Sample table data for the modal
  const clientDetailsTable = [
    { metric: "Total Revenue", value: "25,000 AZN" },
    { metric: "Total TRT's", value: selectedClient?.trts },
    { metric: "Active Since", value: "2023-01-01" },
    { metric: "Last Transaction", value: "2023-10-01" },
    { metric: "Total Deposits", value: "$10,000" },
    { metric: "Total Withdrawals", value: "$5,000" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
       <div className="flex flex-wrap justify-center gap-2 mb-4">
         <input
           className="border border-gray-800 p-2 rounded"
           type="date"
           value={selectedDate}
           onChange={(e) => setSelectedDate(e.target.value)}
         />
         {Object.keys(tables).map((type) => (
           <button
             key={type}
             onClick={() => {
               setActiveTable(type);
               setCurrentPage(1);
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
                            <td className="p-3 cursor-pointer"  onClick={() => handleViewClient(row)}><img src={row.image} alt={row.name} className="w-10 h-10 rounded-full" /></td>
                            <td className="p-3 text-green-950 cursor-pointer"  onClick={() => handleViewClient(row)}>{row.id}</td>
                            <td className="p-3 text-gray-700 cursor-pointer"  onClick={() => handleViewClient(row)}>{row.name}</td>
                            <td className="p-3 text-gray-700 cursor-pointer"  onClick={() => handleViewClient(row)}>{row.location}</td>
                            <td className="p-3 text-gray-700 cursor-pointer"  onClick={() => handleViewClient(row)}>{row.contact}</td>
                            <td className="p-3 text-gray-700 cursor-pointer"  onClick={() => handleViewClient(row)}>{row.trts}</td>
                            <td className="p-3 space-x-2">
                              <button className="text-blue-500 hover:text-blue-700" onClick={() => handleViewClient(row)}>
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

      {/* Modal for Client Details */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-6xl"> {/* Wider modal */}
            <h2 className="text-xl font-semibold mb-4">Client Details</h2>
            <div className="flex items-center mb-6">
              <img
                src={selectedClient.image}
                alt={selectedClient.name}
                className="w-20 h-20 rounded-full mr-4"
              />
              <div>
                <p className="text-lg font-semibold">{selectedClient.name}</p>
                <p className="text-sm text-gray-600">{selectedClient.location}</p>
                <p className="text-sm text-gray-600">{selectedClient.contact}</p>
              </div>
            </div>

            {/* Table inside the modal */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-3 text-left">Metric</th>
                    <th className="p-3 text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {clientDetailsTable.map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-3 text-gray-700">{row.metric}</td>
                      <td className="p-3 text-gray-700">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md w-full hover:bg-red-600"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CAccordian;