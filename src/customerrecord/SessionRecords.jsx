import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaEnvelope, FaSort, FaEye, FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const getYesterdayDate = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split("T")[0];
};

// Sample data with more records

const winnerData = [
    {
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      profileId: "PLR001",
      date: "2025-03-18",
      customerName: "John Doe",
      contact: "+91 98765 43210",
        region:"North",
      gameStation: "Arcade X",
      gameAmount: "₹500",
      winningAmount: "₹1200",
      action: "View",
    },
    {
      image: "https://randomuser.me/api/portraits/women/19.jpg",
      profileId: "PLR002",
      date: "2025-03-17",
      customerName: "Emily Smith",
      contact: "+91 81234 56789",
        region:"North",
      gameStation: "Game Zone",
      gameAmount: "₹700",
      winningAmount: "₹0",
      action: "View",
    },
    {
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      profileId: "PLR003",
      date: "2025-03-16",
      customerName: "Michael Johnson",
      contact: "+91 99876 54321",
        region:"South",
      gameStation: "Cyber Arena",
      gameAmount: "₹400",
      winningAmount: "₹500",
      action: "View",
    },
    {
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      profileId: "PLR004",
      date: "2025-03-15",
      customerName: "Sophia Martinez",
      contact: "+91 76543 21098",
        region:"East",
      gameStation: "Retro Hub",
      gameAmount: "₹1000",
      winningAmount: "₹250",
      action: "View",
    },
    {
      image: "https://randomuser.me/api/portraits/men/35.jpg",
      profileId: "PLR005",
      date: "2025-03-14",
      customerName: "Daniel White",
      contact: "+91 90876 12345",
        region:"West",
      gameStation: "PlayStation Lounge",
      gameAmount: "₹350",
      winningAmount: "₹0",
      action: "View",
    },
  ];
  
  
  
  const premCustomers = [
    {
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      profileId: "PRM001",
      customerName: "John Doe",
      contact: "+1 987 654 3210",
      subscription: "Gold",
      rating: 4.8,
      action: "View Details",
      nativeBranch: "New York",
      branchId: "NB001",
    },
    {
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      profileId: "PRM002",
      customerName: "Jane Smith",
      contact: "+1 876 543 2109",
      subscription: "Platinum",
      rating: 4.9,
      action: "View Details",
      nativeBranch: "Los Angeles",
      branchId: "NB002",
    },
    {
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      profileId: "PRM003",
      customerName: "Robert Johnson",
      contact: "+44 789 654 3210",
      subscription: "Silver",
      rating: 4.5,
      action: "View Details",
      nativeBranch: "Chicago",
      branchId: "NB003",
    },
    {
      image: "https://randomuser.me/api/portraits/women/40.jpg",
      profileId: "PRM004",
      customerName: "Emily Davis",
      contact: "+91 98765 43210",
      subscription: "Gold",
      rating: 4.7,
      action: "View Details",
      nativeBranch: "Houston",
      branchId: "NB004",
    },
    {
      image: "https://randomuser.me/api/portraits/men/29.jpg",
      profileId: "PRM005",
      customerName: "Michael Brown",
      contact: "+33 789 654 3210",
      subscription: "Platinum",
      rating: 5.0,
      action: "View Details",
      nativeBranch: "San Francisco",
      branchId: "NB005",
    },
  ];
  


  const matchData = [
    {
      customerImage: "https://randomuser.me/api/portraits/women/45.jpg",
      date: "2025-03-21",
      clientIdName: "CL1001 - John Doe",
      customerIdName: "CU2001 - Alice",
      matchAmount: 500,
      clientDeposit: 200,
      customerDeposit: 300,
      matchWon: "Customer",
      paidTo: "Alice",
      winningAmount: 800,
      machineIdName: "MCH001 - Alpha",
      action: "View Details",
    },
    {
      customerImage: "https://randomuser.me/api/portraits/men/30.jpg",
      date: "2025-03-20",
      clientIdName: "CL1002 - Mike Smith",
      customerIdName: "CU2002 - Bob",
      matchAmount: 1000,
      clientDeposit: 500,
      customerDeposit: 500,
      matchWon: "Client",
      paidTo: "Mike Smith",
      winningAmount: 120,
      machineIdName: "MCH002 - Beta",
      action: "View Details",
    },
    {
      customerImage: "https://randomuser.me/api/portraits/men/55.jpg",
      date: "2025-03-19",
      clientIdName: "CL1003 - Sarah Connor",
      customerIdName: "CU2003 - Charlie",
      matchAmount: 750,
      clientDeposit: 400,
      customerDeposit: 350,
      matchWon: "Customer",
      paidTo: "Charlie",
      winningAmount: 1000,
      machineIdName: "MCH003 - Gamma",
      action: "View Details",
    },
  ];
  

