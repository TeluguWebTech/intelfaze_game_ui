import React, { useState } from 'react';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const employeePayroll = [
  {
    employeeId: "EMP1001",
    name: "John Carter",
    department: "HR",
    designation: "HR Manager",
    joiningDate: "2020-06-15",
    basicSalary: 50000,
    allowances: 5000,
    deductions: 3000,
    bonus: 2000,
    grossSalary: 55000,
    netSalary: 52000,
    image: "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    employeeId: "EMP1002",
    name: "Sophia Miller",
    department: "Finance",
    designation: "Senior Accountant",
    joiningDate: "2019-09-01",
    basicSalary: 55000,
    allowances: 6000,
    deductions: 4000,
    bonus: 2500,
    grossSalary: 63500,
    netSalary: 59500,
    image: "https://randomuser.me/api/portraits/women/20.jpg"
  },
  {
    employeeId: "EMP1003",
    name: "Michael Davis",
    department: "IT",
    designation: "Software Engineer",
    joiningDate: "2021-02-10",
    basicSalary: 60000,
    allowances: 8000,
    deductions: 5000,
    bonus: 3000,
    grossSalary: 68000,
    netSalary: 63000,
    image: "https://randomuser.me/api/portraits/men/30.jpg"
  },
  {
    employeeId: "EMP1004",
    name: "Emma Johnson",
    department: "Marketing",
    designation: "Marketing Executive",
    joiningDate: "2022-04-18",
    basicSalary: 52000,
    allowances: 4000,
    deductions: 3500,
    bonus: 1500,
    grossSalary: 57500,
    netSalary: 54000,
    image: "https://randomuser.me/api/portraits/women/40.jpg"
  },
  {
    employeeId: "EMP1005",
    name: "David Brown",
    department: "Operations",
    designation: "Operations Manager",
    joiningDate: "2018-11-25",
    basicSalary: 65000,
    allowances: 7000,
    deductions: 5500,
    bonus: 4000,
    grossSalary: 76000,
    netSalary: 70500,
    image: "https://randomuser.me/api/portraits/men/50.jpg"
  },
  {
    employeeId: "EMP1006",
    name: "Olivia Wilson",
    department: "Customer Support",
    designation: "Support Lead",
    joiningDate: "2020-07-12",
    basicSalary: 48000,
    allowances: 5000,
    deductions: 3000,
    bonus: 2000,
    grossSalary: 55000,
    netSalary: 52000,
    image: "https://randomuser.me/api/portraits/women/60.jpg"
  },
];

const EmpPayRol = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Filter employees based on search query and department
  const filteredEmployees = employeePayroll.filter((employee) => {
    const matchesSearch = employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         employee.employeeId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment ? employee.department === selectedDepartment : true;
    return matchesSearch && matchesDepartment;
  });

  // Get unique departments for the filter dropdown
  const departments = [...new Set(employeePayroll.map((employee) => employee.department))];

  // Format currency in US dollars
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Breadcrumb */}
      <div className="flex items-center text-gray-600 text-sm mb-4">
        <FaHome className="mr-1 text-blue-500" />
        <Link to="/" className="hover:underline">Home</Link>
        <FaChevronRight className="mx-2 text-gray-400" />
        <Link to="/hr" className="hover:underline">HR</Link>
        <FaChevronRight className="mx-2 text-gray-400" />
        <span className="text-gray-500">Employee Payroll</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Employee Payroll</h2>
        <div className="flex gap-4">
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
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredEmployees.map((employee, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200 cursor-pointer"
            onClick={() => setSelectedEmployee(employee)}
          >
            <img
              src={employee.image}
              alt={employee.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-center">{employee.name}</h3>
            <p className="text-sm text-gray-600 text-center">{employee.designation}</p>
            <p className="text-sm text-gray-600"><strong>Department:</strong> {employee.department}</p>
            <p className="text-sm text-gray-600"><strong>Employee ID:</strong> {employee.employeeId}</p>
            <p className="text-sm text-gray-600"><strong>Net Salary:</strong> {formatCurrency(employee.netSalary)}</p>
          </div>
        ))}
      </div>

      {/* Modal for Employee Payroll Details */}
      {selectedEmployee && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Payroll Details</h2>
            <img
              src={selectedEmployee.image}
              alt={selectedEmployee.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <table className="w-full text-left">
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="py-2 font-semibold">Name</td>
                  <td className="py-2">{selectedEmployee.name}</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-2 font-semibold">Employee ID</td>
                  <td className="py-2">{selectedEmployee.employeeId}</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-2 font-semibold">Department</td>
                  <td className="py-2">{selectedEmployee.department}</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-2 font-semibold">Designation</td>
                  <td className="py-2">{selectedEmployee.designation}</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-2 font-semibold">Joining Date</td>
                  <td className="py-2">{selectedEmployee.joiningDate}</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-2 font-semibold">Basic Salary</td>
                  <td className="py-2">{formatCurrency(selectedEmployee.basicSalary)}</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-2 font-semibold">Allowances</td>
                  <td className="py-2">{formatCurrency(selectedEmployee.allowances)}</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-2 font-semibold">Deductions</td>
                  <td className="py-2">{formatCurrency(selectedEmployee.deductions)}</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-2 font-semibold">Bonus</td>
                  <td className="py-2">{formatCurrency(selectedEmployee.bonus)}</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-2 font-semibold">Gross Salary</td>
                  <td className="py-2">{formatCurrency(selectedEmployee.grossSalary)}</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-2 font-semibold">Net Salary</td>
                  <td className="py-2">{formatCurrency(selectedEmployee.netSalary)}</td>
                </tr>
              </tbody>
            </table>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md w-full hover:bg-red-600"
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

export default EmpPayRol;