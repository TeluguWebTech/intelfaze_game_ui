import React, { useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";

const getYesterdayDate = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split("T")[0];
};

// Sample data with more records
const allEmp = [
  { id: "EMP-001", name: "John Doe", department: "HR", location: "Texas", contact: "+994 50 123 45 67", image: "https://i.pravatar.cc/50?img=1" },
  { id: "EMP-002", name: "Jane Smith", department: "Finance", location: "New York", contact: "+994 55 987 65 43", image: "https://i.pravatar.cc/50?img=2" },
  { id: "EMP-003", name: "Alice Johnson", department: "IT", location: "Sumqayit", contact: "+994 70 555 44 33", image: "https://i.pravatar.cc/50?img=3" },
  { id: "EMP-004", name: "Bob Brown", department: "Marketing", location: "Texas", contact: "+994 51 222 33 44", image: "https://i.pravatar.cc/50?img=4" },
  { id: "EMP-005", name: "Charlie Davis", department: "Operations", location: "New York", contact: "+994 55 777 88 99", image: "https://i.pravatar.cc/50?img=5" },
  { id: "EMP-006", name: "Eve White", department: "HR", location: "Texas", contact: "+994 50 999 88 77", image: "https://i.pravatar.cc/50?img=6" },
  { id: "EMP-007", name: "Frank Wilson", department: "Finance", location: "Sumqayit", contact: "+994 70 111 22 33", image: "https://i.pravatar.cc/50?img=7" },
  { id: "EMP-008", name: "Grace Lee", department: "IT", location: "Texas", contact: "+994 51 444 55 66", image: "https://i.pravatar.cc/50?img=8" },
  { id: "EMP-009", name: "Henry Moore", department: "Marketing", location: "New York", contact: "+994 55 666 77 88", image: "https://i.pravatar.cc/50?img=9" },
  { id: "EMP-010", name: "Ivy Taylor", department: "Operations", location: "Texas", contact: "+994 50 888 99 00", image: "https://i.pravatar.cc/50?img=10" },
];

const departments = [
  { id: "DEPT-001", name: "HR", manager: "John Doe", employees: 10, location: "Texas", image: "https://randomuser.me/api/portraits/men/11.jpg" },
  { id: "DEPT-002", name: "Finance", manager: "Jane Smith", employees: 8, location: "New York", image: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: "DEPT-003", name: "IT", manager: "Alice Johnson", employees: 12, location: "Sumqayit", image: "https://randomuser.me/api/portraits/women/13.jpg" },
  { id: "DEPT-004", name: "Marketing", manager: "Bob Brown", employees: 15, location: "Texas", image: "https://randomuser.me/api/portraits/men/14.jpg" },
  { id: "DEPT-005", name: "Operations", manager: "Charlie Davis", employees: 7, location: "New York", image: "https://randomuser.me/api/portraits/men/15.jpg" },
];

const attendance = [
  { id: "ATT-001", date: getYesterdayDate(), employee: "John Doe", status: "Present", hoursWorked: 8, image: "https://randomuser.me/api/portraits/men/21.jpg" },
  { id: "ATT-002", date: getYesterdayDate(), employee: "Jane Smith", status: "Absent", hoursWorked: 0, image: "https://randomuser.me/api/portraits/women/22.jpg" },
  { id: "ATT-003", date: getYesterdayDate(), employee: "Alice Johnson", status: "Present", hoursWorked: 7, image: "https://randomuser.me/api/portraits/women/23.jpg" },
  { id: "ATT-004", date: getYesterdayDate(), employee: "Bob Brown", status: "Present", hoursWorked: 8, image: "https://randomuser.me/api/portraits/men/24.jpg" },
  { id: "ATT-005", date: getYesterdayDate(), employee: "Charlie Davis", status: "Late", hoursWorked: 6, image: "https://randomuser.me/api/portraits/men/25.jpg" },
];

