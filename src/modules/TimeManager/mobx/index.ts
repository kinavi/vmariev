import { createContext } from "react";
import { Store } from "./Store";
import { useMobxStores } from "../../../hooks/useMobxStores";

export const StateContext = createContext<Store | null>(null);
export const useTimeManagerStore = () => useMobxStores(StateContext);