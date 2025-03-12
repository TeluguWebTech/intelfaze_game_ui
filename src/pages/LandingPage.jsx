import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserFriends, FaDatabase, FaCalendarAlt, FaTasks, FaLocationArrow, FaDollarSign, FaSalesforce, FaArrowAltCircleUp } from "react-icons/fa";
import { MdOutlineCollections, MdInventory, MdEvent, MdRealEstateAgent } from "react-icons/md";
import { BsBox, BsClipboardCheck } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";
import NavbarComp from "../components/NavbarComp";

const categories = [
  { name: "Dashboard", icon: <BsBox />, color: "bg-green-200 text-green-700" },
  { name: "Clients", icon: <FaUserFriends />, color: "bg-red-200 text-red-700", path: "/clients" }, // Added path
  { name: "Contacts", icon: <FaUserFriends />, color: "bg-blue-200 text-blue-700" },
  { name: "Machines", icon: <FaDatabase />, color: "bg-yellow-200 text-yellow-700", path: "/machines" },
  { name: "Revenue", icon: <FaDollarSign />, color: "bg-purple-200 text-purple-700", path: "/revenue" },
  { name: "Accounts", icon: <FaArrowAltCircleUp />, color: "bg-purple-200 text-purple-700",  path: "/accounts" },
  { name: "Locations", icon: <FaLocationArrow />, color: "bg-orange-200 text-orange-700"},
  { name: "Sales", icon: <FaSalesforce />, color: "bg-pink-200 text-pink-700",  path: "/sales"  },
  { name: "Analytics", icon: <AiOutlineProject />, color: "bg-indigo-200 text-indigo-700" },
  { name: "Transactions", icon: <MdOutlineCollections />, color: "bg-teal-200 text-teal-700" },
  { name: "Employees", icon: <FaUserFriends />, color: "bg-gray-200 text-gray-700" },
  { name: "Tasks", icon: <MdEvent />, color: "bg-green-200 text-green-700" },
  { name: "Events", icon: <MdEvent />, color: "bg-blue-200 text-blue-700" },
  { name: "Inventory", icon: <MdInventory />, color: "bg-yellow-200 text-yellow-700" },
  { name: "Meetings", icon: <FaCalendarAlt />, color: "bg-purple-200 text-purple-700" },
  { name: "Support", icon: <MdRealEstateAgent />, color: "bg-orange-200 text-orange-700" },
  { name: "Reports", icon: <BsClipboardCheck />, color: "bg-blue-200 text-blue-700" },
  { name: "To-Do List", icon: <FaTasks />, color: "bg-teal-200 text-teal-700" },
];

export default function LandingPage() {
  return (
    <>
      <NavbarComp />
      <div className="px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 bg-gray-50 min-h-screen">
        {/* Grid Layout for Items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-8">
          {categories.map((item) => (
            <div key={item.name} className="flex flex-col items-center space-y-2">
              {/* Use Link if a path exists */}
              {item.path ? (
                <Link to={item.path} className="flex flex-col items-center space-y-2">
                  <div className="bg-white shadow-lg rounded-2xl p-5 flex items-center justify-center">
                    <div className={`${item.color} p-3 rounded-xl text-4xl`}>{item.icon}</div>
                  </div>
                  <span className="text-base font-semibold">{item.name}</span>
                </Link>
              ) : (
                // Render without Link if no path
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-white shadow-lg rounded-2xl p-5 flex items-center justify-center">
                    <div className={`${item.color} p-3 rounded-xl text-4xl`}>{item.icon}</div>
                  </div>
                  <span className="text-base font-semibold">{item.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
