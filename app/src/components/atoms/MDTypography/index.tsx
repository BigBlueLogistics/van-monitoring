import { forwardRef } from 'react';
import MDTypographyRoot from '@/components/atoms/MDTypography/MDTypographyRoot';
import { useMaterialUIController } from '@/context';
import { IMDTypography } from './types';

const MDTypography = forwardRef<HTMLSpanElement, IMDTypography>(
  (
    {
      color = 'dark',
      fontWeight = false,
      textTransform = 'none',
      verticalAlign = 'unset',
      textGradient = false,
      opacity = 1,
      children,
      ...rest
    },
    ref
  ) => {
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;

    return (
      <MDTypographyRoot
        {...rest}
        ref={ref}
        ownerState={{
          color,
          textTransform,
          verticalAlign,
          fontWeight,
          opacity,
          textGradient,
          darkMode,
        }}
      >
        {children}
      </MDTypographyRoot>
    );
  }
);

MDTypography.displayName = 'MDTypography';

export default MDTypography;
