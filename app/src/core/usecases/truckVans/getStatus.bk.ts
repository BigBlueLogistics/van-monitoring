import { ResponseTrucksVansStatusEntity } from '@/core/domain/entities/trucksVans';
import type TruckVansRepository from '@/core/domain/repository/trucksVansRepository';

export type TGetStatusUseCase = (type: 'yard' | 'docks') => Promise<ResponseTrucksVansStatusEntity>;

export const buildStatusUseCase = (dependencies: {
  truckVansRepo: TruckVansRepository;
}): TGetStatusUseCase => {
  const getStatus: TGetStatusUseCase = async (type: 'yard' | 'docks') => {
    const {
      truckVansRepo: { getStatus },
    } = dependencies;

    const res = await getStatus(type);

    return res.data;
  };

  return getStatus;
};
