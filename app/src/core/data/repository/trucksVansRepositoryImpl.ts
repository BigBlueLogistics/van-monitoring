import { AxiosResponse } from 'axios';
import ITruckVansRepository from '@/core/domain/repository/trucksVansRepository';
import {
  ResponseTrucksVansStatusEntity,
  ResponseVehicleStatusEntity,
} from '@/core/domain/entities/trucksVans';
import HttpAdapter from '../adapter/httpAdapter';

class TruckVansRepositoryImpl extends HttpAdapter implements ITruckVansRepository {
  getStatus(location: 'yard' | 'docks'): Promise<AxiosResponse<ResponseTrucksVansStatusEntity>> {
    return this.get(`/yard/status`, { params: { location } });
  }

  getVehicleStatus(
    location: 'yard' | 'docks'
  ): Promise<AxiosResponse<ResponseVehicleStatusEntity>> {
    return this.get('/yard/vehicle-status', { params: { location } });
  }
}

export default TruckVansRepositoryImpl;
