import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TrendingUp, TrendingDown, Users, DollarSign, MapPin, BarChart, Settings } from "lucide-react";
import TRTBlocks from "./TRTBlocks";
import TRTMacList from "./TRTMacList";
import TrtShowInstall from "./TrtShowInstall";
import TrtShowTransactions from "./TrtShowTransactions";
import TrtShowMaintain from "./TrtShowMaintain";
import TrtShowLocations from "./TrtShowLocations";
import PageNotFound from "../PageNotFound";
import NavbarComp from "../components/NavbarComp";
import GameMacList from "./GameMacList";
import TrtPullOuts from "./TrtShowTransactions";

const metrics = [
  { title: "Game Machines", value: "2,300", change: "+3% than last month", icon: Users, changeType: "up", component: <GameMacList /> },
  { title: "TRT Machines", value: "$53k", change: "+55% than last week", icon: DollarSign, changeType: "up", component: <TRTMacList /> },
  { title: "Locations", value: "3,462", change: "-2% than yesterday", icon: MapPin, changeType: "down", component: <TrtShowLocations /> },
  { title: "TRT Deposits", value: "8,900", change: "+2% than last month", icon: Users, changeType: "up", component: <TrtShowInstall/> },
  { title: "TRT Pull outs", value: "$103,430", change: "+5% than yesterday", icon: BarChart, changeType: "up", component: <TrtPullOuts /> },
  { title: "Services", value: "325", change: "-1% than last week", icon: Settings, changeType: "down", component: <TrtShowMaintain /> },
];

export default function TRTDashboard() {
  const [selectedComponent, setSelectedComponent] = useState(<GameMacList />); // Default component
  const [activeIndex, setActiveIndex] = useState(0); // Track active tile index
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x); // Extract path segments

  return (
    <div>
      {/* <NavbarComp /> */}

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-gray-100 px-6 py-3">
        <ul className="flex items-center space-x-1 text-sm text-gray-600">
          <li>
            <Link to="/" className="hover:text-blue-500 transition-colors duration-200">
              Dashboard
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return (
              <li key={routeTo} className="flex items-center">
                <span className="text-gray-400 mx-1">/</span>
                {isLast ? (
                  <span className="text-blue-600 font-medium">{name}</span>
                ) : (
                  <Link to={routeTo} className="hover:text-blue-500 transition-colors duration-200">
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedComponent(metric.component);
              setActiveIndex(index); // Set active index
            }}
            className={`p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 ${
              activeIndex === index ? "bg-blue-100 border border-blue-500 shadow-lg" : "bg-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm text-gray-500">{metric.title}</h3>
                <p className="text-xl font-bold">{metric.value}</p>
              </div>
              <div className={`p-2 rounded-full ${metric.changeType === "up" ? "bg-green-100" : "bg-red-100"}`}>
                <metric.icon className={`h-5 w-5 ${metric.changeType === "up" ? "text-green-500" : "text-red-500"}`} />
              </div>
            </div>
            <p className={`text-xs mt-2 ${metric.changeType === "up" ? "text-green-500" : "text-red-500"}`}>
              {metric.change}
            </p>
          </div>
        ))}
      </div>

      {/* Show Corresponding Component */}
      <div className="showComponent p-6">{selectedComponent}</div>
    </div>
  );
}
