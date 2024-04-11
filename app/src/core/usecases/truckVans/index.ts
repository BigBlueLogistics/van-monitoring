import { inject, injectable } from 'tsyringe';
import type ITruckVansRepository from '@/core/domain/repository/trucksVansRepository';

@injectable()
class TrucksVansUseCases {
  constructor(@inject('TruckVansRepositoryImpl') private truckVansRepo: ITruckVansRepository) {}

  async getStatus(location: 'yard' | 'docks') {
    const res = await this.truckVansRepo.getStatus(location);

    return res.data;
  }
}

export default TrucksVansUseCases;
