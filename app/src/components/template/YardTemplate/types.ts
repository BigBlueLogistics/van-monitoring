import { ResponseTrucksVansStatusEntity } from '@/core/domain/entities/trucksVans';

export type TYardTemplate = {
  yardStatusData: ResponseTrucksVansStatusEntity;
  location: 'yard' | 'docks';
};
