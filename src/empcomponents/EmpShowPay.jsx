import React from "react";

const roles = [
  {
    name: "Administrator",
    type: "Default role",
    description: "Manages system settings and user access, ensures system stability.",
    count: "1 person",
    icon: "🔹",
  },
  {
    name: "Viewer",
    type: "Default role",
    description: "Can view data but doesn’t have editing privileges.",
    count: "32 people",
    icon: "👀",
  },
  {
    name: "Remote Developer",
    type: "Remote role",
    description: "Provides assistance and resolves customer inquiries and issues.",
    count: "6 people",
    icon: "💻",
  },
  {
    name: "Customer Support",
    type: "Default role",
    description: "Provides assistance and resolves customer inquiries and issues.",
    count: "32 people",
    icon: "📞",
  },
  {
    name: "Project Manager",
    type: "Default role",
    description: "Oversees projects, ensures they’re on time and within budget.",
    count: "6 people",
    icon: "📋",
  },
  {
    name: "Remote Designer",
    type: "Remote role",
    description: "Creates visual designs remotely for various projects.",
    count: "6 people",
    icon: "🎨",
  },
];

const EmpShowPay = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Employees</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">New Role</button>
        </div>
        <p className="text-gray-600 mb-6">Overview of all team members and roles.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{role.icon}</span>
                <h3 className="text-lg font-semibold">{role.name}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">{role.type}</p>
              <p className="text-sm text-gray-700 mb-4">{role.description}</p>
              <p className="text-sm font-medium text-gray-900">{role.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmpShowPay;
