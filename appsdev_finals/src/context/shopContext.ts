import { createContext } from "react";
import { ShopState, initialState } from "../hooks";

export const ShopContext = createContext<ShopState>(initialState);
