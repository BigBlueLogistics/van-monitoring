import { AxiosResponse } from 'axios';
import ITruckVansRepository from '@/core/domain/repository/trucksVansRepository';
import { ResponseTrucksVansStatusEntity } from '@/core/domain/entities/trucksVans';
import HttpAdapter from '../adapter/httpAdapter';

class TruckVansRepositoryImpl extends HttpAdapter implements ITruckVansRepository {
  getStatus(type: 'yard' | 'docks'): Promise<AxiosResponse<ResponseTrucksVansStatusEntity>> {
    return this.get(`/yard/status`, { params: { type } });
  }
}

export default TruckVansRepositoryImpl;
