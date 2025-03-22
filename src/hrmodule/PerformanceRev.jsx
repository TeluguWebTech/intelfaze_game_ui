import React, { useState } from 'react';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const employeePerformanceReviews = [
  {
    employeeId: "EMP1001",
    name: "John Carter",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    department: "HR",
    designation: "HR Manager",
    tasksAssigned: [
      { task: "Employee Onboarding", deadline: "2025-02-05", status: "Completed", rating: 4.7 },
      { task: "HR Policy Update", deadline: "2025-02-20", status: "Completed", rating: 4.5 },
      { task: "Employee Engagement Program", deadline: "2025-02-28", status: "Pending", rating: null },
    ],
    overallPerformanceRating: 4.6,
    feedback: "Great leadership in HR activities. Needs improvement in implementing engagement programs.",
    lastReviewDate: "2025-03-01",
  },
  {
    employeeId: "EMP1002",
    name: "Sophia Miller",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    department: "Finance",
    designation: "Senior Accountant",
    tasksAssigned: [
      { task: "Quarterly Budget Report", deadline: "2025-01-30", status: "Completed", rating: 4.8 },
      { task: "Audit Preparation", deadline: "2025-02-15", status: "Completed", rating: 4.2 },
      { task: "Tax Filing", deadline: "2025-02-25", status: "Pending", rating: null },
    ],
    overallPerformanceRating: 4.5,
    feedback: "Excellent in budget planning but needs to improve on audit documentation.",
    lastReviewDate: "2025-03-02",
  },
  {
    employeeId: "EMP1003",
    name: "Michael Davis",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    department: "IT",
    designation: "Software Engineer",
    tasksAssigned: [
      { task: "React.js Feature Development", deadline: "2025-01-25", status: "Completed", rating: 4.9 },
      { task: "API Optimization", deadline: "2025-02-10", status: "Completed", rating: 4.7 },
      { task: "Database Migration", deadline: "2025-02-28", status: "In Progress", rating: null },
    ],
    overallPerformanceRating: 4.8,
    feedback: "Exceptional coding skills. Needs to improve communication on task updates.",
    lastReviewDate: "2025-03-03",
  },
  {
    employeeId: "EMP1004",
    name: "Emma Johnson",
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
    department: "Marketing",
    designation: "Marketing Executive",
    tasksAssigned: [
      { task: "Social Media Campaign", deadline: "2025-02-05", status: "Completed", rating: 4.3 },
      { task: "Market Research", deadline: "2025-02-15", status: "Completed", rating: 4.0 },
      { task: "Product Launch Strategy", deadline: "2025-03-01", status: "Pending", rating: null },
    ],
    overallPerformanceRating: 4.2,
    feedback: "Creative marketing strategies. Needs improvement in analytical reports.",
    lastReviewDate: "2025-03-04",
  },
  {
    employeeId: "EMP1005",
    name: "David Brown",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
    department: "Operations",
    designation: "Operations Manager",
    tasksAssigned: [
      { task: "Logistics Planning", deadline: "2025-01-28", status: "Completed", rating: 4.6 },
      { task: "Inventory Audit", deadline: "2025-02-12", status: "Completed", rating: 4.4 },
      { task: "Supply Chain Optimization", deadline: "2025-02-28", status: "In Progress", rating: null },
    ],
    overallPerformanceRating: 4.5,
    feedback: "Strong operational management. Needs to work on faster implementation of process optimizations.",
    lastReviewDate: "2025-03-05",
  },
  {
    employeeId: "EMP1006",
    name: "Olivia Wilson",
    profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
    department: "Customer Support",
    designation: "Support Lead",
    tasksAssigned: [
      { task: "Customer Satisfaction Survey", deadline: "2025-01-30", status: "Completed", rating: 4.5 },
      { task: "Issue Resolution Training", deadline: "2025-02-20", status: "Completed", rating: 4.3 },
      { task: "Support Ticket Analysis", deadline: "2025-02-28", status: "Pending", rating: null },
    ],
    overallPerformanceRating: 4.4,
    feedback: "Great customer handling but needs to reduce response time for support tickets.",
    lastReviewDate: "2025-03-06",
  },
];

