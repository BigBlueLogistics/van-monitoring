import { buildStatusUseCase, TGetStatusUseCase } from './getStatus.bk';
import TruckVansRepository from '@/core/domain/repository/trucksVansRepository';

type TTrucksVansUseCases = {
  getTruckVansStatus: TGetStatusUseCase;
};

export default function trucksVansUseCases(dependencies: {
  truckVansRepo: TruckVansRepository;
}): TTrucksVansUseCases {
  const { truckVansRepo } = dependencies;

  const getTruckVansStatus = buildStatusUseCase({ truckVansRepo });

  return {
    getTruckVansStatus,
  };
}
