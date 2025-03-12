import React from "react";
import CPerform from "./CPerform";

const projects = [
  {
    id: 1,
    name: "Material XD Version",
    companyIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
    members: ["https://randomuser.me/api/portraits/men/1.jpg", "https://randomuser.me/api/portraits/women/2.jpg"],
    budget: "$14,000",
    completion: 60,
  },
  {
    id: 2,
    name: "Add Progress Track",
    companyIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    members: ["https://randomuser.me/api/portraits/men/3.jpg"],
    budget: "$3,000",
    completion: 10,
  },
  {
    id: 3,
    name: "Fix Platform Errors",
    companyIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
    members: ["https://randomuser.me/api/portraits/women/4.jpg", "https://randomuser.me/api/portraits/men/5.jpg"],
    budget: "Not set",
    completion: 100,
  },
  {
    id: 4,
    name: "Launch our Mobile App",
    companyIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    members: [
      "https://randomuser.me/api/portraits/men/6.jpg",
      "https://randomuser.me/api/portraits/women/7.jpg",
      "https://randomuser.me/api/portraits/men/8.jpg",
    ],
    budget: "$20,500",
    completion: 100,
  },
  {
    id: 5,
    name: "Add the New Pricing Page",
    companyIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    members: ["https://randomuser.me/api/portraits/men/9.jpg"],
    budget: "$500",
    completion: 25,
  },
  {
    id: 6,
    name: "Redesign New Online Shop",
    companyIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    members: ["https://randomuser.me/api/portraits/women/10.jpg", "https://randomuser.me/api/portraits/men/11.jpg"],
    budget: "$2,000",
    completion: 40,
  },
];

const CList = () => {
  return (
<div className="flex justify-between">
<div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold">Projects</h3>
      <p className="text-sm text-gray-500">📌 <b>30 done</b> this month</p>
      <div className="mt-4">
        <div className="grid grid-cols-4 font-semibold text-gray-600 text-sm p-2 border-b">
          <div>COMPANIES</div>
          <div>MEMBERS</div>
          <div>BUDGET</div>
          <div>COMPLETION</div>
        </div>

        {projects.map((project) => (
          <div key={project.id} className="grid grid-cols-4 items-center p-2 border-b text-gray-700">
            <div className="flex items-center space-x-2">
              <img src={project.companyIcon} alt={project.name} className="w-6 h-6" />
              <span>{project.name}</span>
            </div>
            <div className="flex -space-x-2">
              {project.members.map((member, index) => (
                <img
                  key={index}
                  src={member}
                  alt="Member"
                  className="w-6 h-6 rounded-full border border-white"
                />
              ))}
            </div>
            <div>{project.budget}</div>
            <div className="flex items-center space-x-2">
              <div className="w-20 h-2 bg-gray-200 rounded-full">
                <div
                  className={`h-2 rounded-full ${
                    project.completion === 100 ? "bg-green-500" : "bg-blue-500"
                  }`}
                  style={{ width: `${project.completion}%` }}
                ></div>
              </div>
              <span className="text-sm">{project.completion}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <CPerform />
</div>
  );
};

export default CList;
