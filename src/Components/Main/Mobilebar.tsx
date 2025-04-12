import { navItems } from "@/Constants/data";
import { motion } from "framer-motion";
import { LogOut, X } from "lucide-react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

interface MobilebarProps {
  onClose: () => void;
  isOpen: boolean;
}

const Mobilebar = ({ onClose, isOpen }: MobilebarProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-start">
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.3}}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        <motion.div
        initial={{x: -250}}
        animate={{x: 0}}
        exit={{x: -250}}
        transition={{duration: 0.3}}
        className="w-[250px] absolute left-0 h-full bg-background flex flex-col">
          <header className="h-[70px] w-full flex items-center justify-between px-4 sticky top-0 left-0 bg-background z-10">
            <div className="flex items-center gap-1">
              <img
                src="/logo-orange.png"
                alt="logo"
                width={35}
                className="flex-shrink-0"
              />
              <h3 className="text-2xl font-bold">Lani</h3>
            </div>
            <button
              onClick={onClose}
              className="cursor-pointer center h-10 w-10 rounded-full bg-secondary"
            >
              <X size={22} />
            </button>
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
              `
                }
              >
                <item.icon size={22} className="flex-shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Logout Button */}
          <button className=" px-4 h-[50px] w-full bg-red-500/20 text-red-500 mb-4 justify-center sm:justify-start">
            <LogOut size={22} className="flex-shrink-0" />
            <span>Logout</span>
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Mobilebar;
