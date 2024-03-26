'use client';
import { useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Icon from '@mui/material/Icon';
import MDBox from '@/components/atoms/MDBox';
import Sidenav from '@/components/organisms/Sidenav';
import Configurator from '@/components/organisms/Configurator';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from '@/context';
import { signOut, setIsAuthenticated, reAuthenticate } from '@/redux/auth/action';
import { useAppDispatch } from '@/hooks';
import brand from '@/assets/images/logo-bblc.png';
import selector from './selector';
import routes from '@/routes';

import theme from './theme';
import themeDark from './theme-dark';

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  const reduxDispatch = useAppDispatch();
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor, darkMode } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const pathname = usePathname();
  const { accountRole } = selector();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  const handleSignOut = () => {
    reduxDispatch(signOut());
    reduxDispatch(setIsAuthenticated(false));
    localStorage.removeItem('apiToken');
  };

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute('dir', direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, [pathname]);

  // Check user if authenticated when page reload
  useEffect(() => {
    const apiToken = localStorage.getItem('apiToken');
    if (apiToken && pathname !== '/sign-in') {
      // console.log("run redux reauth");
      reduxDispatch(reAuthenticate());
    }
  }, [pathname, reduxDispatch]);

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: 'pointer' }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={darkMode ? themeDark : theme}>
        <CssBaseline />
        {layout === 'dashboard' && (
          <>
            <Sidenav
              color={sidenavColor}
              imgSrc={brand}
              brandName="WMS"
              accountRole={accountRole}
              routes={routes}
              handleSignOut={handleSignOut}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
        )}
        {layout === 'vr' && <Configurator />}
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