const SessionRecords = () => {
  const [activeTable, setActiveTable] = useState("Premium Sessions");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedDate, setSelectedDate] = useState(getYesterdayDate());
  const [premSales, setPremSales] = useState(premCustomers);
  const [winnerRecord, setWinnerRecord] = useState(winnerData)
  const [customMatch, setCustomMatch] = useState(matchData);

  const recordsPerPage = 5;

  useEffect(() => {
    // Update the period in premSales and BlockedCusomters when the selected date changes
    const updatedpremSales = premCustomers.map((sale) => ({
      ...sale,
      period: selectedDate,
    }));
    const updatedCustomMatch = matchData.map((sale) => ({
      ...sale,
      period: selectedDate,
    }));
    const updatedWinners = winnerData.map((sale) => ({
      ...sale,
      period: selectedDate,
    }));


    setPremSales(updatedpremSales);
    setWinnerRecord(updatedWinners)
    setCustomMatch(updatedCustomMatch)
   
  }, [selectedDate]);

  const handleViewClient = (client) => {
    setSelectedClient(client);
  };

  const handleCloseModal = () => {
    setSelectedClient(null);
  };

  const tables = {
    "Premium Sessions": { data: premCustomers, columns: ["image","Profile ID", "Customer Name", "Contact","Native Branch","Subscription", "Rating", "Action"] },
    "Winners": {
      data: winnerData,
      columns: ["image","Profile ID","Date", "Customer Name", "Contact", "Region", "Game station","Game Amount", "Winning Amount", "Action"],
    },
    "Client-Customer Matches": { data: customMatch, 
    columns : [
        "Customer Image",
        "Date",
        "Client ID/Name",
        "Customer ID/Name",
        "Match Amount",
        "Client Deposit",
        "Customer Deposit",
        "Match Won",
        "Paid To",
        "Winning Amount",
        "Machine ID/Name",
        "Action"
      ],
    }
    
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
          <div className="flex items-center text-gray-600 text-sm mb-4">
                  <FaHome className="mr-1 text-blue-500" />
                  <Link to="/">
                  Home
                  </Link>
                  <FaChevronRight className="mx-2 text-gray-400" />
      
                  <Link to="/customers">
               
                  <span className="text-gray-500">Customers</span>
                  </Link>
                  <FaChevronRight className="mx-2 text-gray-400" />
                
                  <span className=" text-orange-500">Session records</span>
                </div>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
   
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
             <input
          className="border border-gray-800 p-2 rounded"
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden pr-8 pl-8">
          <thead>
            <tr className="bg-purple-800 text-white text-left">
              {tables[activeTable].columns.map((col, index) => (
                <th key={index} className="p-3 font-semibold">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
  {currentRecords.map((row, rowIndex) => (
    <tr key={rowIndex} className="border-b hover:bg-gray-50 transition-all">
      {activeTable === "Winners" ? (
        <>
          <td className="p-3 cursor-pointer" onClick={() => handleViewClient(row)}>
            <img src={row.image} alt={row.name} className="w-10 h-10 rounded-full" />
          </td>
          <td className="p-3 text-green-950 cursor-pointer" onClick={() => handleViewClient(row)}>{row.profileId}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.customerName}</td>
          <td className="p-3 text-green-950 cursor-pointer">{selectedDate}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.contact}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.region}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.gameStation}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.gameAmount}</td>
          <td
            className={`
              p-3 text-gray-700 cursor-pointer text-center font-semibold 
              ${row.visited <= 5 ? "bg-red-200 text-red-800" : 
                row.visited <= 15 ? "bg-yellow-200 text-yellow-800" : 
                "bg-green-200 text-green-800"}
              rounded-md
            `}
            onClick={() => handleViewClient(row)}
          >
            {row.winningAmount}
          </td>
          <td className="p-3 space-x-2">
            <button className="text-blue-500 hover:text-blue-700" onClick={() => handleViewClient(row)}>
              <FaEye />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <FaTrash />
            </button>
          </td>
        </>
      ) : activeTable === "Premium Sessions" ? (
        <>
          <td className="p-3 cursor-pointer" onClick={() => handleViewClient(row)}>
            <img src={row.image} alt={row.customerName} className="w-10 h-10 rounded-full" />
          </td>
          <td className="p-3 text-green-950 cursor-pointer" onClick={() => handleViewClient(row)}>{row.profileId}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.customerName}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.contact}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.branchId}-{row.nativeBranch}</td>
          <td
  className={`p-3 text-gray-700 cursor-pointer rounded-lg text-center font-semibold ${
    row.subscription === "Gold"
      ? "bg-green-100 text-green-700" // Premium: Green
      : row.subscription === "Platinum"
      ? "bg-yellow-100 text-yellow-700" // Standard: Yellow
      : row.subscription === "Silver"
      ? "bg-blue-100 text-blue-700" // Basic: Blue
      : "bg-gray-100 text-gray-700" // Default: Gray
  }`}
  onClick={() => handleViewClient(row)}
>
  {row.subscription}
</td>

          <td className="p-3 text-gray-700 cursor-pointer text-center" onClick={() => handleViewClient(row)}>{row.rating}</td>
          <td className="p-3 space-x-2">
            <button className="text-blue-500 hover:text-blue-700" onClick={() => handleViewClient(row)}>
              <FaEye />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <FaTrash />
            </button>
          </td>
        </>
      ) : activeTable === "Client-Customer Matches" ? (
        <>
          <td className="p-3 cursor-pointer" onClick={() => handleViewClient(row)}>
            <img src={row.customerImage} alt={row.customerName} className="w-10 h-10 rounded-full" />
          </td>
          <td className="p-3 text-green-950 cursor-pointer" onClick={() => handleViewClient(row)}>{selectedDate}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.clientIdName}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.customerIdName}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.matchAmount}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>${row.clientDeposit}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>${row.customerDeposit}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.matchWon}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.paidTo}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.winningAmount}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.machineIdName}</td>

          <td className="p-3 space-x-2">
            <button className="text-blue-500 hover:text-blue-700" onClick={() => handleViewClient(row)}>
              <FaEye />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <FaTrash />
            </button>
          </td>
        </>
      ) :(
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
                 <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                   <h2 className="text-xl font-semibold mb-2">Client Details</h2>
                   <img src={selectedClient.image} alt={selectedClient.name} className="w-20 h-20 rounded-full mx-auto" />
                   <p className="mt-3"><strong>Name:</strong> {selectedClient.name}</p>
                   <p><strong>Location:</strong> {selectedClient.location}</p>
                   <p><strong>Contact:</strong> {selectedClient.contact}</p>
                   <p><strong>No. of TRT's:</strong> {selectedClient.trts}</p>
                   <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={handleCloseModal}>
                     Close
                   </button>
                 </div>
               </div>
             )}
           </div>
         );
       };
       
       export default SessionRecords;