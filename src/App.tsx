import { Routes, Route } from "react-router-dom";
import { Splash, Notfound, Onboarding } from "./Pages";
import { Register, Type, Login } from "./Pages/Auth";
import { CreateOrder, Dashboard, History, Profile } from "./Pages/Main";
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
          <Route path="type" element={<Type />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order">
          <Route path="create" element={<CreateOrder />} />
          <Route path="all" element={<History />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default App;
