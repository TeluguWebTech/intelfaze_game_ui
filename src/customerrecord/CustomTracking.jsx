import React, { useState } from "react";
import { FaHome, FaChevronRight, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const customerActivity = [
  {
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    customerId: "CUST1001",
    customerName: "Ethan Miller",
    contact: "+1 234 567 8901",
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
    address: "456 Park Ave, New York, NY",
    subscription: "Standard",
    region: "New York",
    gamesPlayed: [
      {
        date: "2025-03-12",
        gamestationId: "GS003",
        stationName: "Game Zone",
        location: "Brooklyn, NY",
        playedAmount: 40,
        won: 80,
        loss: 0,
        rating: 4.5,
        remarks: "Exciting multiplayer games available.",
      },
      {
        date: "2025-03-19",
        gamestationId: "GS004",
        stationName: "Retro Hub",
        location: "Queens, NY",
        playedAmount: 90,
        won: 50,
        loss: 40,
        rating: 4.0,
        remarks: "Nice retro collection, but needs maintenance.",
      },
    ],
  },
  {
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    customerId: "CUST1003",
    customerName: "Michael Brown",
    contact: "+1 321 555 7890",
    address: "789 Sunset Blvd, Las Vegas, NV",
    subscription: "Gold",
    region: "Nevada",
    gamesPlayed: [
      {
        date: "2025-03-14",
        gamestationId: "GS005",
        stationName: "Vegas Playhouse",
        location: "Las Vegas Strip",
        playedAmount: 100,
        won: 200,
        loss: 0,
        rating: 5.0,
        remarks: "Fantastic high-stakes games!",
      },
      {
        date: "2025-03-20",
        gamestationId: "GS006",
        stationName: "Neon Arcade",
        location: "Downtown Vegas",
        playedAmount: 60,
        won: 30,
        loss: 30,
        rating: 3.9,
        remarks: "Good variety, but needs better service.",
      },
    ],
  },
  {
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    customerId: "CUST1004",
    customerName: "Emma Garcia",
    contact: "+1 555 987 6543",
    address: "101 Ocean Dr, Miami, FL",
    subscription: "Platinum",
    region: "Florida",
    gamesPlayed: [
      {
        date: "2025-03-10",
        gamestationId: "GS007",
        stationName: "Miami Funland",
        location: "South Beach, Miami",
        playedAmount: 80,
        won: 150,
        loss: 20,
        rating: 4.7,
        remarks: "Amazing VR games and immersive experiences!",
      },
      {
        date: "2025-03-16",
        gamestationId: "GS008",
        stationName: "Gamer's Paradise",
        location: "Downtown Miami",
        playedAmount: 90,
        won: 90,
        loss: 0,
        rating: 4.2,
        remarks: "Decent selection but slightly outdated hardware.",
      },
    ],
  },
  {
    image: "https://randomuser.me/api/portraits/men/27.jpg",
    customerId: "CUST1005",
    customerName: "Daniel White",
    contact: "+1 777 654 3212",
    address: "567 Elm St, Chicago, IL",
    subscription: "Silver",
    region: "Illinois",
    gamesPlayed: [
      {
        date: "2025-03-08",
        gamestationId: "GS009",
        stationName: "Windy City Arcade",
        location: "Downtown Chicago",
        playedAmount: 45,
        won: 90,
        loss: 10,
        rating: 4.6,
        remarks: "Great ambiance, excellent service.",
      },
      {
        date: "2025-03-17",
        gamestationId: "GS010",
        stationName: "Pixel Mania",
        location: "North Side Chicago",
        playedAmount: 75,
        won: 50,
        loss: 25,
        rating: 4.3,
        remarks: "Awesome retro-themed arcade!",
      },
    ],
  },
  {
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    customerId: "CUST1006",
    customerName: "Isabella Martinez",
    contact: "+1 222 333 4444",
    address: "890 Maple Ave, San Francisco, CA",
    subscription: "Gold",
    region: "California",
    gamesPlayed: [
      {
        date: "2025-03-09",
        gamestationId: "GS011",
        stationName: "SF Gamers Hub",
        location: "Downtown SF",
        playedAmount: 95,
        won: 120,
        loss: 10,
        rating: 4.9,
        remarks: "Best selection of arcade and console games!",
      },
      {
        date: "2025-03-22",
        gamestationId: "GS012",
        stationName: "Pixel Playground",
        location: "Mission District, SF",
        playedAmount: 55,
        won: 30,
        loss: 25,
        rating: 4.1,
        remarks: "Chill place, but a bit crowded.",
      },
    ],
  },
];

const CustomTracking = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter customers based on search query
  const filteredCustomers = customerActivity.filter((customer) =>
    customer.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Breadcrumbs */}
      <div className="flex items-center text-gray-600 text-sm mb-4">
        <FaHome className="mr-1 text-blue-500" />
        <Link to="/" className="hover:underline">Home</Link>
        <FaChevronRight className="mx-2 text-gray-400" />
        <Link to="/customers" className="hover:underline ">Customers</Link>
        <FaChevronRight className="mx-2 text-gray-400" />
        <span className=" text-amber-500">Customer Tracking</span>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center items-center bg-gray-100 mb-6">
        <input
          type="text"
          placeholder="Search by Customer Name"
          className="w-80 p-3 border rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <p className="text-gray-600 mb-6">List of all customers.</p>

      {/* Customer List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {filteredCustomers.map((cust, index) => (
    <div
      key={index}
      className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
    >
      <div className="flex items-center gap-3 mb-3">
        <img
          src={cust.image}
          alt={cust.customerName}
          className="w-12 h-12 rounded-full border border-gray-300"
        />
        <div>
          <h3 className="text-lg font-semibold">{cust.customerName}</h3>
          <p className="text-sm text-gray-500">{cust.contact}</p>
        </div>
      </div>
      
      <p className="text-sm text-gray-700">
        <strong>Address:</strong> {cust.address}
      </p>
      <p className="text-sm font-medium text-gray-900">
        <strong>Subscription:</strong> {cust.subscription}
      </p>
 <div className="flex justify-between">
 <p className="text-sm font-medium text-gray-900">
        <strong>Region:</strong> {cust.region}
      </p>
      <button
        className="mt-2 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setSelectedCustomer(cust)}
      >
        History
      </button>

 </div>
      
      {/* Small History Button */}

    </div>
  ))}
