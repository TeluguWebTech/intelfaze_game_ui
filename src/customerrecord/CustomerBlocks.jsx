import { Link, useLocation } from 'react-router-dom';
import { FaMoneyBillWave, FaUsers, FaUserPlus, FaChartBar, FaPlus, FaComment, FaClock, FaRegChartBar, FaRedo, FaStar, FaBan, FaLifeRing } from "react-icons/fa";
import { Fragment } from "react";
import NavbarComp from '../components/NavbarComp';
import CustomerAccordian from './CustomerAccordian';

const stats = [
    {
      id: 1,
      title: "Customer Management",
      value: "Total Customers 1,565",
      icon: <FaUsers className="text-lg text-white" />,
      change: "+4%",
      note: "than last month",
      changeType: "increase",
      path: "/customer-list",
      iconBg: "bg-blue-500",
      tileBg: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
    {
      id: 2,
      title: "Customer Engagement",
      value: "12,340 Interactions",
      icon: <FaComment className="text-lg text-white" />,
      change: "+12%",
      note: "than last week",
      changeType: "increase",
      path: "/customer-engagement",
      iconBg: "bg-green-500",
      tileBg: "bg-gradient-to-r from-green-400 to-green-600",
    },
    {
      id: 3,
      title: "Session Records",
      value: "3,200 Sessions",
      icon: <FaClock className="text-lg text-white" />,
      change: "+6%",
      note: "than yesterday",
      changeType: "increase",
      path: "/session-record",
      iconBg: "bg-purple-500",
      tileBg: "bg-gradient-to-r from-purple-400 to-purple-600",
    },
    {
      id: 4,
      title: "Customer Tracking",
      value: "8,512 Logins",
      icon: <FaRegChartBar className="text-lg text-white" />,
      change: "+3%",
      note: "than last week",
      changeType: "increase",
      path: "/customer-activity",
      iconBg: "bg-yellow-500",
      tileBg: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    },
    {
      id: 5,
      title: "Frequent Customers",
      value: "4,580 Returning Users",
      icon: <FaRedo className="text-lg text-white" />,
      change: "+7%",
      note: "than last week",
      changeType: "increase",
      path: "/frequent-customers",
      iconBg: "bg-pink-500",
      tileBg: "bg-gradient-to-r from-pink-400 to-pink-600",
    },
    {
      id: 6,
      title: "Customer Feedback",
      value: "92% Positive Reviews",
      icon: <FaStar className="text-lg text-white" />,
      change: "+2%",
      note: "than last month",
      changeType: "increase",
      path: "/customer-feedback",
      iconBg: "bg-indigo-500",
      tileBg: "bg-gradient-to-r from-indigo-400 to-indigo-600",
    },
    {
      id: 7,
      title: "Blocked Customers",
      value: "35 Accounts",
      icon: <FaBan className="text-lg text-white" />,
      change: "+5%",
      note: "than last quarter",
      changeType: "increase",
      path: "/blocked-customers",
      iconBg: "bg-red-500",
      tileBg: "bg-gradient-to-r from-red-400 to-red-600",
    },
    {
      id: 8,
      title: "Reports & Support",
      value: "1,257 Tickets Resolved",
      icon: <FaLifeRing className="text-lg text-white" />,
      change: "-1%",
      note: "than last week",
      changeType: "decrease",
      path: "/reports-support",
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

const CustomerBlocks = () => {
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
                className="flex flex-col items-start p-4 shadow-md rounded-lg text-sm h-28 w-full cursor-pointer hover:shadow-lg transition-shadow duration-300 text-gray-900 bg-white"
              >
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-md ${stat.iconBg} text-white`}>
                    {stat.icon}
                  </div>
                  <h3 className="text-xs font-medium">{stat.title}</h3>
                </div>
                <p className="text-sm  mt-2">{stat.value}</p>
                <p
                  className={`text-xs mt-1 ${
                    stat.changeType === "increase" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {/* {stat.change} <span className="text-gray-500">{stat.note}</span> */}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <CustomerAccordian />
      </div>
    );
  };
  

export default CustomerBlocks;