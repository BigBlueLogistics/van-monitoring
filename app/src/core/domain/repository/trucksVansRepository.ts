import { AxiosResponse } from 'axios';
import {
  ResponseTrucksVansStatusEntity,
  ResponseVehicleStatusEntity,
} from '../entities/trucksVans';

interface ITruckVansRepository {
  getStatus(location: 'yard' | 'docks'): Promise<AxiosResponse<ResponseTrucksVansStatusEntity>>;

  getVehicleStatus(location: 'yard' | 'docks'): Promise<AxiosResponse<ResponseVehicleStatusEntity>>;
}

export default ITruckVansRepository;
