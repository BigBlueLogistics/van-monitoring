import { forwardRef } from 'react';
import MDIconRoot from '@/components/atoms/MDIcon/MDIconRoot';
import { TMDIcon } from './types';

const MDIcon = forwardRef<HTMLSpanElement, TMDIcon>(
  ({ fontSize = 'medium', children, ...rest }, ref) => (
    <MDIconRoot
      fontSize={!Number.isInteger(fontSize) ? (fontSize as any) : undefined}
      {...rest}
      ref={ref}
      ownerState={{ fontSize }}
    >
      {children}
    </MDIconRoot>
  )
);

MDIcon.displayName = 'MDIcon';

export default MDIcon;
