import { TResponse } from './response';

export type TrucksVansStatusDetailsEntity = {
  vanno: string;
  vmrno: string;
  type: string;
  size: string;
  location: string;
  pluggedstatus: string;
  arrivaldate: string;
  whdate: string;
  currentstatus: string;
  arrivalstatus: string;
  whschedule: string;
  dknum: string;
};

export type TrucksVansStatusEntity = Record<string, [string, TrucksVansStatusDetailsEntity[]]>;

export type ResponseTrucksVansStatusEntity = TResponse<TrucksVansStatusEntity | null>;
