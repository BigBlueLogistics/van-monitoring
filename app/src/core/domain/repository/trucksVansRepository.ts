import { AxiosResponse } from 'axios';
import { ResponseTrucksVansStatusEntity } from '../entities/trucksVans';

interface ITruckVansRepository {
  getStatus(location: 'yard' | 'docks'): Promise<AxiosResponse<ResponseTrucksVansStatusEntity>>;
}

export default ITruckVansRepository;
