import { RouteParams } from '@/types/routes';
import { DrawerProps } from '@mui/material';
import { StaticImageData } from 'next/image';

export type TSidenav = {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark';
  imgSrc?: StaticImageData;
  brandName: string;
  accountRole: string;
  routes: RouteParams[];
  handleSignOut: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export type TSidenavCollapse = {
  icon: React.ReactNode;
  name?: string;
  active?: boolean;
} & DrawerProps;
