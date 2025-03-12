import { useState } from "react";
import { FaEdit, FaTrash, FaEnvelope } from "react-icons/fa";

const members = [
  {
    id: 1,
    name: "Ana Simmons",
    skills: "HTML, JS, ReactJS",
    company: "Intertico",
    role: "Web, UI/UX Design",
    progress: 50,
    progressColor: "bg-blue-500",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Jessie Clarcon",
    skills: "C#, ASP.NET, MS SQL",
    company: "Agoda",
    role: "Houses & Hotels",
    progress: 70,
    progressColor: "bg-red-500",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Lebron Wayde",
    skills: "PHP, Laravel, VueJS",
    company: "RoadGee",
    role: "Transportation",
    progress: 60,
    progressColor: "bg-green-500",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Natali Goodwin",
    skills: "Python, PostgreSQL, ReactJS",
    company: "The Hill",
    role: "Insurance",
    progress: 50,
    progressColor: "bg-yellow-500",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Kevin Leonard",
    skills: "HTML, JS, ReactJS",
    company: "RoadGee",
    role: "Art Director",
    progress: 90,
    progressColor: "bg-purple-500",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const RevShowList = () => {
  const [data, setData] = useState(members);

  const handleDelete = (id) => {
    setData(data.filter((member) => member.id !== id));
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Total Revenue List</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          + New Client
        </button>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="p-3">Authors</th>
            <th className="p-3">Company</th>
            <th className="p-3">Progress</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((member) => (
            <tr key={member.id} className="border-b">
              <td className="p-3 flex items-center space-x-3">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.skills}</p>
                </div>
              </td>
              <td className="p-3">
                <p className="font-medium">{member.company}</p>
                <p className="text-sm text-gray-500">{member.role}</p>
              </td>
              <td className="p-3">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${member.progressColor}`}
                    style={{ width: `${member.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{member.progress}%</p>
              </td>
              <td className="p-3 flex space-x-3">
                <button className="text-blue-500 hover:text-blue-600">
                  <FaEnvelope />
                </button>
                <button className="text-green-500 hover:text-green-600">
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => handleDelete(member.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RevShowList;
