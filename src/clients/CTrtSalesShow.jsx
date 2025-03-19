import React, { useState } from "react";
import { FaChevronRight, FaDownload, FaEye, FaHome, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const getYesterdayDate = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split("T")[0];
};

const invoices = [
  {
    id: "Invoice-2024-xd912c",
    period: getYesterdayDate(),
    status: "Upcoming",
    client: "John Doe",
    location: "New York, USA",
    deposits: "$500.00",
    withdrawals: "$200.00",
    carryingAmount: "$300.00",
    initiatedBy: "Emily Johnson",
    noOfMatches: 3,
  },
  {
    id: "Invoice-2024-rq857m",
    period: getYesterdayDate(),
    status: "Paid",
    client: "Michael Smith",
    location: "Los Angeles, USA",
    deposits: "$700.00",
    withdrawals: "$250.00",
    carryingAmount: "$450.00",
    initiatedBy: "Sophia Martinez",
    noOfMatches: 5,
  },
  {
    id: "Invoice-2024-jk563z",
    period: getYesterdayDate(),
    status: "Paid",
    client: "Daniel Brown",
    location: "Chicago, USA",
    deposits: "$900.00",
    withdrawals: "$400.00",
    carryingAmount: "$500.00",
    initiatedBy: "William Taylor",
    noOfMatches: 8,
  },
  {
    id: "Invoice-2024-hg234x",
    period: getYesterdayDate(),
    status: "Declined",
    client: "Olivia Wilson",
    location: "Houston, USA",
    deposits: "$300.00",
    withdrawals: "$350.00",
    carryingAmount: "-$50.00",
    initiatedBy: "Ava Anderson",
    noOfMatches: 2,
  },
  {
    id: "Invoice-2024-lp098y",
    period: getYesterdayDate(),
    status: "Paid",
    client: "James White",
    location: "Miami, USA",
    deposits: "$600.00",
    withdrawals: "$150.00",
    carryingAmount: "$450.00",
    initiatedBy: "Sophia Lee",
    noOfMatches: 6,
  },
  {
    id: "Invoice-2024-mn345k",
    period: getYesterdayDate(),
    status: "Upcoming",
    client: "Liam Harris",
    location: "Seattle, USA",
    deposits: "$400.00",
    withdrawals: "$100.00",
    carryingAmount: "$300.00",
    initiatedBy: "Ethan Parker",
    noOfMatches: 4,
  },
  {
    id: "Invoice-2024-qw789p",
    period: getYesterdayDate(),
    status: "Paid",
    client: "Emma Lewis",
    location: "San Francisco, USA",
    deposits: "$800.00",
    withdrawals: "$500.00",
    carryingAmount: "$300.00",
    initiatedBy: "Mia Robinson",
    noOfMatches: 7,
  },
  {
    id: "Invoice-2024-zx567y",
    period: getYesterdayDate(),
    status: "Declined",
    client: "Lucas Martinez",
    location: "Dallas, USA",
    deposits: "$350.00",
    withdrawals: "$450.00",
    carryingAmount: "-$100.00",
    initiatedBy: "Noah Clark",
    noOfMatches: 3,
  },
  {
    id: "Invoice-2024-as098b",
    period: getYesterdayDate(),
    status: "Paid",
    client: "Sophia Walker",
    location: "Denver, USA",
    deposits: "$750.00",
    withdrawals: "$200.00",
    carryingAmount: "$550.00",
    initiatedBy: "Isabella Hall",
    noOfMatches: 9,
  },
  {
    id: "Invoice-2024-ty345n",
    period: getYesterdayDate(),
    status: "Upcoming",
    client: "Mason Scott",
    location: "Austin, USA",
    deposits: "$650.00",
    withdrawals: "$300.00",
    carryingAmount: "$350.00",
    initiatedBy: "Harper Wright",
    noOfMatches: 6,
  },
  {
    id: "Invoice-2024-vb764m",
    period: getYesterdayDate(),
    status: "Paid",
    client: "Avery Young",
    location: "Phoenix, USA",
    deposits: "$550.00",
    withdrawals: "$100.00",
    carryingAmount: "$450.00",
    initiatedBy: "Ella Green",
    noOfMatches: 5,
  },
  {
    id: "Invoice-2024-op432x",
    period: getYesterdayDate(),
    status: "Declined",
    client: "Benjamin Hill",
    location: "Boston, USA",
    deposits: "$250.00",
    withdrawals: "$400.00",
    carryingAmount: "-$150.00",
    initiatedBy: "Jack Adams",
    noOfMatches: 2,
  },
  {
    id: "Invoice-2024-ui678t",
    period: getYesterdayDate(),
    status: "Paid",
    client: "Chloe Carter",
    location: "Philadelphia, USA",
    deposits: "$900.00",
    withdrawals: "$450.00",
    carryingAmount: "$450.00",
    initiatedBy: "Lily Baker",
    noOfMatches: 8,
  },
  {
    id: "Invoice-2024-re231d",
    period: getYesterdayDate(),
    status: "Upcoming",
    client: "Henry Turner",
    location: "Las Vegas, USA",
    deposits: "$500.00",
    withdrawals: "$200.00",
    carryingAmount: "$300.00",
    initiatedBy: "Zoe Nelson",
    noOfMatches: 4,
  },
];


