import { forwardRef } from 'react';
import MDInputRoot from '@/atoms/MDInput/MDInputRoot';
import { TMDInput } from './types';

const MDInput = forwardRef<HTMLDivElement, TMDInput>(
  ({ error = false, success = false, disabled = false, endAdornment = true, ...rest }, ref) => (
    <MDInputRoot
      error={error}
      disabled={disabled}
      {...rest}
      ref={ref}
      ownerState={{ error, success, disabled, endAdornment }}
    />
  )
);

MDInput.displayName = 'MDInput';

export default MDInput;
