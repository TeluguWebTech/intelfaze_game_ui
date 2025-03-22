import { Link, useLocation } from 'react-router-dom';
import { FaMoneyBillWave, FaUsers, FaUserPlus, FaChartBar, FaPlus, FaCalendarAlt, FaBriefcase, FaChalkboardTeacher, FaChartLine, FaExclamationTriangle } from "react-icons/fa";
import { Fragment } from "react";
import NavbarComp from '../components/NavbarComp';
import HrAccordian from './HrAccordian';


  const hrStats = [
    {
      id: 1,
      title: "Total Employees",
      value: "120",
      icon: <FaUsers className="text-lg text-white" />,
      change: "+ Add New Employee",
      changeType: "increase",
      iconBg: "bg-blue-500",
      path:"/all-employees",
      tileBg: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
    {
      id: 2,
      title: "Attendance & Leave",
      value: "95%",
      icon: <FaCalendarAlt className="text-lg text-white" />,
      change: "-2%",
      note: "than last week",
      changeType: "decrease",
      iconBg: "bg-yellow-500",
      path:"/emp-attendance",
      tileBg: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    },
    {
      id: 3,
      title: "Payroll Processed",
      value: "$150K",
      icon: <FaMoneyBillWave className="text-lg text-white" />,
      change: "+3%",
      note: "than last payroll",
      changeType: "increase",
      iconBg: "bg-purple-500",
      path:"/pay-rol",
      tileBg: "bg-gradient-to-r from-purple-400 to-purple-600",
    },
   

    {
      id: 4,
      title: "Performance Reviews",
      value: "15",
      icon: <FaChartLine className="text-lg text-white" />,
      change: "+4%",
      note: "than last quarter",
      changeType: "increase",
      iconBg: "bg-red-500",
      path:"/emp-performance",
      tileBg: "bg-gradient-to-r from-red-400 to-red-600",
    },
    {
      id: 5,
      title: "Employee Complaints",
      value: "2",
      icon: <FaExclamationTriangle className="text-lg text-white" />,
      change: "-1%",
      note: "than last month",
      changeType: "decrease",
      iconBg: "bg-indigo-500",
      path:"/emp-complaints",
      tileBg: "bg-gradient-to-r from-indigo-400 to-indigo-600",
    },
    {
      id: 6,
      title: "Open Positions",
      value: "4",
      icon: <FaBriefcase className="text-lg text-white" />,
      change: "-1%",
      note: "than last month",
      changeType: "decrease",
      iconBg: "bg-pink-500",
      path:"/emp-open-positions",
      tileBg: "bg-gradient-to-r from-pink-400 to-pink-600",
    },
    {
      id: 7,
      title: "Training Sessions",
      value: "6",
      icon: <FaChalkboardTeacher className="text-lg text-white" />,
      change: "+2%",
      note: "than last month",
      changeType: "increase",
      iconBg: "bg-teal-500",
      path:"/emp-open-positions",
      tileBg: "bg-gradient-to-r from-teal-400 to-teal-600",
    },
    {
      id: 8,
      title: "Recruitment & Hiring",
      value: "10 Applicants",
      icon: <FaUserPlus className="text-lg text-white" />,
      change: "+5%",
      note: "than last week",
      changeType: "increase",
      iconBg: "bg-green-500",
      path:"/emp-open-positions",
      tileBg: "bg-gradient-to-r from-green-400 to-green-600",
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

const HrBlocks = () => {
    return (
      <div className="">
        {/* <NavbarComp /> */}
        <div className="p-4 bg-gray-100">
          {/* Breadcrumbs */}
          <Breadcrumbs />
  
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {hrStats.map((stat) => (
              <Link
                key={stat.id}
                to={stat.path}
                className="flex flex-col items-start p-4 shadow-md rounded-lg text-sm h-28 w-full cursor-pointer hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-md ${stat.iconBg}`}>
                    <span className="text-white text-lg">{stat.icon}</span>
                  </div>
                  <h3 className="text-xs font-medium text-gray-700">{stat.title}</h3>
                </div>
                <p className="text-base font-semibold mt-2 text-gray-900">{stat.value}</p>
                <p
                  className={`text-xs mt-1 ${
                    stat.changeType === "increase" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.change} <span className="text-gray-500">{stat.note}</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
        <HrAccordian />
      </div>
    );
  };
  
  export default HrBlocks;
  