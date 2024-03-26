import { MouseEventHandler, useState, useEffect } from 'react';
import Fade from '@mui/material/Fade';
import MDAlertRoot2 from '@/components/atoms/MDAlert/MDAlertRoot';
import MDBox from '@/components/atoms/MDBox';
import MDAlertCloseIcon from '@/components/atoms/MDAlert/MDAlertCloseIcon';
import TMDAlert from './types';

function MDAlert({
  severity = 'info',
  variant = 'standard',
  autoHideDuration = 10000,
  dismissible = false,
  sx,
  children,
}: TMDAlert) {
  const [alertStatus, setAlertStatus] = useState('mount');

  const handleAlertStatus = () => setAlertStatus('fadeOut');

  useEffect(() => {
    if (autoHideDuration) {
      const duration = autoHideDuration < 1000 ? 1000 : autoHideDuration;
      setTimeout(() => {
        setAlertStatus('unmount');
      }, duration);
    }
  }, [autoHideDuration]);

  // The base template for the alert
  const alertTemplate = (mount = true) => (
    <MDBox sx={sx}>
      <Fade in={mount} timeout={300}>
        <MDAlertRoot2 severity={severity}>
          <MDBox display="flex" alignItems="center" color="white">
            {children}
          </MDBox>
          {dismissible ? (
            <MDAlertCloseIcon
              onClick={(mount ? handleAlertStatus : null) as MouseEventHandler<HTMLSpanElement>}
            >
              &times;
            </MDAlertCloseIcon>
          ) : null}
        </MDAlertRoot2>
      </Fade>
    </MDBox>
  );

  switch (true) {
    case alertStatus === 'mount':
      return alertTemplate();
    case alertStatus === 'fadeOut':
      setTimeout(() => setAlertStatus('unmount'), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

export default MDAlert;