export default function CTrtSalesShow() {
  const [visibleRecords, setVisibleRecords] = useState(5);
  const [selectedDate, setSelectedDate] = useState(getYesterdayDate());
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const isShowingAll = visibleRecords >= invoices.length;

  return (
    <div className="mx-auto bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center text-gray-600 text-sm mb-4">
        <FaHome className="mr-1 text-blue-500" />
        <Link to="/" className="hover:underline">Home</Link>
        <FaChevronRight className="mx-2 text-gray-400" />
        <Link to="/clients" className="hover:underline text-blue-400">Clients</Link>
        <FaChevronRight className="mx-2 text-gray-400" />
        <span className="text-green-500">Machines Summary</span>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">TRT Sales</h2>
        <div className="w-3/4">
          <input
            className="border border-gray-800 p-2 rounded"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <button className="bg-gray-200 px-3 py-2 rounded flex items-center gap-2 hover:bg-gray-300">
          <FaDownload /> Download All
        </button>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b font-semibold">
            <th className="py-2">Invoice</th>
            <th className="py-2">Date</th>
            <th className="py-2">Client</th>
            <th className="py-2">Location</th>
            <th className="py-2">Deposits</th>
            <th className="py-2">Withdrawals</th>
            <th className="py-2">Carrying Amount</th>
            <th className="py-2 text-center">Actions </th>
          </tr>
        </thead>
        <tbody>
          {invoices.slice(0, visibleRecords).map((invoice, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-100 cursor-pointer"
              onClick={() => setSelectedInvoice(invoice)} // Open modal with selected record
            >
              <td className="py-3">{invoice.id}</td>
              <td className="py-3">{selectedDate}</td>
              <td className="py-3">{invoice.client}</td>
              <td className="py-3">{invoice.location}</td>
              <td className="py-3">{invoice.deposits}</td>
              <td className="py-3">{invoice.withdrawals}</td>
              <td className="py-3">{invoice.carryingAmount}</td>
              <td className="py-3 text-center">
                <button className="flex text-blue-500 hover:text-blue-700">
          <FaEye className="mr-4 text-green-800"/>

                  <FaDownload />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-center">
        <button
          onClick={() => setVisibleRecords(isShowingAll ? 5 : invoices.length)}
          className="text-blue-500 hover:underline"
        >
          {isShowingAll ? "Show Less" : "View all "}
        </button>
      </div>

      {/* Modal for Invoice Details */}
      {selectedInvoice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={() => setSelectedInvoice(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              <FaTimes size={20} />
            </button>
            <h3 className="text-xl font-semibold mb-3">{selectedInvoice.client}</h3>
            <p><strong>Invoice ID:</strong> {selectedInvoice.id}</p>
            <p><strong>Date:</strong> {selectedDate}</p>
            <p><strong>Location:</strong> {selectedInvoice.location}</p>
            <p><strong>Client:</strong> {selectedInvoice.client}</p>
            <p><strong>Deposits:</strong> {selectedInvoice.deposits}</p>
            <p><strong>Withdrawals:</strong> {selectedInvoice.withdrawals}</p>
            <p><strong>Carrying Amount:</strong> {selectedInvoice.carryingAmount}</p>
            <p><strong>Initiated By:</strong> {selectedInvoice.initiatedBy}</p>
            <p><strong>No. of Matches:</strong> {selectedInvoice.noOfMatches}</p>
          </div>
        </div>
      )}
    </div>
  );
}
