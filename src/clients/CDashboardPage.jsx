import { Link, useLocation } from 'react-router-dom';
import { FaMoneyBillWave, FaUsers, FaUserPlus, FaChartBar, FaPlus } from "react-icons/fa";
import { Fragment } from "react";
import NavbarComp from '../components/NavbarComp';

const stats = [
  {
    id: 1,
    title: "Add New Client",
    value: "Total clients 238",
    icon: <FaPlus className="text-lg text-white" />,
    change: "+3%",
    note: "than last month",
    changeType: "increase",
    path: "/add-client",
    iconBg: "bg-blue-500", // Background color for the icon
    tileBg: "bg-gradient-to-r from-blue-400 to-blue-600", // Gradient background for the tile
  },
  {
    id: 2,
    title: "Revenue",
    value: "$53k",
    icon: <FaMoneyBillWave className="text-lg text-white" />,
    change: "+55%",
    note: "than last week",
    changeType: "increase",
    path: "/clients-revenue",
    iconBg: "bg-green-500",
    tileBg: "bg-gradient-to-r from-green-400 to-green-600",
  },
  {
    id: 3,
    title: "Locations",
    value: "462",
    icon: <FaUserPlus className="text-lg text-white" />,
    change: "-2%",
    note: "than yesterday",
    changeType: "decrease",
    path: "/client-locations",
    iconBg: "bg-purple-500",
    tileBg: "bg-gradient-to-r from-purple-400 to-purple-600",
  },
  {
    id: 4,
    title: "TRT Sales",
    value: "$103,430",
    icon: <FaChartBar className="text-lg text-white" />,
    change: "+5%",
    note: "than yesterday",
    changeType: "increase",
    path: "/client-machines",
    iconBg: "bg-yellow-500",
    tileBg: "bg-gradient-to-r from-yellow-400 to-yellow-600",
  },
  {
    id: 5,
    title: "Matches",
    value: "1,253",
    icon: <FaMoneyBillWave className="text-lg text-white" />,
    change: "+7%",
    note: "than last week",
    changeType: "increase",
    path: "/client-matches",
    iconBg: "bg-pink-500",
    tileBg: "bg-gradient-to-r from-pink-400 to-pink-600",
  },
  {
    id: 6,
    title: "Analytics",
    value: "8,900",
    icon: <FaUsers className="text-lg text-white" />,
    change: "+2%",
    note: "than last month",
    changeType: "increase",
    path: "/not-found",
    iconBg: "bg-indigo-500",
    tileBg: "bg-gradient-to-r from-indigo-400 to-indigo-600",
  },
  {
    id: 7,
    title: "Commissions",
    value: "12%",
    icon: <FaChartBar className="text-lg text-white" />,
    change: "+1.5%",
    note: "than last quarter",
    changeType: "increase",
    path: "/commissions",
    iconBg: "bg-red-500",
    tileBg: "bg-gradient-to-r from-red-400 to-red-600",
  },
  {
    id: 8,
    title: "Services",
    value: "325",
    icon: <FaUserPlus className="text-lg text-white" />,
    change: "-1%",
    note: "than last week",
    changeType: "decrease",
    path: "/client-services",
    iconBg: "bg-teal-500",
    tileBg: "bg-gradient-to-r from-teal-400 to-teal-600",
  },
];

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="text-sm text-gray-600 mb-4">
      <Link to="/" className="text-blue-500 hover:underline">Dashboard</Link>
      {pathnames.length > 0 && (
        <span className="mx-2"> / </span>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const formattedName = name.replace(/-/g, " ").toUpperCase();

        return (
          <Fragment key={routeTo}>
            <Link to={routeTo} className="text-blue-500 hover:underline">
              {formattedName}
            </Link>
            {index < pathnames.length - 1 && <span className="mx-2"> / </span>}
          </Fragment>
        );
      })}
    </div>
  );
};

const CDashboardPage = () => {
  return (
 <div className="">
  {/* <NavbarComp /> */}
     <div className="p-4 bg-gray-100">
      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
        {stats.map((stat) => (
          <Link
            key={stat.id}
            to={stat.path}
            className={`flex flex-col items-start p-4 shadow-md rounded-lg text-sm h-28 w-full cursor-pointer hover:shadow-lg transition-shadow duration-300 ${stat.tileBg} text-white`}
          >
            <div className="flex items-center space-x-2">
              <div className={`p-2 rounded-md ${stat.iconBg}`}>
                {stat.icon}
              </div>
              <h3 className="text-xs font-medium">{stat.title}</h3>
            </div>
            <p className="text-base font-semibold mt-2">{stat.value}</p>
            <p
              className={`text-xs mt-1 ${
                stat.changeType === "increase" ? "text-green-200" : "text-red-200"
              }`}
            >
              {stat.change} <span className="text-gray-200">{stat.note}</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
 </div>
  );
};

export default CDashboardPage;