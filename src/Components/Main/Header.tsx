import { Goback, ThemeToggle } from "../UI";
import { Menu } from "lucide-react";
import { Mobilebar } from "./";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Header = ({ isDashboard }: { isDashboard: boolean }) => {
  const user = {
    name: "Gift Jackson",
    email: "giftjackson@gmail.com",
    avatar: null,
  };
  const avatar = user.avatar || `https://api.dicebear.com/9.x/adventurer/svg?seed=${user.name}`;
  const [isMobilebarOpen, setIsMobilebarOpen] = useState(false);
  const toggleMobilebar = () => {
    setIsMobilebarOpen(prev => !prev);
  };
  return (
    <>
      <header className="sticky top-0 w-full backdrop-blur-sm z-50 bg-background/50">
        <nav className="w-[90%] mx-auto h-[70px] flex items-center justify-between ">
          {!isDashboard ? (
            <div >
              <Goback />
            </div>
          ) : (
            <div className="sm:invisible visible">
             <img src="/logo-orange.png" alt="logo" width={35} />
            </div>
          )}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="flex items-center gap-2 bg-secondary rounded-full p-2 pl-4">
              <span className="text-sm md:text-base">{user.name}</span>
              <div className="md:h-10 md:w-10 h-8 w-8 rounded-full bg-primary overflow-hidden"><img src={avatar} alt="avatar" className="w-full h-full object-cover" /></div>
            </div>
            <Menu onClick={toggleMobilebar} size={22} className="sm:hidden cursor-pointer"/>
          </div>
        </nav>
      </header>

      <AnimatePresence>

     {isMobilebarOpen && <Mobilebar isOpen={isMobilebarOpen} onClose={toggleMobilebar} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
