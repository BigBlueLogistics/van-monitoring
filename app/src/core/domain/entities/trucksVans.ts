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

export type CustomerVehicleEntity = {
  rfid_num: string;
  vehicle_type: string;
  company: string;
  plate_num: string;
  time_in: string;
};

export type VehicleStatusEntity = {
  movement_type: string;
  date_time: string;
  name: string;
  dock_no: string;
};

export type TrucksVansStatusEntity = Record<
  string,
  [string, TrucksVansStatusDetailsEntity[] | CustomerVehicleEntity[]]
>;

export type ResponseTrucksVansStatusEntity = TResponse<TrucksVansStatusEntity>;
export type ResponseVehicleStatusEntity = TResponse<VehicleStatusEntity[]>;
