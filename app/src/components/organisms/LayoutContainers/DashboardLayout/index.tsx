import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import MDBox from '@/components/atoms/MDBox';
import { useMaterialUIController, setLayout } from '@/context';
import { TDashboardLayout } from './types';

function DashboardLayout({ children }: TDashboardLayout) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav } = controller;
  const pathname = usePathname();

  useEffect(() => {
    setLayout(dispatch, 'dashboard');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <MDBox
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 3,
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',

        [breakpoints.up('xl')]: {
          marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
          transition: transitions.create(['margin-left', 'margin-right'], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      })}
    >
      {children}
    </MDBox>
  );
}

export default DashboardLayout;
