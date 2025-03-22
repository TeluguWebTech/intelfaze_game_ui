import React, { useState } from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const customers = [
  {
    customerImage: "https://randomuser.me/api/portraits/men/1.jpg",
    customerId: "CUST001",
    customerName: "John Doe",
    contact: "+1 212-555-1234",
    region: "New York, USA",
    address: "123 Main Street, NY 10001",
    sessionCount: 15,
    avgGameCredits: 200,
    transactionHistory: "$1500",
    rating: "4.5",
    status: "Active",
    issueReporting: "No issues",
    ticketStatus: "Resolved",
  },
  {
    customerImage: "https://randomuser.me/api/portraits/women/2.jpg",
    customerId: "CUST002",
    customerName: "Jane Smith",
    contact: "+1 646-555-5678",
    region: "Los Angeles, USA",
    address: "456 Sunset Blvd, LA 90028",
    sessionCount: 10,
    avgGameCredits: 180,
    transactionHistory: "$1200",
    rating: "4.2",
    status: "Active",
    issueReporting: "No issues",
    ticketStatus: "Resolved",
  },
  {
    customerImage: "https://randomuser.me/api/portraits/men/3.jpg",
    customerId: "CUST003",
    customerName: "Michael Brown",
    contact: "+44 20 7946 0123",
    region: "London, UK",
    address: "789 Baker Street, London W1U 6AG",
    sessionCount: 8,
    avgGameCredits: 160,
    transactionHistory: "$1000",
    rating: "4.0",
    status: "Inactive",
    issueReporting: "Payment issue",
    ticketStatus: "Pending",
  },
  {
    customerImage: "https://randomuser.me/api/portraits/women/4.jpg",
    customerId: "CUST004",
    customerName: "Emily Davis",
    contact: "+1 305-555-0987",
    region: "Miami, USA",
    address: "321 Ocean Drive, Miami Beach, FL 33139",
    sessionCount: 12,
    avgGameCredits: 190,
    transactionHistory: "$1300",
    rating: "4.3",
    status: "Active",
    issueReporting: "No issues",
    ticketStatus: "Resolved",
  },
  {
    customerImage: "https://randomuser.me/api/portraits/men/5.jpg",
    customerId: "CUST005",
    customerName: "David Wilson",
    contact: "+1 702-555-7894",
    region: "Las Vegas, USA",
    address: "159 Fremont St, Las Vegas, NV 89101",
    sessionCount: 18,
    avgGameCredits: 220,
    transactionHistory: "$1800",
    rating: "4.8",
    status: "Active",
    issueReporting: "No issues",
    ticketStatus: "Resolved",
  },
  {
    customerImage: "https://randomuser.me/api/portraits/women/6.jpg",
    customerId: "CUST006",
    customerName: "Sophia Martinez",
    contact: "+34 91 555 6789",
    region: "Madrid, Spain",
    address: "12 Gran Via, Madrid 28013",
    sessionCount: 14,
    avgGameCredits: 195,
    transactionHistory: "$1400",
    rating: "4.4",
    status: "Active",
    issueReporting: "No issues",
    ticketStatus: "Resolved",
  },
  {
    customerImage: "https://randomuser.me/api/portraits/men/7.jpg",
    customerId: "CUST007",
    customerName: "James Anderson",
    contact: "+61 2 5556 7890",
    region: "Sydney, Australia",
    address: "45 George St, Sydney NSW 2000",
    sessionCount: 9,
    avgGameCredits: 170,
    transactionHistory: "$1100",
    rating: "3.9",
    status: "Inactive",
    issueReporting: "Refund request",
    ticketStatus: "Pending",
  },
  {
    customerImage: "https://randomuser.me/api/portraits/women/8.jpg",
    customerId: "CUST008",
    customerName: "Olivia Taylor",
    contact: "+33 1 5555 6789",
    region: "Paris, France",
    address: "78 Champs-Élysées, Paris 75008",
    sessionCount: 16,
    avgGameCredits: 210,
    transactionHistory: "$1600",
    rating: "4.7",
    status: "Active",
    issueReporting: "No issues",
    ticketStatus: "Resolved",
  },
  {
    customerImage: "https://randomuser.me/api/portraits/men/9.jpg",
    customerId: "CUST009",
    customerName: "Daniel Thomas",
    contact: "+91 98765 43210",
    region: "Mumbai, India",
    address: "10 Marine Drive, Mumbai 400020",
    sessionCount: 7,
    avgGameCredits: 150,
    transactionHistory: "$900",
    rating: "3.8",
    status: "Inactive",
    issueReporting: "Technical issue",
    ticketStatus: "Open",
  },
  {
    customerImage: "https://randomuser.me/api/portraits/women/10.jpg",
    customerId: "CUST010",
    customerName: "Emma White",
    contact: "+49 30 5555 6789",
    region: "Berlin, Germany",
    address: "25 Alexanderplatz, Berlin 10178",
    sessionCount: 20,
    avgGameCredits: 230,
    transactionHistory: "$2000",
    rating: "4.9",
    status: "Active",
    issueReporting: "No issues",
    ticketStatus: "Resolved",
  },
];

