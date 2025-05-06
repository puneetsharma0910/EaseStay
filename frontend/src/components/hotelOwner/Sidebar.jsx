import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarLinks = [
    { name: "Dashboard", icon: assets.dashboardIcon, link: "/owner" },
    { name: "Add Room", icon: assets.addIcon, link: "/owner/add-room" },
    { name: "List Room", icon: assets.listIcon, link: "/owner/list-room" },
  ];
  
  return (
    <div className="md:w-64 w-16 bg-white dark:bg-gray-50 border-r border-gray-200 dark:border-gray-100 h-full flex flex-col transition-all duration-300 shadow-sm">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-200 dark:text-white md:block hidden">
          Hotel Panel
        </h2>
      </div>
      
      <nav className="flex-1 px-2 py-4 space-y-1">
        {sidebarLinks.map((item, index) => (
          <NavLink
            to={item.link}
            key={index}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-100/50 dark:text-blue-400"
                  : "text-gray-50 hover:bg-gray-50 dark:text-gray-300 "
              }`
            }
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-5 h-5 object-contain"
            />
            <span className="md:block hidden font-medium capitalize">
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
