import { createContext } from 'react';
import { useMobxStores } from '../hooks/useMobxStores';
import { StoreController } from './controllers/StoreController';

export const StateContext = createContext<StoreController | null>(null);
export const useStore = () => useMobxStores(StateContext);
export const store = new StoreController();
