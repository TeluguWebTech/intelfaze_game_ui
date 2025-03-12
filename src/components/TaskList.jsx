import React from "react";

const tasks = [
  {
    name: "Car Rental App",
    assignees: ["👩‍💼", "👨‍💼", "👦"],
    status: "In progress",
    progress: 75,
    date: "7 April 2021",
  },
  {
    name: "PSD to HTML",
    assignees: ["👩", "👨", "👩‍💻"],
    status: "Completed",
    progress: 100,
    date: "20 March 2021",
  },
  {
    name: "Stock Market App",
    assignees: ["👨‍💼", "👩‍💼", "👨‍💻"],
    status: "Closed",
    progress: 100,
    date: "11 March 2021",
  },
  {
    name: "New Year Social Post",
    assignees: ["👨", "👩", "👨‍💻"],
    status: "Pending",
    progress: 25,
    date: "2 April 2021",
  },
];

const meetings = [
  { name: "Morning Daily Meeting", time: "09:00 am - 11:00 am", avatar: "🧔" },
  { name: "Meeting with Boss", time: "01:00 pm - 01:00 pm", avatar: "👨‍💼" },
];

const TaskList = () => {
  return (
    
    <div className="flex gap-6 p-2 bg-gray-100 ">
      {/* Task List */}
      <div className="w-2/3 bg-white p-4 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Task List</h2>
          <span className="text-sm text-orange-500 cursor-pointer">View All</span>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500 text-sm">
              <th className="pb-2">Task Name</th>
              <th className="pb-2">Assign</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Date</th>
              <th className="pb-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="border-t text-sm">
                <td className="py-3">{task.name}</td>
                <td className="py-3">
                  <div className="flex gap-1">{task.assignees.map((a, i) => <span key={i}>{a}</span>)}</div>
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <span>{task.status}</span>
                    <div className="w-24 bg-gray-200 h-1 rounded">
                      <div
                        className={`h-1 rounded ${task.progress === 100 ? "bg-green-500" : task.progress > 50 ? "bg-orange-500" : "bg-yellow-500"}`}
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                    <span>{task.progress}%</span>
                  </div>
                </td>
                <td className="py-3">{task.date}</td>
                <td className="py-3 text-gray-400 cursor-pointer">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Meetings */}
      <div className="w-1/3 bg-white p-4 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Meetings</h2>
          <span className="text-sm text-orange-500 cursor-pointer">View All</span>
        </div>
        <div className="space-y-3">
          {meetings.map((meeting, index) => (
            <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg shadow-sm">
              <span className="text-2xl">{meeting.avatar}</span>
              <div className="ml-3">
                <h3 className="font-semibold">{meeting.name}</h3>
                <p className="text-sm text-gray-500">{meeting.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
