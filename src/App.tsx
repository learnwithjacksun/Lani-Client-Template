import { Routes, Route } from "react-router-dom";
import { Splash, Notfound, Onboarding } from "./Pages";
import { Register, Login } from "./Pages/Auth";
import { Dashboard, History, Profile } from "./Pages/Main";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "sonner";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/auth">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default App;
