import { ChangeEvent } from 'react';
import { CheckboxProps } from '@mui/material';

export type TMDCheckbox = Partial<{
  name: string;
  label: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<any>) => void;
  checked: boolean;
}> &
  CheckboxProps;
