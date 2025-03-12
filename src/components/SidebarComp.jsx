import { useState } from "react";
import { 
  HomeIcon, UserIcon, TableCellsIcon, BellIcon, 
  ArrowRightOnRectangleIcon, LockClosedIcon, ChevronDownIcon, Bars3Icon
} from "@heroicons/react/24/outline";
import NavbarComp from "./NavbarComp";
import TaskList from "./TaskList";
import TilesComp from "./TilesComp";
import SubSection from "./SubSections";
import DashboardCharts from "./SubCharts";

const SideComponent = ({ isCollapsed, toggleSidebar }) => {
  const [active, setActive] = useState("Dashboard");
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const menuItems = [
    { name: "Dashboard", icon: HomeIcon },
    { 
      name: "Profile", 
      icon: UserIcon, 
      dropdown: ["My Account", "Settings", "Logout"] 
    },
    { 
      name: "Tables", 
      icon: TableCellsIcon, 
      dropdown: ["Users", "Orders", "Products"] 
    },
    { name: "Notifications", icon: BellIcon },
  ];

  const authItems = [
    { name: "Sign In", icon: ArrowRightOnRectangleIcon },
    { name: "Sign Up", icon: LockClosedIcon },
  ];

  return (
    <div className={`h-screen bg-gray-100 shadow-md p-4 transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"}`}>
      <div className="flex justify-between items-center mb-6">
        {!isCollapsed && <h2 className="text-gray-700 font-bold text-lg">Intel faze Gaming</h2>}
        <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-200">
          <Bars3Icon className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <div key={item.name}>
            <SidebarItem 
              name={item.name} 
              Icon={item.icon} 
              active={active} 
              setActive={setActive} 
              toggleDropdown={toggleDropdown}
              isDropdown={!!item.dropdown}
              isOpen={openDropdown === item.name}
              isCollapsed={isCollapsed}
            />
            {item.dropdown && openDropdown === item.name && !isCollapsed && (
              <div className="pl-8 space-y-1">
                {item.dropdown.map((subItem) => (
                  <div 
                    key={subItem} 
                    className="flex items-center p-2 text-gray-600 hover:bg-gray-200 rounded-lg cursor-pointer"
                    onClick={() => setActive(subItem)}
                  >
                    {subItem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {!isCollapsed && <h3 className="text-gray-500 text-sm mt-4 pl-2">AUTH PAGES</h3>}
        {authItems.map((item) => (
          <SidebarItem 
            key={item.name} 
            name={item.name} 
            Icon={item.icon} 
            active={active} 
            setActive={setActive} 
            isCollapsed={isCollapsed}
          />
        ))}
      </nav>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ name, Icon, active, setActive, toggleDropdown, isDropdown, isOpen, isCollapsed }) => (
  <div 
    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition 
                ${active === name ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-200"}`}
    onClick={() => isDropdown ? toggleDropdown(name) : setActive(name)}
  >
    <div className="flex items-center">
      <Icon className="h-5 w-5" />
      {!isCollapsed && <span className="ml-3">{name}</span>}
    </div>
    {isDropdown && !isCollapsed && <ChevronDownIcon className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />}
  </div>
);

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex">
      <SideComponent isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <div className="border w-full">
<TilesComp />
<DashboardCharts />
<SubSection />
     <TaskList />
      </div>
    </div>
  );
};

export default Layout;
