import { WalletIcon, UsersIcon, UserGroupIcon, ChartBarIcon } from "@heroicons/react/24/outline";

const TilesComp = () => {
  const stats = [
    { title: "Today's Money", value: "$53k", icon: WalletIcon, change: "+55% than last week", color: "text-green-500" },
    { title: "Today's Users", value: "2,300", icon: UsersIcon, change: "+3% than last month", color: "text-green-500" },
    { title: "New Clients", value: "3,462", icon: UserGroupIcon, change: "-2% than yesterday", color: "text-red-500" },
    { title: "Sales", value: "$103,430", icon: ChartBarIcon, change: "+5% than yesterday", color: "text-green-500" }
  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="p-4 bg-white shadow-md rounded-lg flex items-center space-x-4">
          <stat.icon className="h-8 w-8 text-gray-700" />
          <div>
            <p className="text-sm text-gray-500">{stat.title}</p>
            <h2 className="text-xl font-bold">{stat.value}</h2>
            <p className={`text-xs ${stat.color}`}>{stat.change}</p>
          </div>
        </div>
      ))}
    </div>

  );
};

export default TilesComp;