const performance = [
  { id: "PERF-001", employee: "John Doe", department: "HR", rating: "4.5/5", feedback: "Excellent", image: "https://randomuser.me/api/portraits/men/11.jpg" },
  { id: "PERF-002", employee: "Jane Smith", department: "Finance", rating: "4.0/5", feedback: "Good", image: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: "PERF-003", employee: "Alice Johnson", department: "IT", rating: "4.8/5", feedback: "Outstanding", image: "https://randomuser.me/api/portraits/women/13.jpg" },
  { id: "PERF-004", employee: "Bob Brown", department: "Marketing", rating: "3.5/5", feedback: "Needs Improvement", image: "https://randomuser.me/api/portraits/men/14.jpg" },
  { id: "PERF-005", employee: "Charlie Davis", department: "Operations", rating: "4.2/5", feedback: "Very Good", image: "https://randomuser.me/api/portraits/men/15.jpg" },
];

const newJoinings = [
  { id: "JOIN-001", name: "Eve White", department: "HR", joiningDate: "2023-10-01", location: "Texas", image: "https://randomuser.me/api/portraits/women/21.jpg" },
  { id: "JOIN-002", name: "Frank Wilson", department: "Finance", joiningDate: "2023-10-05", location: "Sumqayit", image: "https://randomuser.me/api/portraits/men/22.jpg" },
  { id: "JOIN-003", name: "Grace Lee", department: "IT", joiningDate: "2023-10-10", location: "Texas", image: "https://randomuser.me/api/portraits/women/23.jpg" },
  { id: "JOIN-004", name: "Henry Moore", department: "Marketing", joiningDate: "2023-10-15", location: "New York", image: "https://randomuser.me/api/portraits/men/24.jpg" },
  { id: "JOIN-005", name: "Ivy Taylor", department: "Operations", joiningDate: "2023-10-20", location: "Texas", image: "https://randomuser.me/api/portraits/women/25.jpg" },
];

const HrAccordian = () => {
  const [activeTable, setActiveTable] = useState("All Employees");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedDate, setSelectedDate] = useState(getYesterdayDate());

  const recordsPerPage = 5;

  const tables = {
    "All Employees": {
      data: allEmp,
      columns: ["Profile", "Employee ID", "Name", "Department", "Location", "Contact", "Action"],
    },
    // "Departments": {
    //   data: departments,
    //   columns: ["Profile", "Department ID", "Name", "Manager", "Employees", "Location"],
    // },
    "Attendance": {
      data: attendance,
      columns: ["Profile", "Attendance ID", "Date", "Employee", "Status", "Hours Worked"],
    },
    "Top Performers": {
      data: performance,
      columns: ["Profile", "Performance ID", "Employee", "Department", "Rating", "Feedback"],
    },
    "New Joinings": {
      data: newJoinings,
      columns: ["Profile", "Joining ID", "Name", "Department", "Joining Date", "Location"],
    },
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

  const handleViewEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleCloseModal = () => {
    setSelectedEmployee(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {/* <input
          className="border border-gray-800 p-2 rounded"
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        /> */}
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
                {tables[activeTable].columns.includes("Profile") && (
                  <td className="p-3 cursor-pointer" onClick={() => handleViewEmployee(row)}>
                    <img src={row.image} alt={row.name} className="w-10 h-10 rounded-full" />
                  </td>
                )}
                {Object.keys(row)
                  .filter((key) => key !== "image")
                  .map((key, colIndex) => (
                    <td key={colIndex} className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewEmployee(row)}>
                      {row[key]}
                    </td>
                  ))}
                {activeTable === "All Employees" && (
                  <td className="p-3 space-x-2">
                    <button className="text-blue-500 hover:text-blue-700" onClick={() => handleViewEmployee(row)}>
                      <FaEye />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                  </td>
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

      {/* Modal for Employee Details */}
      {selectedEmployee && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-2">Employee Details</h2>
            <img src={selectedEmployee.image} alt={selectedEmployee.name} className="w-20 h-20 rounded-full mx-auto" />
            <p className="mt-3"><strong>Name:</strong> {selectedEmployee.name}</p>
            <p><strong>Department:</strong> {selectedEmployee.department}</p>
            <p><strong>Location:</strong> {selectedEmployee.location}</p>
            <p><strong>Contact:</strong> {selectedEmployee.contact}</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HrAccordian;