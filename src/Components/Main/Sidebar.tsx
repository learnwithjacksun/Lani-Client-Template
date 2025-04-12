import { navItems } from "@/Constants/data";
import { LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="md:w-[20%] sm:w-[60px] w-0 hidden sm:flex flex-col border-r border-line sticky top-0 left-0 h-[100dvh] bg-background">
      {/* Logo/Header */}
      <header className="h-[70px] w-full flex items-center px-4 sticky top-0 left-0 bg-background z-10 border-b border-line">
        <img src="/logo-orange.png" alt="logo" width={35} className="flex-shrink-0" />
        <h3 className="text-2xl font-bold hidden md:block ml-2">Lani</h3>
      </header>

      {/* Navigation Links */}
      <nav className="flex-1 mt-4 space-y-2">
        {navItems.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 h-[50px] w-full transition-all duration-300 
              ${
                isActive
                  ? "bg-primary/10 border-r-4 border-primary text-primary"
                  : "text-muted hover:bg-secondary"
              } 
              justify-center sm:justify-start`
            }
          >
            <item.icon size={22} className="flex-shrink-0" />
            <span className="hidden md:block">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <button className=" px-4 h-[50px] w-full bg-red-500/20 text-red-500 mb-4 justify-center sm:justify-start">
        <LogOut size={22} className="flex-shrink-0" />
        <span className="hidden md:block">Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
