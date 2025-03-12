import React from "react";
import { FaBell, FaShoppingCart, FaCreditCard, FaLock, FaPlusSquare } from "react-icons/fa";

const orders = [
  {
    id: 1,
    icon: <FaBell className="text-blue-500" />,
    title: "$2400, Design changes",
    date: "22 DEC",
    time: "7:20 PM",
  },
  {
    id: 2,
    icon: <FaPlusSquare className="text-green-500" />,
    title: "New order #1832412",
    date: "21 DEC",
    time: "11 PM",
  },
  {
    id: 3,
    icon: <FaShoppingCart className="text-orange-500" />,
    title: "Server payments for April",
    date: "21 DEC",
    time: "9:34 PM",
  },
  {
    id: 4,
    icon: <FaCreditCard className="text-purple-500" />,
    title: "New card added for order #4395133",
    date: "20 DEC",
    time: "2:20 AM",
  },
  {
    id: 5,
    icon: <FaLock className="text-gray-500" />,
    title: "Unlock packages for development",
    date: "18 DEC",
    time: "4:54 AM",
  },
  {
    id: 6,
    icon: <FaShoppingCart className="text-blue-500" />,
    title: "New order #9583120",
    date: "17 DEC",
    time: "",
  },
];

const CPerform = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Top Performers</h3>
        <p className="text-sm text-green-600">⬆️ 24% this month</p>
      </div>
      <div className="mt-4 space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="flex items-start space-x-3">
            <div className="text-xl">{order.icon}</div>
            <div>
              <p className="text-gray-800">{order.title}</p>
              <p className="text-xs text-gray-500">
                {order.date} {order.time && `• ${order.time}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CPerform;
