import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => {
  const {
    typography: { pxToRem },
  } = theme;
  return {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: pxToRem(1150),
    height: pxToRem(765),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: pxToRem(20),
    border: '2px solid #000',
  };
});

export const Header = styled(Box)(({ theme }) => {
  const {
    typography: { pxToRem },
    palette: { error },
  } = theme;
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: pxToRem(100),
    lineHeight: 1,
    backgroundColor: error.main,
    borderTopLeftRadius: pxToRem(20),
    borderTopRightRadius: pxToRem(20),
  };
});

export const Content = styled(Box)(({ theme }) => {
  const {
    typography: { pxToRem },
  } = theme;
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    position: 'relative',
    padding: '20px',
    height: pxToRem(565),
  };
});