const fieldStaffPerformanceReviews = [
  {
    employeeId: "EMP1007",
    name: "James Anderson",
    profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
    department: "Field Operations",
    designation: "Field Cash Collector",
    tasksAssigned: [
      { task: "Cash Deposits", deadline: "2025-02-10", status: "Completed", rating: 4.8 },
      { task: "Cash Withdrawals", deadline: "2025-02-15", status: "Completed", rating: 4.6 },
      { task: "ATM Refill", deadline: "2025-02-28", status: "Pending", rating: null },
    ],
    overallPerformanceRating: 4.7,
    feedback: "Efficient in handling cash but needs to improve on documentation accuracy.",
    lastReviewDate: "2025-03-07",
  },
  {
    employeeId: "EMP1008",
    name: "Ava Martinez",
    profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
    department: "Field Operations",
    designation: "Cash Handling Officer",
    tasksAssigned: [
      { task: "Cash Deposits", deadline: "2025-02-12", status: "Completed", rating: 4.5 },
      { task: "Cash Withdrawals", deadline: "2025-02-18", status: "Completed", rating: 4.4 },
      { task: "End-of-Day Reconciliation", deadline: "2025-02-28", status: "Pending", rating: null },
    ],
    overallPerformanceRating: 4.5,
    feedback: "Reliable cash handling but needs better speed in processing transactions.",
    lastReviewDate: "2025-03-08",
  },
  {
    employeeId: "EMP1009",
    name: "Liam White",
    profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
    department: "Field Operations",
    designation: "Senior Field Executive",
    tasksAssigned: [
      { task: "Cash Deposits", deadline: "2025-02-05", status: "Completed", rating: 4.7 },
      { task: "Cash Withdrawals", deadline: "2025-02-10", status: "Completed", rating: 4.6 },
      { task: "Cash Flow Monitoring", deadline: "2025-02-28", status: "In Progress", rating: null },
    ],
    overallPerformanceRating: 4.6,
    feedback: "Excellent cash management skills, but should improve communication with clients.",
    lastReviewDate: "2025-03-09",
  },
  {
    employeeId: "EMP1010",
    name: "Sophia Carter",
    profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
    department: "Field Operations",
    designation: "Regional Cash Supervisor",
    tasksAssigned: [
      { task: "Cash Deposits", deadline: "2025-02-08", status: "Completed", rating: 4.9 },
      { task: "Cash Withdrawals", deadline: "2025-02-15", status: "Completed", rating: 4.8 },
      { task: "Audit Cash Transactions", deadline: "2025-02-28", status: "Pending", rating: null },
    ],
    overallPerformanceRating: 4.8,
    feedback: "Highly efficient and detail-oriented, but needs better delegation of tasks.",
    lastReviewDate: "2025-03-10",
  },
];


// Combine both datasets
const allEmployees = [...employeePerformanceReviews, ...fieldStaffPerformanceReviews];

const PerformanceRev = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Number of items per page

  // Filter employees based on search query and department
  const filteredEmployees = allEmployees.filter((employee) => {
    const matchesSearch = employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         employee.employeeId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment ? employee.department === selectedDepartment : true;
    return matchesSearch && matchesDepartment;
  });

  // Get unique departments for the filter dropdown
  const departments = [...new Set(allEmployees.map((employee) => employee.department))];

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEmployees.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
          <div className="flex items-center text-gray-600 text-sm mb-4">
                <FaHome className="mr-1 text-blue-500" />
                <Link to="/" className="hover:underline">Home</Link>
                <FaChevronRight className="mx-2 text-gray-400" />
                <Link to="/hr" className="hover:underline">HR</Link>
                <FaChevronRight className="mx-2 text-gray-400" />
                <span className="text-orange-500">Employee Performance</span>
              </div>
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">Employee Performance & Reviews</h1>

      {/* Filters */}
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
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Profile</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Employee ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Department</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Designation</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Overall Rating</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Last Review Date</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((employee) => (
              <tr
                key={employee.employeeId}
                className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedEmployee(employee)}
              >
                <td className="px-6 py-4">
                  <img
                    src={employee.profileImage}
                    alt={employee.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">{employee.employeeId}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{employee.name}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{employee.department}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{employee.designation}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{employee.overallPerformanceRating}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{employee.lastReviewDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
        >
          Previous
        </button>
        {Array.from({ length: Math.ceil(filteredEmployees.length / itemsPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`px-4 py-2 mx-1 ${
              currentPage === i + 1 ? 'bg-blue-700' : 'bg-blue-500'
            } text-white rounded-md`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredEmployees.length / itemsPerPage)}
          className="px-4 py-2 mx-1 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
        >
          Next
        </button>
      </div>

      {/* Modal for Task Details */}
      {selectedEmployee && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-2xl">
            <div className="flex items-center mb-4">
              <img
                src={selectedEmployee.profileImage}
                alt={selectedEmployee.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-bold">{selectedEmployee.name}</h2>
                <p className="text-sm text-gray-600">{selectedEmployee.designation}</p>
              </div>
            </div>
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Task</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Deadline</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Rating</th>
                </tr>
              </thead>
              <tbody>
                {selectedEmployee.tasksAssigned.map((task, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-4 py-2 text-sm text-gray-700">{task.task}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{task.deadline}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{task.status}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{task.rating || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Feedback:</h3>
              <p className="text-sm text-gray-700">{selectedEmployee.feedback}</p>
            </div>
            <button
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md w-full hover:bg-red-600"
              onClick={() => setSelectedEmployee(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceRev;