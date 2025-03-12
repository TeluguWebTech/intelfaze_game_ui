import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";

const invoices = [
  { id: "Invoice-2024-xd912c", status: "Upcoming", date: "6 Aug, 2024", amount: "$24.00" },
  { id: "Invoice-2024-rq857m", status: "Paid", date: "17 Jun, 2024", amount: "$29.99" },
  { id: "Invoice-2024-jk563z", status: "Paid", date: "30 Apr, 2024", amount: "$24.00" },
  { id: "Invoice-2024-hg234x", status: "Declined", date: "21 Apr, 2024", amount: "$6.59" },
  { id: "Invoice-2024-lp098y", status: "Paid", date: "14 Mar, 2024", amount: "$24.00" },
];

const statusStyles = {
  Upcoming: "bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm",
  Paid: "bg-green-100 text-green-700 px-2 py-1 rounded text-sm",
  Declined: "bg-red-100 text-red-700 px-2 py-1 rounded text-sm",
};

export default function CShowRevenue() {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Billing and Invoicing</h2>
        <button className="bg-gray-200 px-3 py-2 rounded flex items-center gap-2 hover:bg-gray-300">
          <FaDownload /> Download All
        </button>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b font-semibold">
            <th className="py-2">Invoice</th>
            <th className="py-2">Status</th>
            <th className="py-2">Date</th>
            <th className="py-2">Amount</th>
            <th className="py-2 text-center"> </th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="py-3">{invoice.id}</td>
              <td className="py-3">
                <span className={statusStyles[invoice.status]}>{invoice.status}</span>
              </td>
              <td className="py-3">{invoice.date}</td>
              <td className="py-3">{invoice.amount}</td>
              <td className="py-3 text-center">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaDownload />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-center">
        <a href="#" className="text-blue-500 hover:underline">View all Payments</a>
      </div>
    </div>
  );
}