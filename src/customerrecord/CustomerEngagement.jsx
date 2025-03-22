import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaEnvelope, FaSort, FaEye, FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const getYesterdayDate = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split("T")[0];
};

// Sample data with more records
const allCustomers = [
    { id: "CL-001", name: "John Doe", location: "New York, NY", contact: "+1 212 555 7890", visited: 5, rating: 4.5, image: "https://i.pravatar.cc/50?img=1" },
    { id: "CL-002", name: "Jane Smith", location: "Los Angeles, CA", contact: "+1 323 555 1234", visited: 8, rating: 4.8, image: "https://i.pravatar.cc/50?img=2" },
    { id: "CL-003", name: "Michael Johnson", location: "Chicago, IL", contact: "+1 312 555 9876", visited: 3, rating: 4.2, image: "https://i.pravatar.cc/50?img=3" },
    { id: "CL-004", name: "Emily Davis", location: "Houston, TX", contact: "+1 713 555 4567", visited: 6, rating: 4.7, image: "https://i.pravatar.cc/50?img=4" },
    { id: "CL-005", name: "David Wilson", location: "San Francisco, CA", contact: "+1 415 555 7890", visited: 4, rating: 4.3, image: "https://i.pravatar.cc/50?img=5" },
    { id: "CL-006", name: "Sophia Martinez", location: "Miami, FL", contact: "+1 305 555 2345", visited: 7, rating: 4.6, image: "https://i.pravatar.cc/50?img=6" },
    { id: "CL-007", name: "William Brown", location: "Dallas, TX", contact: "+1 972 555 6789", visited: 9, rating: 4.9, image: "https://i.pravatar.cc/50?img=7" },
    { id: "CL-008", name: "Olivia Taylor", location: "Seattle, WA", contact: "+1 206 555 3456", visited: 2, rating: 4.1, image: "https://i.pravatar.cc/50?img=8" },
    { id: "CL-009", name: "James Anderson", location: "Boston, MA", contact: "+1 617 555 4321", visited: 5, rating: 4.4, image: "https://i.pravatar.cc/50?img=9" },
    { id: "CL-010", name: "Charlotte Harris", location: "Denver, CO", contact: "+1 303 555 8765", visited: 6, rating: 4.5, image: "https://i.pravatar.cc/50?img=10" }
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
  

const initialBlockedCusomters= [
  {
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    profileId: "BLK001",
    customerName: "David Wilson",
    branchId: "BR001",
    clientName: "John's Tech Hub",
    reason: "Multiple complaints",
    rating: 2.1,
    action: "Unblock",
  },
  {
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    profileId: "BLK002",
    customerName: "Sophia Martinez",
    branchId: "BR002",
    clientName: "Elite Finance",
    reason: "Fraudulent activity",
    rating: 1.8,
    action: "Unblock",
  },
  {
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    profileId: "BLK003",
    customerName: "James Anderson",
    branchId: "BR003",
    clientName: "Prime E-Commerce",
    reason: "Chargeback fraud",
    rating: 2.5,
    action: "Unblock",
  },
  {
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    profileId: "BLK004",
    customerName: "Olivia Taylor",
    branchId: "BR004",
    clientName: "City Bank",
    reason: "Harassment reports",
    rating: 1.9,
    action: "Unblock",
  },
  {
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    profileId: "BLK005",
    customerName: "Daniel White",
    branchId: "BR005",
    clientName: "Global Retailers",
    reason: "Suspicious transactions",
    rating: 2.0,
    action: "Unblock",
  },
];


const customReviews = [
  {
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    custId: "CLT001",
    customerName: "Ethan Miller",
    gameStation: "Arcade X",
    review: "Great experience! The machines were well-maintained and fun to play.",
    rating: 4.8,
    action: "View",
  },
  {
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    clientId: "CLT002",
    customerName: "Sophia Johnson",
    gameStation: "Game Zone",
    review: "Enjoyed the variety of games. Would love more multiplayer options.",
    rating: 4.5,
    action: "View",
  },
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    clientId: "CLT003",
    customerName: "Benjamin Carter",
    gameStation: "Cyber Arena",
    review: "The controls were responsive, but some machines needed maintenance.",
    rating: 3.9,
    action: "View",
  },
  {
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    clientId: "CLT004",
    customerName: "Olivia Martinez",
    gameStation: "Retro Hub",
    review: "Loved the retro-themed games! The ambiance was fantastic.",
    rating: 4.7,
    action: "View",
  },
  {
    image: "https://randomuser.me/api/portraits/men/25.jpg",
    clientId: "CLT005",
    customerName: "Lucas Anderson",
    gameStation: "PlayStation Lounge",
    review: "Had a great time with friends. The environment was clean and well-lit.",
    rating: 4.6,
    action: "View",
  },
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

const supportData = [

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

const CustomerEngagement = () => {
  const [activeTable, setActiveTable] = useState("Premium Customers");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedDate, setSelectedDate] = useState(getYesterdayDate());
  const [premSales, setPremSales] = useState(premCustomers);
  const [BlockedCusomters, setBlockedCusomters] = useState(initialBlockedCusomters);
  const [cReviews, setCReviews] = useState(customReviews)
  const [salesByCommission, setSalesByCommission] = useState(initialSalesByCommission)

  const recordsPerPage = 5;

  useEffect(() => {
    // Update the period in premSales and BlockedCusomters when the selected date changes
    const updatedpremSales = premCustomers.map((sale) => ({
      ...sale,
      period: selectedDate,
    }));
    const updatedBlockedCusomters = initialBlockedCusomters.map((sale) => ({
      ...sale,
      period: selectedDate,
    }));
    const updatedCustomReviews = customReviews.map((sale) => ({
      ...sale,
    }));
    const updatedSalesByCommission = initialSalesByCommission.map((sale) => ({
      ...sale,
      period: selectedDate,
    }));

    setPremSales(updatedpremSales);
    setBlockedCusomters(updatedBlockedCusomters);
    setCReviews(updatedCustomReviews)
    setSalesByCommission(updatedSalesByCommission)
  }, [selectedDate]);

  const handleViewClient = (client) => {
    setSelectedClient(client);
  };

  const handleCloseModal = () => {
    setSelectedClient(null);
  };

  const tables = {
    "Premium Customers": { data: premCustomers, columns: ["image","Profile ID", "Customer Name", "Contact","Native Branch","Subscription", "Rating", "Action"] },
    "Multi-Location Visitors": {
      data: allCustomers,
      columns: ["image","Profile ID","Date", "Customer Name", "Contact", "Region", "Locations Visited", "Rating", "Action"],
    },
    "Blocked Customers": { data: BlockedCusomters, columns: ["image","Profile ID", "Customer Name", "Blocked by","Reason", "Rating", "Action"] },
    "Customer Reviews": { data: cReviews, columns: ["image", "Client id/Name","Game Station","Review", "Rating", "Action" ] },
    "Support": { data: supportData, columns: ["image","Customer id/Name", "Game Station", "Date", "Complaint", "Status", "Action"] },
    // "Services": { data: services, columns: ["Service", "Bookings", "Rating"] },
    // "Analytics": { data: analytics, columns: ["Metric", "Value"] },
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
                
                  <span className=" text-orange-500">Customer Engagement</span>
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
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden pr-8 pl-8">
          <thead>
            <tr className="bg-pink-700 text-white text-left">
              {tables[activeTable].columns.map((col, index) => (
                <th key={index} className="p-3 font-semibold">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
  {currentRecords.map((row, rowIndex) => (
    <tr key={rowIndex} className="border-b hover:bg-gray-50 transition-all">
      {activeTable === "Multi-Location Visitors" ? (
        <>
          <td className="p-3 cursor-pointer" onClick={() => handleViewClient(row)}>
            <img src={row.image} alt={row.name} className="w-10 h-10 rounded-full" />
          </td>
          <td className="p-3 text-green-950 cursor-pointer" onClick={() => handleViewClient(row)}>{row.id}</td>
          <td className="p-3 text-green-950 cursor-pointer">{selectedDate}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.name}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.contact}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.location}</td>
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
            {row.visited}
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
      ) : activeTable === "Premium Customers" ? (
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
      ) : activeTable === "Blocked Customers" ? (
        <>
          <td className="p-3 cursor-pointer" onClick={() => handleViewClient(row)}>
            <img src={row.image} alt={row.customerName} className="w-10 h-10 rounded-full" />
          </td>
          <td className="p-3 text-green-950 cursor-pointer" onClick={() => handleViewClient(row)}>{row.profileId}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.customerName}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.branchId}-{row.clientName}</td>
          <td
  className={`p-3 text-gray-700 cursor-pointer rounded-md ${
    row.reason === "Multiple complaints"
      ? "bg-yellow-100 text-yellow-700"
      : row.reason === "Fraudulent activity"
      ? "bg-red-100 text-red-700"
      : row.reason === "Chargeback fraud"
      ? "bg-orange-100 text-orange-700"
      : row.reason === "Harassment reports"
      ? "bg-pink-100 text-pink-700"
      : row.reason === "Suspicious transactions"
      ? "bg-purple-100 text-purple-700"
      : "bg-gray-100 text-gray-700"
  }`}
  onClick={() => handleViewClient(row)}
>
  {row.reason}
</td>

          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.rating}</td>
          <td className="p-3 space-x-2">
            <button className="text-blue-500 hover:text-blue-700" onClick={() => handleViewClient(row)}>
              <FaEye />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <FaTrash />
            </button>
          </td>
        </>
      ) :  activeTable === "Customer Reviews" ? (
        <>
          <td className="p-3 cursor-pointer" onClick={() => handleViewClient(row)}>
            <img src={row.image} alt={row.customerName} className="w-10 h-10 rounded-full" />
          </td>
          <td className="p-3 text-green-950 cursor-pointer" onClick={() => handleViewClient(row)}>{row.customerName}</td>
          <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewClient(row)}>{row.gameStation}</td>
          <td
  className={`p-3 text-gray-700 cursor-pointer rounded-lg ${
    row.rating >= 4.5
      ? "bg-green-100" // Excellent reviews
      : row.rating >= 3.5
      ? "bg-yellow-100" // Moderate reviews
      : "bg-red-100" // Poor reviews
  }`}
  onClick={() => handleViewClient(row)}
>
  {row.review}
</td>

          <td className="p-3 text-gray-700 cursor-pointer text-center" >{row.rating}</td>
          <td className="p-3 space-x-2">
            <button className="text-blue-500 hover:text-blue-700" onClick={() => handleViewClient(row)}>
              <FaEye />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <FaTrash />
            </button>
          </td>
        </>
      ):(
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
       
       export default CustomerEngagement;