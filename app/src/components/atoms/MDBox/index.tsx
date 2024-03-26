import { forwardRef } from 'react';
import MDBoxRoot from '@/components/atoms/MDBox/MDBoxRoot';
import { TMDBox } from './types';

const MDBox = forwardRef<HTMLDivElement, TMDBox>(
  (
    {
      variant = 'contained',
      bgColor = 'transparent',
      color = 'dark',
      opacity = 1,
      borderRadius = 'none',
      shadow = 'none',
      coloredShadow = 'none',
      ...rest
    },
    ref
  ) => (
    <MDBoxRoot
      {...rest}
      ref={ref}
      ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow }}
    />
  )
);

MDBox.displayName = 'MDBox';

export default MDBox;
