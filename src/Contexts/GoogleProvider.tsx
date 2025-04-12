import { useJsApiLoader } from "@react-google-maps/api";
import { GoogleProviderContext } from "./GoogleProviderContext";
import { Loader } from "../Components/UI";
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const libraries: "places"[] = ["places"];

export interface GoogleProviderValue {
  isLoaded: boolean;
}

const GoogleProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries,
    preventGoogleFontsLoading: true,
  });

  if (!isLoaded) return <Loader />;

  const value: GoogleProviderValue = {
    isLoaded,
  };
  return (
    <GoogleProviderContext.Provider value={value}>
      {children}
    </GoogleProviderContext.Provider>
  );
};

export default GoogleProvider;
