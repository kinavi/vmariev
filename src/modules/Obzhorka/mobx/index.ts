import { createContext } from 'react';
import { useMobxStores } from '../../../hooks/useMobxStores';
import { Store } from './store';

export const ObjorkaStateContext = createContext<Store | null>(null);
export const useObjorkaStore = () => useMobxStores(ObjorkaStateContext);
