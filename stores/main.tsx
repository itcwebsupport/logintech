import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

export type Site = {
  email: string | null;
  phone: string | null;
  phone2: string | null;
  address: string | null;
  openingTime: string | null;
  facebookUrl: string | null;
  youtubeUrl: string | null;
  instagramUrl: string | null;
  linkedinUrl: string | null;
  threadsUrl: string | null;
  tiktokUrl: string | null;
};

const initialState: { isMenuCollapsed: boolean; site: Site } = {
  isMenuCollapsed: true,
  site: {
    email: null,
    phone: null,
    phone2: null,
    address: null,
    openingTime: null,
    facebookUrl: null,
    youtubeUrl: null,
    instagramUrl: null,
    linkedinUrl: null,
    threadsUrl: null,
    tiktokUrl: null
  }
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setMenuCollapsed(state, action: PayloadAction<boolean>) {
      state.isMenuCollapsed = action.payload;
    }
  },
});

export const {
  setMenuCollapsed
} = mainSlice.actions;

export const makeStore = (site?: Site) => configureStore({
  reducer: { main: mainSlice.reducer },
  preloadedState: site ? { main: { ...initialState, site } } : undefined,
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T,>(selector: (state: RootState) => T) =>
  useSelector<RootState, T>(selector);

export const useSite = () => useAppSelector((state) => state.main.site);