const CustomerList = () => {
  const [filter, setFilter] = useState("all");
  const [selectedCustomer, setselectedCustomer] = useState(null);

  // Filter logic
  const filteredCustomers = customers.filter((customer) => {
    if (filter === "all") return true;
    if (filter === "region") return customer.region.includes("USA");
    if (filter === "rating") return parseFloat(customer.rating) >= 4.0;
    if (filter === "status") return customer.status === "Active";
    if (filter === "issues") return customer.issueReporting !== "No issues";
    return true;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center text-gray-600 text-sm mb-4">
        <FaHome className="mr-1 text-blue-500" />
        <Link to="/" className="hover:underline">Home</Link>
        <FaChevronRight className="mx-2 text-gray-400" />
        <Link to="/customers" className="hover:underline">Customers</Link>
        <FaChevronRight className="mx-2 text-gray-400" />
        <span className="text-gray-500">Customers List</span>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Customers List</h2>
        <div className="flex gap-4">
          {["all", "region", "rating", "status", "issues"].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded-md transition ${
                filter === type
                  ? "bg-blue-700 text-white"
                  : "border border-gray-500 text-black hover:bg-blue-700"
              }`}
              onClick={() => setFilter(type)}
            >
              {type === "all" ? "All" : ` ${type.charAt(0).toUpperCase() + type.slice(1)}`}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <p className="text-gray-600 mb-6">Overview of all Customers List.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredCustomers.map((customer, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200 cursor-pointer"
            onClick={() => setselectedCustomer(customer)}
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={customer.customerImage}
                alt={customer.customerName}
                className="w-12 h-12 rounded-full border border-gray-300"
              />
              <div>
                <h3 className="text-lg font-semibold">{customer.customerName}</h3>
                <p className="text-sm text-orange-500">{customer.contact}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-2"><strong>Address:</strong> {customer.address}</p>
            <p className="text-sm font-medium text-gray-900"><strong>Sessions Count:</strong> {customer.sessionCount}</p>
            <p className="text-sm font-medium text-gray-900"><strong>Avg Credits:</strong> ${customer.avgGameCredits}</p>
            <button className="bg-blue-800 p-2 rounded-2xl float-right text-white text-[8px] mt-[-25px]">
              <p>Transaction History</p>
            </button>
          </div>
        ))}
      </div>
      {selectedCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-2">Id: {selectedCustomer.customerId} / Name: {selectedCustomer.customerName}</h2>
            <img
              src={selectedCustomer.customerImage}
              alt={selectedCustomer.customerName}
              className="w-20 h-20 rounded-full mx-auto border border-gray-300 mb-4"
            />
               <button className="bg-blue-800 p-2 rounded-2xl float-right text-white text-[12px]">
            <p >Transaction History </p>
            </button>
            <p className="text-gray-700 "><strong>Contact:</strong> {selectedCustomer.contact}</p>
            <p className="text-gray-700"><strong>Region:</strong> {selectedCustomer.region}</p>
            <p className="text-gray-700"><strong>Address:</strong> {selectedCustomer.address}</p>
            <p className="text-gray-700"><strong>Sessions Count:</strong> {selectedCustomer.sessionCount}</p>
            <p className="text-gray-700"><strong>Game Credits:</strong> {selectedCustomer.avgGameCredits}</p>
            <p className="text-gray-700"><strong>Rating:</strong> {selectedCustomer.rating}</p>
            <p className="text-gray-700"><strong>Account Status:</strong> {selectedCustomer.status}</p>
            <p className="text-gray-700"><strong>Reported Issues:</strong> {selectedCustomer.issueReporting}</p>
            <p className="text-gray-700"><strong>Ticket Status:</strong> {selectedCustomer.ticketStatus}</p>
            <Link>
         
            </Link>
            <button 
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md w-full"
              onClick={() => setselectedCustomer(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerList;
