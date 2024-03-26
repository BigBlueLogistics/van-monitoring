import { forwardRef } from 'react';
import MDBadgeRoot from '@/components/atoms/MDBadge/MDBadgeRoot';
import { TMDBadge } from './types';

const MDBadge = forwardRef<HTMLSpanElement, TMDBadge>(
  (
    {
      color = 'info',
      variant = 'gradient',
      size = 'sm',
      circular = false,
      indicator = false,
      border = false,
      container = false,
      children,
      ...rest
    },
    ref
  ) => (
    <MDBadgeRoot
      {...rest}
      ownerState={{ color, variant, size, circular, indicator, border, container, children }}
      ref={ref}
      color="default"
    >
      {children}
    </MDBadgeRoot>
  )
);

MDBadge.displayName = 'MDBadge';

export default MDBadge;