</div>



      {/* Customer Details Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4">
          <div className="flex items-center gap-3 mb-3">
              <img
                src={selectedCustomer.image}
                className="w-12 h-12 rounded-full border border-gray-300"
              />
              <div>
               
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">{selectedCustomer.customerName}</h2>
            <p className="text-gray-700"><strong>Contact:</strong> {selectedCustomer.contact}</p>
            <p className="text-gray-700"><strong>Address:</strong> {selectedCustomer.address}</p>
            <p className="text-gray-700"><strong>Subscription:</strong> {selectedCustomer.subscription}</p>
            <p className="text-gray-700"><strong>Region:</strong> {selectedCustomer.region}</p>

            <h3 className="text-lg font-semibold mt-4">Games Played</h3>
            <div className="overflow-auto mt-2">
              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-3 py-2">Date</th>
                    <th className="border px-3 py-2">Station</th>
                    <th className="border px-3 py-2">Location</th>
                    <th className="border px-3 py-2">Played Amount</th>
                    <th className="border px-3 py-2">Won</th>
                    <th className="border px-3 py-2">Loss</th>
                    <th className="border px-3 py-2">Rating</th>
                    <th className="border px-3 py-2">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedCustomer.gamesPlayed.map((game, index) => (
                    <tr key={index} className="text-center">
                      <td className="border px-3 py-2">{game.date}</td>
                      <td className="border px-3 py-2">{game.stationName}</td>
                      <td className="border px-3 py-2">{game.location}</td>
                      <td className="border px-3 py-2">${game.playedAmount}</td>
                      <td className="border px-3 py-2">${game.won}</td>
                      <td className="border px-3 py-2">${game.loss}</td>
                      <td className="border px-3 py-2">⭐{game.rating}</td>
                      <td className="border px-3 py-2">{game.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button 
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md w-full"
              onClick={() => setSelectedCustomer(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomTracking;
