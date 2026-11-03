'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, type AppStore, type Site } from '@/stores/main';

// per-request store instance (Next App Router), lásd Redux Toolkit + Next docs
export default function StoreProvider({ children, site }: { children: React.ReactNode; site?: Site }) {
  const storeRef = useRef<AppStore>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore(site);
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
