import { TStatus } from '@/types/status';

export type TResponse<TData> = {
  status: TStatus;
  data: TData;
  message: string;
};
