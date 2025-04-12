import { GoogleProviderContext } from "@/Contexts/GoogleProviderContext";
import { useContext } from "react";

const useGoogle = () => {
  const context = useContext(GoogleProviderContext);
  if (!context)
    throw new Error("useGoogle must be used within a GoogleProvider");
  return { ...context };
};

export default useGoogle;
