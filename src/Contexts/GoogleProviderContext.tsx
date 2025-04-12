import { createContext } from "react";
import { GoogleProviderValue } from "./GoogleProvider";

export const GoogleProviderContext = createContext<GoogleProviderValue | null>(null);
