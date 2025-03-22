import { useState } from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const employees = [
    { image: "https://randomuser.me/api/portraits/men/22.jpg", employeeId: "EMP1001", name: "John Carter", position: "Manager", contact: "+1 987 654 3210", email: "john.carter@email.com", address: "123 Main St, Los Angeles, CA", department: "Operations", salary: "$75,000", joinedDate: "2021-06-15", status: "Active" },
    { image: "https://randomuser.me/api/portraits/women/45.jpg", employeeId: "EMP1002", name: "Sophia Miller", position: "HR Specialist", contact: "+1 654 321 9870", email: "sophia.miller@email.com", address: "456 Oak St, Chicago, IL", department: "Human Resources", salary: "$65,000", joinedDate: "2022-01-10", status: "Active" },
    { image: "https://randomuser.me/api/portraits/men/33.jpg", employeeId: "EMP1003", name: "Michael Davis", position: "Software Engineer", contact: "+1 456 789 1230", email: "michael.davis@email.com", address: "789 Pine St, Seattle, WA", department: "IT", salary: "$85,000", joinedDate: "2020-09-22", status: "Active" },
    { image: "https://randomuser.me/api/portraits/women/30.jpg", employeeId: "EMP1004", name: "Emma Johnson", position: "Marketing Executive", contact: "+1 321 654 0987", email: "emma.johnson@email.com", address: "101 Maple St, New York, NY", department: "Marketing", salary: "$70,000", joinedDate: "2019-08-30", status: "Active" },
    { image: "https://randomuser.me/api/portraits/men/44.jpg", employeeId: "EMP1005", name: "David Brown", position: "Sales Representative", contact: "+1 789 456 1230", email: "david.brown@email.com", address: "250 Elm St, Boston, MA", department: "Sales", salary: "$60,000", joinedDate: "2023-02-14", status: "Active" },
    { image: "https://randomuser.me/api/portraits/women/15.jpg", employeeId: "EMP1006", name: "Olivia Wilson", position: "Finance Analyst", contact: "+1 852 963 7410", email: "olivia.wilson@email.com", address: "876 Birch St, Dallas, TX", department: "Finance", salary: "$90,000", joinedDate: "2018-05-20", status: "Active" },
    { image: "https://randomuser.me/api/portraits/men/25.jpg", employeeId: "EMP1007", name: "James Anderson", position: "Data Scientist", contact: "+1 741 852 3690", email: "james.anderson@email.com", address: "345 Cedar St, San Francisco, CA", department: "IT", salary: "$100,000", joinedDate: "2017-11-05", status: "Active" },
    { image: "https://randomuser.me/api/portraits/women/50.jpg", employeeId: "EMP1008", name: "Sophia White", position: "Customer Support", contact: "+1 951 753 1590", email: "sophia.white@email.com", address: "990 Willow St, Miami, FL", department: "Customer Support", salary: "$50,000", joinedDate: "2021-04-10", status: "Active" },
    { image: "https://randomuser.me/api/portraits/men/19.jpg", employeeId: "EMP1009", name: "Daniel Lee", position: "Legal Advisor", contact: "+1 369 258 1470", email: "daniel.lee@email.com", address: "777 Oakwood St, Denver, CO", department: "Legal", salary: "$95,000", joinedDate: "2020-07-12", status: "Active" },
    { image: "https://randomuser.me/api/portraits/women/40.jpg", employeeId: "EMP1010", name: "Isabella Martinez", position: "Product Manager", contact: "+1 963 741 8520", email: "isabella.martinez@email.com", address: "654 Aspen St, Austin, TX", department: "Product", salary: "$110,000", joinedDate: "2016-03-18", status: "Active" }
  ];
  

const TotalEmp = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const departments = ["All", ...new Set(employees.map(emp => emp.department))];

  const filteredEmployees = employees.filter(emp => 
    (filter === "All" || emp.department === filter) &&
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center text-gray-600 text-sm mb-4">
        <FaHome className="mr-1 text-blue-500" />
        <Link to="/" className="hover:underline">Home</Link>
        <FaChevronRight className="mx-2 text-gray-400" />
        <Link to="/hr" className="hover:underline">HR</Link>
        <FaChevronRight className="mx-2 text-gray-400" />
        <span className=" text-blue-800">Employees List</span>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-orange-500">Employees List</h2>

      {/* Search Input */}
      <input 
        type="text" 
        placeholder="Search by name..." 
        className="w-full p-2 mb-4 border border-gray-300 rounded-md" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />

      {/* Department Filter Buttons */}
      <div className="mb-4 flex gap-2 overflow-auto">
        {departments.map((dept) => (
          <button 
            key={dept} 
            className={`px-4 py-2 rounded-md ${filter === dept ? "bg-blue-500 text-white" : "bg-gray-200"}`} 
            onClick={() => setFilter(dept)}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Employee Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredEmployees.length > 0 ? filteredEmployees.map((employee) => (
          <div 
            key={employee.employeeId} 
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200 cursor-pointer" 
            onClick={() => setSelectedEmployee(employee)}
          >
            <div className="flex items-center gap-3 mb-3">
              <img src={employee.image} alt={employee.name} className="w-12 h-12 rounded-full border border-gray-300" />
              <div>
                <h3 className="text-lg font-semibold">{employee.name}</h3>
                <p className="text-sm text-gray-600">{employee.position}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-2"><strong>Department:</strong> {employee.department}</p>
            <p className="text-sm font-medium text-gray-900"><strong>Salary:</strong> {employee.salary}</p>
            <p className="text-sm font-medium text-gray-900"><strong>Status:</strong> {employee.status}</p>
          </div>
        )) : <p className="text-gray-600">No employees found.</p>}
      </div>

      {/* Employee Details Modal */}
      {selectedEmployee && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-2">{selectedEmployee.name} - {selectedEmployee.position}</h2>
            <img src={selectedEmployee.image} alt={selectedEmployee.name} className="w-20 h-20 rounded-full mx-auto border border-gray-300 mb-4" />
            <p className="text-gray-700"><strong>Contact:</strong> {selectedEmployee.contact}</p>
            <p className="text-gray-700"><strong>Email:</strong> {selectedEmployee.email}</p>
            <p className="text-gray-700"><strong>Department:</strong> {selectedEmployee.department}</p>
            <p className="text-gray-700"><strong>Salary:</strong> {selectedEmployee.salary}</p>
            <p className="text-gray-700"><strong>Joined Date:</strong> {selectedEmployee.joinedDate}</p>
            <p className="text-gray-700"><strong>Status:</strong> {selectedEmployee.status}</p>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md w-full" onClick={() => setSelectedEmployee(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default TotalEmp;
