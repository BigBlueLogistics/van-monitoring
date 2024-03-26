import { forwardRef } from 'react';
import MDAvatarRoot from '@/components/atoms/MDAvatar/MDAvatarRoot';
import { TMDAvatar } from './types';

const MDAvatar = forwardRef<HTMLDivElement, TMDAvatar>(
  ({ bgColor = 'transparent', size = 'md', shadow = 'none', children, ...rest }, ref) => (
    <MDAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest}>
      {children}
    </MDAvatarRoot>
  )
);

MDAvatar.displayName = 'MDAvatar';

export default MDAvatar;
