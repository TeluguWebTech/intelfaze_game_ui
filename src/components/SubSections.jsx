import React from "react";

const SubSection = () => {
  const authors = [
    { name: "Emma Smith", role: "Project Manager", image: "https://via.placeholder.com/40" },
    { name: "Sean Bean", role: "PHP, SQLite, Artisan CLI", image: "https://via.placeholder.com/40" },
    { name: "Brian Cox", role: "PHP, SQLite, Artisan CLI", image: "https://via.placeholder.com/40" },
    { name: "Francis Mitcham", role: "PHP, SQLite, Artisan CLI", image: "https://via.placeholder.com/40" },
    { name: "Dan Wilson", role: "PHP, SQLite, Artisan CLI", image: "https://via.placeholder.com/40" },
  ];

  const notifications = [
    { title: "Group lunch celebration", due: "Due in 2 Days", change: "+28%", color: "bg-yellow-100 text-yellow-700" },
    { title: "Navigation optimization", due: "Due in 2 Days", change: "+50%", color: "bg-green-100 text-green-700" },
    { title: "Rebrand strategy planning", due: "Due in 5 Days", change: "-27%", color: "bg-red-100 text-red-700" },
    { title: "Product goals strategy", due: "Due in 7 Days", change: "+8%", color: "bg-purple-100 text-purple-700" },
  ];

  const trends = [
    { title: "Top Authors", users: "Mark, Rowling, Esther", change: "+825", icon: "📖" },
    { title: "Popular Authors", users: "Randy, Steve, Mike", change: "+280", icon: "📢" },
    { title: "New Users", users: "John, Pat, Jimmy", change: "+4500", icon: "👥" },
    { title: "Active Customers", users: "Mark, Rowling, Esther", change: "+686", icon: "💼" },
    { title: "Bestseller Theme", users: "Disco, Retro, Sports", change: "+7265", icon: "🎵" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100 ">
      {/* Authors Section */}
      <div className="bg-white rounded-xl shadow p-5">
        <h2 className="text-lg font-semibold mb-4">Authors</h2>
        <div className="space-y-4">
          {authors.map((author, index) => (
            <div key={index} className="flex items-center gap-3">
              <img src={author.image} alt={author.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-medium">{author.name}</p>
                <p className="text-sm text-gray-500">{author.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications Section */}
      <div className="bg-white rounded-xl shadow p-5">
        <h2 className="text-lg font-semibold mb-4">Notifications</h2>
        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <div key={index} className={`p-3 rounded-lg ${notification.color}`}>
              <p className="font-medium">{notification.title}</p>
              <p className="text-sm">{notification.due}</p>
              <p className="text-sm font-semibold">{notification.change}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trends Section */}
      <div className="bg-white rounded-xl shadow p-5">
        <h2 className="text-lg font-semibold mb-4">Trends</h2>
        <div className="space-y-4">
          {trends.map((trend, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl">{trend.icon}</span>
                <div>
                  <p className="font-medium">{trend.title}</p>
                  <p className="text-sm text-gray-500">{trend.users}</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-blue-600">{trend.change}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubSection;
