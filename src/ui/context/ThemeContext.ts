import { createContext } from 'react';
import { ITheme } from './types';

export const ThemeContext = createContext<ITheme | null>(null);
