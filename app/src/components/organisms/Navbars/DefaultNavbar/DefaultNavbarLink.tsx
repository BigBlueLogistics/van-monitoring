import Link from 'next/link';
import Icon from '@mui/material/Icon';

import MDBox from '@/components/atoms/MDBox';
import MDTypography from '@/components/atoms/MDTypography';
import { TDefaultNavbarLink } from './types';

function DefaultNavbarLink({ icon, name, route, light }: TDefaultNavbarLink) {
  return (
    <MDBox
      component={Link}
      to={route}
      mx={1}
      p={1}
      display="flex"
      alignItems="center"
      sx={{ cursor: 'pointer', userSelect: 'none' }}
    >
      <Icon
        sx={{
          color: ({ palette: { white, secondary } }) => (light ? white.main : secondary.main),
          verticalAlign: 'middle',
        }}
      >
        {icon}
      </Icon>
      <MDTypography
        variant="button"
        fontWeight="regular"
        color={light ? 'white' : 'dark'}
        textTransform="capitalize"
        sx={{ width: '100%', lineHeight: 0 }}
      >
        &nbsp;{name}
      </MDTypography>
    </MDBox>
  );
}

export default DefaultNavbarLink;
