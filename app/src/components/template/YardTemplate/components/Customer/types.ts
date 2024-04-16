import { AxiosError } from 'axios';
import { CustomerVehicleEntity } from '@/core/domain/entities/trucksVans';
import { TStatus } from '@/types/status';

export type TCustomerItemStatus = {
  data: CustomerVehicleEntity;
  noGutter?: boolean;
  darkMode?: boolean;
};

export type TCustomerListStatus = {
  title?: string;
  status?: TStatus;
  data?: CustomerVehicleEntity[] | null;
  message?: AxiosError | string;
};
