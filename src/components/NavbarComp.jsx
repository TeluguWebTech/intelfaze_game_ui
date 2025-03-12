import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { UserIcon, BellIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

const NavbarComp = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);

  // Define navigation structure
  const navItems = [
    {
      title: "Clients",
      links: {
        Services: [
          { name: "Online Stores", path: "/online-stores" },
          { name: "Segmentation", path: "/segmentation" },
          { name: "Marketing CRM", path: "/marketing-crm" },
        ],
        Resources: [
          { name: "Our Blog", path: "/blog" },
          { name: "Terms & Conditions", path: "/terms" },
          { name: "License", path: "/license" },
        ],
      },
    },
    {
      title: "Revenue",
      links: {
        Services: [
          { name: "Sales Reports", path: "/sales-reports" },
          { name: "Revenue Tracking", path: "/revenue-tracking" },
        ],
        Resources: [
          { name: "Billing Info", path: "/billing-info" },
          { name: "Refund Policy", path: "/refund-policy" },
        ],
      },
    },
    {
      title: "Machines",
      links: {
        Services: [
          { name: "TRT Machines", path: "/trt-machines" },
          { name: "Machine Management", path: "/machine-management" },
        ],
        Resources: [
          { name: "Setup Guide", path: "/setup-guide" },
          { name: "Maintenance", path: "/maintenance" },
        ],
      },
    },
    {
      title: "Employees",
      links: {
        Services: [
          { name: "TRT Machines", path: "/trt-machines" },
          { name: "Machine Management", path: "/machine-management" },
        ],
        Resources: [
          { name: "Setup Guide", path: "/setup-guide" },
          { name: "Maintenance", path: "/maintenance" },
        ],
      },
    },
    {
      title: "Accounts",
      links: {
        Services: [
          { name: "TRT Machines", path: "/trt-machines" },
          { name: "Machine Management", path: "/machine-management" },
        ],
        Resources: [
          { name: "Setup Guide", path: "/setup-guide" },
          { name: "Maintenance", path: "/maintenance" },
        ],
      },
    },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-3 flex justify-between items-center shadow-md relative">
      {/* Breadcrumb Navigation */}
      <div>
        <nav aria-label="Breadcrumb">
          <ul className="text-gray-200 text-sm flex items-center space-x-1">
            <li>
              <Link to="/" className="hover:text-white transition-colors duration-200">
                Dashboard
              </Link>
            </li>
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              return (
                <li key={routeTo} className="flex items-center">
                  <span className="text-gray-300 mx-1">/</span>
                  {isLast ? (
                    <span className="text-white font-medium">{name}</span>
                  ) : (
                    <Link to={routeTo} className="hover:text-white transition-colors duration-200">
                      {name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <h1 className="text-lg font-bold text-white capitalize mt-1">
          {pathnames[pathnames.length - 1] || "Home"}
        </h1>
      </div>

      {/* Mega Menu */}
      <div className="flex space-x-6">
        {navItems.map((nav) => (
          <div key={nav.title} className="relative">
            <button
              className="text-white text-sm font-medium hover:text-gray-200"
              onMouseEnter={() => setActiveMegaMenu(nav.title)}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              {nav.title} ▾
            </button>
            {activeMegaMenu === nav.title && (
              <div
                className="absolute top-8 left-0 bg-white shadow-lg border rounded-lg p-5 w-80 flex"
                onMouseEnter={() => setActiveMegaMenu(nav.title)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                {Object.entries(nav.links).map(([category, links]) => (
                  <div key={category} className="w-1/2">
                    <h3 className="text-gray-700 font-semibold">{category}</h3>
                    <ul className="mt-2 text-gray-600 text-sm space-y-1">
                      {links.map((link) => (
                        <li key={link.path}>
                          <Link to={link.path} className="hover:text-blue-600">
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 bg-white/90 backdrop-blur-sm"
        />
        <div className="flex items-center space-x-3 text-gray-200">
          <button className="flex items-center space-x-1 hover:text-white transition-colors duration-200">
            <UserIcon className="h-5 w-5" />
            <span className="text-sm">Sign In</span>
          </button>
          <BellIcon className="h-5 w-5 hover:text-white cursor-pointer transition-colors duration-200" />
          <Cog6ToothIcon className="h-5 w-5 hover:text-white cursor-pointer transition-colors duration-200" />
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;
