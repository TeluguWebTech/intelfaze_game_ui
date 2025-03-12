import { useState } from "react";
import { FaMoneyBillWave, FaUsers, FaUserPlus, FaChartBar, FaPlus } from "react-icons/fa";
import CAddClientForm from './CAddClientForm';
import CShowRevenue from './CShowRevenue';
import CShowLocation from "./CShowLocation";
import CTrtSalesShow from "./CTrtSalesShow";
import CShowMatches from "./CShowMatches";
import CShowComision from "./CShowComision";
import CServicesShow from "./CServicesShow";

const stats = [
  {
    id: 1,
    title: "Add New Client",
    value: "Total clients 2,300",
    icon: <FaUsers className="text-lg text-gray-700" />,
    change: "+3%",
    note: "than last month",
    changeType: "increase",
  },
  {
    id: 2,
    title: "Revenue",
    value: "$53k",
    icon: <FaMoneyBillWave className="text-lg text-gray-700" />,
    change: "+55%",
    note: "than last week",
    changeType: "increase",
  },
  {
    id: 3,
    title: "Locations",
    value: "3,462",
    icon: <FaUserPlus className="text-lg text-gray-700" />,
    change: "-2%",
    note: "than yesterday",
    changeType: "decrease",
  },
  {
    id: 4,
    title: "TRT Sales",
    value: "$103,430",
    icon: <FaChartBar className="text-lg text-gray-700" />,
    change: "+5%",
    note: "than yesterday",
    changeType: "increase",
  },
  {
    id: 5,
    title: "Matches",
    value: "1,253",
    icon: <FaMoneyBillWave className="text-lg text-gray-700" />,
    change: "+7%",
    note: "than last week",
    changeType: "increase",
  },
  {
    id: 6,
    title: "Analytics",
    value: "8,900",
    icon: <FaUsers className="text-lg text-gray-700" />,
    change: "+2%",
    note: "than last month",
    changeType: "increase",
  },
  {
    id: 7,
    title: "Commissions",
    value: "12%",
    icon: <FaChartBar className="text-lg text-gray-700" />,
    change: "+1.5%",
    note: "than last quarter",
    changeType: "increase",
  },
  {
    id: 8,
    title: "Services",
    value: "325",
    icon: <FaUserPlus className="text-lg text-gray-700" />,
    change: "-1%",
    note: "than last week",
    changeType: "decrease",
  },
];

const CTiles = () => {
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [isRevenueModalOpen, setIsRevenueModalOpen] = useState(false);
  const [isRolesDashboardOpen, setIsRolesDashboardOpen] = useState(false);
  const [showTrtSales, setShowTrtSales] = useState(false)
  const [showMatches, setShowMatches] = useState(false)
  const [showComision, setShowComision] = useState(false)
  const [showServices, setShowServices]= useState(false)

  const openServices = () => setShowServices(true)
  const closeServices = ()=> setShowServices(false)

  const openComision = () =>setShowComision(true)
  const closeComision = () =>setShowComision(false)

  const openMatches = () =>setShowMatches(true)
  const closeMatches = () =>setShowMatches(false)

  const openTrtSales = ()=>setShowTrtSales(true)
  const closeTrtSales = ()=>setShowTrtSales(false)

  const openClientModal = () => setIsClientModalOpen(true);
  const closeClientModal = () => setIsClientModalOpen(false);

  const openRevenueModal = () => setIsRevenueModalOpen(true);
  const closeRevenueModal = () => setIsRevenueModalOpen(false);

  const openRolesDashboard = () => setIsRolesDashboardOpen(true);
  const closeRolesDashboard = () => setIsRolesDashboardOpen(false);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 p-4 bg-gray-100">
      {stats.map((stat) => (
  <div
    key={stat.id}
    className="flex flex-col items-start p-3 bg-white shadow-md rounded-lg text-sm h-24 w-full cursor-pointer"
    onClick={() => {
      if (stat.title === "Revenue") {
        openRevenueModal();
      } else if (stat.title === "Locations") {
        openRolesDashboard();
      } else if (stat.title === "TRT Sales") {
        openTrtSales();  // ✅ Opens CTrtSalesShow modal
      } else if (stat.title === "Matches"){
        openMatches()
      } else if (stat.title == "Commissions"){
        openComision()
      } else if (stat.title == "Services"){
        openServices()
      } else if (stat.title == "Total Clients"){
        openClientModal()
      }
    }}
  >
    <div className="flex items-center space-x-2">
      <div className="p-1.5 bg-gray-200 rounded-md">{stat.icon}</div>
      <h3 className="text-xs text-gray-500 font-medium">{stat.title}</h3>
    </div>
    <p className="text-base font-semibold mt-1">{stat.value}</p>
    <p
      className={`text-xs mt-1 ${
        stat.changeType === "increase" ? "text-green-500" : "text-red-500"
      }`}
    >
      {stat.change} <span className="text-gray-500">{stat.note}</span>
    </p>
  </div>
))}

      </div>

      {isClientModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-4xl mx-4 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Add Client</h2>
              <button onClick={closeClientModal} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
             <CAddClientForm />
            </div>
          </div>
        </div>
      )}
      {isRolesDashboardOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-4xl mx-4 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Locations</h2>
              <button onClick={closeRolesDashboard} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
             <CShowLocation />
            </div>
          </div>
        </div>
      )}
      {isRevenueModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-4xl mx-4 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Revenue</h2>
              <button onClick={closeRevenueModal} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
             <CShowRevenue />
            </div>
          </div>
        </div>
      )}
      {showTrtSales && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-4xl mx-4 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">TRT Dashboard</h2>
              <button onClick={closeTrtSales} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
             <CTrtSalesShow />
            </div>
          </div>
        </div>
      )}
      {showMatches && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-4xl mx-4 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Match Sales</h2>
              <button onClick={closeMatches} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
             <CShowMatches />
            </div>
          </div>
        </div>
      )}
      {showComision && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-4xl mx-4 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Commisions Records</h2>
              <button onClick={closeComision} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
             <CShowComision />
            </div>
          </div>
        </div>
      )}
      {showServices && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-4xl mx-4 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Services Record</h2>
              <button onClick={closeServices} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
             <CServicesShow />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CTiles;