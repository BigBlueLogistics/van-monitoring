import { inject, injectable } from 'tsyringe';
import type ITruckVansRepository from '@/core/domain/repository/trucksVansRepository';

@injectable()
class TrucksVansUseCases {
  constructor(@inject('TruckVansRepositoryImpl') private truckVansRepo: ITruckVansRepository) {}

  async getStatus(location: 'yard' | 'docks') {
    return (await this.truckVansRepo.getStatus(location)).data;
  }

  async getVehicleStatus(location: 'yard' | 'docks') {
    return (await this.truckVansRepo.getVehicleStatus(location)).data;
  }
}

export default TrucksVansUseCases;
