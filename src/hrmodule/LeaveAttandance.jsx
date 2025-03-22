import React, { useState } from 'react';
import { FaHome, FaChevronRight, FaEye, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const employeeAttendance = [
  { image: "https://randomuser.me/api/portraits/men/22.jpg", employeeId: "EMP1001", name: "John Carter", department: "HR", totalDays: 30, present: 26, absent: 2, leaves: 2 },
  { image: "https://randomuser.me/api/portraits/women/45.jpg", employeeId: "EMP1002", name: "Sophia Miller", department: "Finance", totalDays: 30, present: 28, absent: 1, leaves: 1 },
  { image: "https://randomuser.me/api/portraits/men/33.jpg", employeeId: "EMP1003", name: "Michael Davis", department: "Engineering", totalDays: 30, present: 25, absent: 3, leaves: 2 },
  { image: "https://randomuser.me/api/portraits/women/30.jpg", employeeId: "EMP1004", name: "Emma Johnson", department: "Marketing", totalDays: 30, present: 27, absent: 2, leaves: 1 },
  { image: "https://randomuser.me/api/portraits/men/44.jpg", employeeId: "EMP1005", name: "David Brown", department: "Operations", totalDays: 30, present: 29, absent: 0, leaves: 1 },
  { image: "https://randomuser.me/api/portraits/women/15.jpg", employeeId: "EMP1006", name: "Olivia Wilson", department: "Finance", totalDays: 30, present: 26, absent: 3, leaves: 1 },
  { image: "https://randomuser.me/api/portraits/men/25.jpg", employeeId: "EMP1007", name: "James Anderson", department: "Engineering", totalDays: 30, present: 24, absent: 4, leaves: 2 },
  { image: "https://randomuser.me/api/portraits/women/50.jpg", employeeId: "EMP1008", name: "Sophia White", department: "Marketing", totalDays: 30, present: 27, absent: 2, leaves: 1 },
  { image: "https://randomuser.me/api/portraits/men/19.jpg", employeeId: "EMP1009", name: "Daniel Lee", department: "HR", totalDays: 30, present: 26, absent: 2, leaves: 2 },
  { image: "https://randomuser.me/api/portraits/women/40.jpg", employeeId: "EMP1010", name: "Isabella Martinez", department: "Operations", totalDays: 30, present: 28, absent: 1, leaves: 1 },
];

const employeeLeaves = [
  { image: "https://randomuser.me/api/portraits/men/22.jpg", employeeId: "EMP1001", name: "John Carter", department: "HR", sickLeave: 1, casualLeave: 1, earnedLeave: 0 },
  { image: "https://randomuser.me/api/portraits/women/45.jpg", employeeId: "EMP1002", name: "Sophia Miller", department: "Finance", sickLeave: 1, casualLeave: 0, earnedLeave: 0 },
  { image: "https://randomuser.me/api/portraits/men/33.jpg", employeeId: "EMP1003", name: "Michael Davis", department: "Engineering", sickLeave: 1, casualLeave: 1, earnedLeave: 0 },
  { image: "https://randomuser.me/api/portraits/women/30.jpg", employeeId: "EMP1004", name: "Emma Johnson", department: "Marketing", sickLeave: 0, casualLeave: 1, earnedLeave: 0 },
  { image: "https://randomuser.me/api/portraits/men/44.jpg", employeeId: "EMP1005", name: "David Brown", department: "Operations", sickLeave: 0, casualLeave: 0, earnedLeave: 1 },
  { image: "https://randomuser.me/api/portraits/women/15.jpg", employeeId: "EMP1006", name: "Olivia Wilson", department: "Finance", sickLeave: 1, casualLeave: 0, earnedLeave: 0 },
  { image: "https://randomuser.me/api/portraits/men/25.jpg", employeeId: "EMP1007", name: "James Anderson", department: "Engineering", sickLeave: 1, casualLeave: 1, earnedLeave: 0 },
  { image: "https://randomuser.me/api/portraits/women/50.jpg", employeeId: "EMP1008", name: "Sophia White", department: "Marketing", sickLeave: 0, casualLeave: 1, earnedLeave: 0 },
  { image: "https://randomuser.me/api/portraits/men/19.jpg", employeeId: "EMP1009", name: "Daniel Lee", department: "HR", sickLeave: 1, casualLeave: 1, earnedLeave: 0 },
  { image: "https://randomuser.me/api/portraits/women/40.jpg", employeeId: "EMP1010", name: "Isabella Martinez", department: "Operations", sickLeave: 0, casualLeave: 1, earnedLeave: 0 },
];

const LeaveAttandance = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [activeTab, setActiveTab] = useState('attendance'); // Tabs for attendance and leaves
  const [searchQuery, setSearchQuery] = useState(''); // Search query
  const [selectedDepartment, setSelectedDepartment] = useState(''); // Department filter
  const recordsPerPage = 5;

  // Determine which data to use based on the active tab
  const data = activeTab === 'attendance' ? employeeAttendance : employeeLeaves;

  // Filter data based on search query and department
  const filteredData = data.filter((employee) => {
    const matchesSearch = employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         employee.employeeId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment ? employee.department === selectedDepartment : true;
    return matchesSearch && matchesDepartment;
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  // Get current records
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle view employee details
  const handleViewEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  // Handle close modal
  const handleCloseModal = () => {
    setSelectedEmployee(null);
  };

  // Get unique departments for the filter dropdown
  const departments = [...new Set(data.map((employee) => employee.department))];

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <FaHome className="mr-1 text-blue-500" />
          <Link to="/">Home</Link>
          <FaChevronRight className="mx-2 text-gray-400" />
          <Link to="/hr">
            <span className="text-gray-500">HR</span>
          </Link>
          <FaChevronRight className="mx-2 text-gray-400" />
          <span className="text-orange-500">Employee Register</span>
        </div>

        {/* Tabs for Attendance and Leaves */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('attendance')}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === 'attendance' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Attendance
          </button>
          <button
            onClick={() => setActiveTab('leaves')}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === 'leaves' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Leaves
          </button>
        </div>

        {/* Search and Filter Section */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Departments</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden pr-8 pl-8">
            <thead>
              <tr className="bg-pink-700 text-white text-left">
                <th className="p-3 font-semibold">Image</th>
                <th className="p-3 font-semibold">Employee ID</th>
                <th className="p-3 font-semibold">Name</th>
                <th className="p-3 font-semibold">Department</th>
                {activeTab === 'attendance' ? (
                  <>
                    <th className="p-3 font-semibold">Total Days</th>
                    <th className="p-3 font-semibold">Present</th>
                    <th className="p-3 font-semibold">Absent</th>
                    <th className="p-3 font-semibold">Leaves</th>
                  </>
                ) : (
                  <>
                    <th className="p-3 font-semibold">Sick Leave</th>
                    <th className="p-3 font-semibold">Casual Leave</th>
                    <th className="p-3 font-semibold">Earned Leave</th>
                  </>
                )}
                <th className="p-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.map((record, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition-all">
                  <td className="p-3 cursor-pointer" onClick={() => handleViewEmployee(record)}>
                    <img src={record.image} alt={record.name} className="w-10 h-10 rounded-full" />
                  </td>
                  <td className="p-3 text-green-950 cursor-pointer" onClick={() => handleViewEmployee(record)}>
                    {record.employeeId}
                  </td>
                  <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewEmployee(record)}>
                    {record.name}
                  </td>
                  <td className="p-3 text-gray-700 cursor-pointer" onClick={() => handleViewEmployee(record)}>
                    {record.department}
                  </td>
                  {activeTab === 'attendance' ? (
                    <>
                      <td className="p-3 text-gray-700">{record.totalDays}</td>
                      <td className="p-3 text-gray-700">{record.present}</td>
                      <td className="p-3 text-gray-700">{record.absent}</td>
                      <td className="p-3 text-gray-700">{record.leaves}</td>
                    </>
                  ) : (
                    <>
                      <td className="p-3 text-gray-700">{record.sickLeave}</td>
                      <td className="p-3 text-gray-700">{record.casualLeave}</td>
                      <td className="p-3 text-gray-700">{record.earnedLeave}</td>
                    </>
                  )}
                  <td className="p-3 space-x-2">
                    <button className="text-blue-500 hover:text-blue-700" onClick={() => handleViewEmployee(record)}>
                      <FaEye />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                  </td>
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
              <p><strong>Employee ID:</strong> {selectedEmployee.employeeId}</p>
              <p><strong>Department:</strong> {selectedEmployee.department}</p>
              {activeTab === 'attendance' ? (
                <>
                  <p><strong>Total Days:</strong> {selectedEmployee.totalDays}</p>
                  <p><strong>Present:</strong> {selectedEmployee.present}</p>
                  <p><strong>Absent:</strong> {selectedEmployee.absent}</p>
                  <p><strong>Leaves:</strong> {selectedEmployee.leaves}</p>
                </>
              ) : (
                <>
                  <p><strong>Sick Leave:</strong> {selectedEmployee.sickLeave}</p>
                  <p><strong>Casual Leave:</strong> {selectedEmployee.casualLeave}</p>
                  <p><strong>Earned Leave:</strong> {selectedEmployee.earnedLeave}</p>
                </>
              )}
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaveAttandance;