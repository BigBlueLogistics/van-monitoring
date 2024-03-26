import { IconProps } from '@mui/material';
import { LooseType } from '@/types/utility';

export type TIcon = {
  fontSize?: number | LooseType<NonNullable<IconProps['fontSize']>>;
};

export type TMDIcon = TIcon & Omit<IconProps, 'fontSize'>;

export type TOwnerState = {
  ownerState?: TIcon;
};
