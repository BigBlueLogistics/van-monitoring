import 'reflect-metadata';
import { container } from 'tsyringe';

import TruckVansRepositoryImpl from './data/repository/trucksVansRepositoryImpl';
import TrucksVansUseCases from './usecases/truckVans';

container.register('TruckVansRepositoryImpl', { useClass: TruckVansRepositoryImpl });
container.register('TrucksVansUseCases', { useClass: TrucksVansUseCases });

export { container };
