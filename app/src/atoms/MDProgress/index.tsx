import { forwardRef } from 'react';
import MDTypography from '@/atoms/MDTypography';
import MDProgressRoot from '@/atoms/MDProgress/MDProgressRoot';
import { TMDProgress } from './types';

const MDProgress = forwardRef<any, TMDProgress>(
  ({ variant = 'contained', color = 'info', value = 0, label = false, ...rest }, ref) => (
    <>
      {label && (
        <MDTypography variant="button" fontWeight="medium" color="text">
          {value}%
        </MDTypography>
      )}
      <MDProgressRoot
        {...rest}
        ref={ref}
        variant="determinate"
        value={value}
        ownerState={{ color, value, variant }}
      />
    </>
  )
);

MDProgress.displayName = 'MDProgress';

export default MDProgress;
