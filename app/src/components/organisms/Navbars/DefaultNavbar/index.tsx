import { useState, useEffect, MouseEvent } from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Icon from '@mui/material/Icon';
import MDBox from '@/components/atoms/MDBox';
import MDTypography from '@/components/atoms/MDTypography';
import MDButton from '@/components/atoms/MDButton';

import DefaultNavbarLink from '@/components/organisms/Navbars/DefaultNavbar/DefaultNavbarLink';
import DefaultNavbarMobile from '@/components/organisms/Navbars/DefaultNavbar/DefaultNavbarMobile';
import breakpoints from '@/components/organisms/ThemeRegistry/theme/base/breakpoints';
import { useMaterialUIController } from '@/context';
import { TDefaultNavbar } from './types';

function DefaultNavbar({ transparent, light, action }: TDefaultNavbar) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [mobileNavbar, setMobileNavbar] = useState<HTMLDivElement | boolean>(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = ({ currentTarget }: MouseEvent<HTMLDivElement>) =>
    setMobileNavbar(currentTarget.parentNode as HTMLDivElement);
  const closeMobileNavbar = () => setMobileNavbar(false);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener('resize', displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', displayMobileNavbar);
  }, []);

  return (
    <Container>
      <MDBox
        py={1}
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        my={3}
        mx={3}
        width="calc(100% - 48px)"
        borderRadius="lg"
        shadow={transparent ? 'none' : 'md'}
        color={light ? 'white' : 'dark'}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        left={0}
        zIndex={3}
        sx={({
          palette: { transparent: transparentColor, white, background },
          functions: { rgba },
        }) => ({
          backgroundColor: transparent
            ? transparentColor.main
            : rgba(darkMode ? background.sidenav : white.main, 0.8),
          backdropFilter: transparent ? 'none' : `saturate(200%) blur(30px)`,
        })}
      >
        <MDBox
          component={Link}
          to="/"
          py={transparent ? 1.5 : 0.75}
          lineHeight={1}
          pl={{ xs: 0, lg: 1 }}
        >
          <MDTypography variant="button" fontWeight="bold" color={light ? 'white' : 'dark'}>
            {process.env.REACT_APP_NAME}
          </MDTypography>
        </MDBox>
        <MDBox color="inherit" display={{ xs: 'none', lg: 'flex' }} m={0} p={0}>
          <DefaultNavbarLink icon="account_circle" name="sign up" route="/sign-up" light={light} />
          <DefaultNavbarLink icon="key" name="sign in" route="/sign-in" light={light} />
        </MDBox>
        {action &&
          (action.type === 'internal' ? (
            <MDBox display={{ xs: 'none', lg: 'inline-block' }}>
              <MDButton
                component={Link}
                to={action.route}
                variant="gradient"
                color={action.color ? action.color : 'info'}
                size="small"
              >
                {action.label}
              </MDButton>
            </MDBox>
          ) : (
            <MDBox display={{ xs: 'none', lg: 'inline-block' }}>
              <MDButton
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                variant="gradient"
                color={action.color ? action.color : 'info'}
                size="small"
                sx={{ mt: -0.3 }}
              >
                {action.label}
              </MDButton>
            </MDBox>
          ))}
        <MDBox
          display={{ xs: 'inline-block', lg: 'none' }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          sx={{ cursor: 'pointer' }}
          onClick={openMobileNavbar}
        >
          <Icon fontSize="medium">{mobileNavbar ? 'close' : 'menu'}</Icon>
        </MDBox>
      </MDBox>
      {mobileView && <DefaultNavbarMobile open={mobileNavbar} close={closeMobileNavbar} />}
    </Container>
  );
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: null,
};

export default DefaultNavbar;
