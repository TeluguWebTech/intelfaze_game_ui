import React, { useState } from "react";
import { FaHome, FaChevronRight, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const recordsPerPage = 5;

const frequentCustomers = [
    {
      image: "https://randomuser.me/api/portraits/men/14.jpg",
      customerId: "CUST1001",
      customerName: "Ethan Miller",
      contact: "+1 234 567 8901",
      email: "ethan.miller@email.com",
      address: "123 Main St, Los Angeles, CA",
      subscription: "Premium",
      region: "California",
      gamesPlayed: [
        {
          date: "2025-03-15",
          gamestationId: "GS001",
          stationName: "Arcade X",
          location: "Downtown LA",
          playedAmount: 50,
          won: 100,
          loss: 0,
          rating: 4.8,
          remarks: "Great experience, smooth gameplay.",
        },
        {
          date: "2025-03-18",
          gamestationId: "GS002",
          stationName: "Cyber Arena",
          location: "Hollywood, CA",
          playedAmount: 70,
          won: 0,
          loss: 70,
          rating: 3.5,
          remarks: "Machines were slightly laggy.",
        },
      ],
    },
    {
      image: "https://randomuser.me/api/portraits/women/21.jpg",
      customerId: "CUST1002",
      customerName: "Sophia Johnson",
      contact: "+1 987 654 3210",
      email: "sophia.johnson@email.com",
      address: "456 Oak St, New York, NY",
      subscription: "Standard",
      region: "New York",
      gamesPlayed: [],
    },
    {
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      customerId: "CUST1003",
      customerName: "Liam Anderson",
      contact: "+1 555 432 7890",
      email: "liam.anderson@email.com",
      address: "789 Pine St, Chicago, IL",
      subscription: "Gold",
      region: "Illinois",
      gamesPlayed: [
        {
          date: "2025-02-10",
          gamestationId: "GS003",
          stationName: "Mega Play",
          location: "Chicago Downtown",
          playedAmount: 40,
          won: 80,
          loss: 0,
          rating: 4.5,
          remarks: "Good graphics, fast machines.",
        },
        {
          date: "2025-02-14",
          gamestationId: "GS004",
          stationName: "Pixel Zone",
          location: "South Side, Chicago",
          playedAmount: 60,
          won: 30,
          loss: 30,
          rating: 3.8,
          remarks: "Decent experience, some technical issues.",
        },
      ],
    },
    {
      image: "https://randomuser.me/api/portraits/women/41.jpg",
      customerId: "CUST1004",
      customerName: "Olivia Martinez",
      contact: "+1 321 678 9012",
      email: "olivia.martinez@email.com",
      address: "101 Maple St, Miami, FL",
      subscription: "Platinum",
      region: "Florida",
      gamesPlayed: [
        {
          date: "2025-03-05",
          gamestationId: "GS005",
          stationName: "VR World",
          location: "Miami Beach",
          playedAmount: 100,
          won: 200,
          loss: 0,
          rating: 4.9,
          remarks: "Amazing VR experience!",
        },
      ],
    },
    {
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      customerId: "CUST1005",
      customerName: "William Brown",
      contact: "+1 876 543 2109",
      email: "william.brown@email.com",
      address: "555 Cedar St, Houston, TX",
      subscription: "Basic",
      region: "Texas",
      gamesPlayed: [
        {
          date: "2025-01-20",
          gamestationId: "GS006",
          stationName: "PlayHouse",
          location: "Houston Central",
          playedAmount: 20,
          won: 0,
          loss: 20,
          rating: 2.5,
          remarks: "Needs better game options.",
        },
      ],
    },
    {
      image: "https://randomuser.me/api/portraits/women/52.jpg",
      customerId: "CUST1006",
      customerName: "Emily Davis",
      contact: "+1 654 321 0987",
      email: "emily.davis@email.com",
      address: "777 Sunset Blvd, San Francisco, CA",
      subscription: "Gold",
      region: "California",
      gamesPlayed: [
        {
          date: "2025-02-28",
          gamestationId: "GS007",
          stationName: "Gamer’s Haven",
          location: "San Francisco Downtown",
          playedAmount: 80,
          won: 150,
          loss: 0,
          rating: 4.7,
          remarks: "Fantastic experience, loved it!",
        },
      ],
    },
    {
      image: "https://randomuser.me/api/portraits/men/61.jpg",
      customerId: "CUST1007",
      customerName: "James Wilson",
      contact: "+1 210 765 4321",
      email: "james.wilson@email.com",
      address: "963 Hilltop Dr, Boston, MA",
      subscription: "Premium",
      region: "Massachusetts",
      gamesPlayed: [
        {
          date: "2025-03-10",
          gamestationId: "GS008",
          stationName: "Esports Arena",
          location: "Boston Central",
          playedAmount: 120,
          won: 300,
          loss: 0,
          rating: 5.0,
          remarks: "Best gaming arena I've visited!",
        },
      ],
    },
    {
      image: "https://randomuser.me/api/portraits/women/71.jpg",
      customerId: "CUST1008",
      customerName: "Ava Thompson",
      contact: "+1 765 432 1098",
      email: "ava.thompson@email.com",
      address: "159 Ocean Dr, Seattle, WA",
      subscription: "Standard",
      region: "Washington",
      gamesPlayed: [],
    },
  ];
  


const FreqCustomers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const totalPages = Math.ceil(frequentCustomers.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const paginatedCustomers = frequentCustomers.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  return (
    <div className="container mx-auto p-4">
         <div className="flex items-center text-gray-600 text-sm mb-4">
                <FaHome className="mr-1 text-blue-500" />
                <Link to="/" className="hover:underline">Home</Link>
                <FaChevronRight className="mx-2 text-gray-400" />
                <Link to="/customers" className="hover:underline ">Customers</Link>
                <FaChevronRight className="mx-2 text-gray-400" />
                <span className=" text-amber-500">Frequent Customers</span>
              </div>
        
      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        Frequent Customers
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-600 text-white">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Contact</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Subscription</th>
              <th className="p-3 text-left">Region</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCustomers.map((customer, index) => (
              <tr
                key={customer.customerId}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                onClick={() => setSelectedCustomer(customer)}
                style={{ cursor: "pointer" }}
              >
                <td className="p-3">
                  <img
                    src={customer.image}
                    alt={customer.customerName}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="p-3">{customer.customerId}</td>
                <td className="p-3">{customer.customerName}</td>
                <td className="p-3">{customer.contact}</td>
                <td className="p-3">{customer.email}</td>
                <td className="p-3">{customer.subscription}</td>
                <td className="p-3">{customer.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-l disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="px-4 py-2 bg-gray-100 text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[90%] md:w-3/4 lg:w-1/2 shadow-lg">
           <div className="flex justify-between">
            <div className="">
            <h3 className="text-xl font-bold mb-4">
              {selectedCustomer.customerName}
            </h3>
            <p>
              <strong>Address:</strong> {selectedCustomer.address}
            </p>
            <p>
              <strong>Region:</strong> {selectedCustomer.region}
            </p>
            </div>
            <img
                    src={selectedCustomer.image}
                    // alt={customer.customerName}
                    className="w-20 h-20 rounded-full mr-10"
                  />
           </div>
           
            <h4 className="mt-4 font-bold text-lg">Games Played</h4>

            {selectedCustomer.gamesPlayed.length > 0 ? (
              <div className="overflow-x-auto mt-2">
                <table className="w-full border border-gray-200 shadow-md rounded-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-2 text-left">Date</th>
                      <th className="p-2 text-left">Station</th>
                      <th className="p-2 text-left">Location</th>
                      <th className="p-2 text-left">Played Amount</th>
                      <th className="p-2 text-left">Won</th>
                      <th className="p-2 text-left">Loss</th>
                      <th className="p-2 text-left">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCustomer.gamesPlayed.map((game, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="p-2">{game.date}</td>
                        <td className="p-2">{game.stationName}</td>
                        <td className="p-2">{game.location}</td>
                        <td className="p-2">${game.playedAmount}</td>
                        <td className="p-2">${game.won}</td>
                        <td className="p-2">${game.loss}</td>
                        <td className="p-2">{game.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-600 mt-2">No games played.</p>
            )}
 
            <button
              onClick={() => setSelectedCustomer(null)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FreqCustomers;
