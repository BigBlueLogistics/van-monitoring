import { AxiosError } from 'axios';
import { TrucksVansStatusDetailsEntity } from '@/core/domain/entities/trucksVans';
import { TStatus } from '@/types/status';

export type TItemStatus = {
  data: TrucksVansStatusDetailsEntity;
  noGutter?: boolean;
  darkMode?: boolean;
};

export type TListStatus = {
  title?: string;
  status?: TStatus;
  data?: TrucksVansStatusDetailsEntity[] | null;
  message?: AxiosError | string;
};
