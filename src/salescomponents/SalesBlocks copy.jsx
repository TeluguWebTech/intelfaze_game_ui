import { TrendingUp, TrendingDown, Users, DollarSign, MapPin, BarChart, Settings } from "lucide-react";

const metrics = [
  { title: "Sales overview", value: "2,300", change: "+3% than last month", icon: Users, changeType: "up" },
  { title: "Executives", value: "$53k", change: "+55% than last week", icon: DollarSign, changeType: "up" },
  { title: "New Clients", value: "3,462", change: "-2% than yesterday", icon: MapPin, changeType: "down" },
  { title: "Targets & Performance", value: "$103,430", change: "+5% than yesterday", icon: BarChart, changeType: "up" },
  { title: "Targets", value: "8,900", change: "+2% than last month", icon: Users, changeType: "up" },
  { title: "Reports", value: "325", change: "-1% than last week", icon: Settings, changeType: "down" },
];

export default function SalesBlocks() {
  return (
    <div className="overflow-x-auto p-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
        {metrics.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-lg rounded-xl flex flex-col space-y-2 border border-gray-200 w-[15vw] min-w-[200px] max-w-[300px]"
          >
            <div className="flex items-center space-x-2">
              <item.icon className="h-6 w-6 text-gray-500" />
              <span className="text-sm font-medium text-gray-600">{item.title}</span>
            </div>
            <div className="text-2xl font-bold">{item.value}</div>
            <div className={`text-sm ${item.changeType === "up" ? "text-green-600" : "text-red-600"} flex items-center`}>
              {item.changeType === "up" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              <span className="ml-1">{item.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
