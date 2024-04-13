'use client';

import React from 'react';
import { SWRConfig } from 'swr';
import { swrOptDefault } from '@/config/swr';

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return <SWRConfig value={swrOptDefault()}>{children}</SWRConfig>;
};
