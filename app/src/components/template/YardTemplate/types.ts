import { ResponseTrucksVansStatusEntity } from '@/core/domain/entities/trucksVans';

export type TYardTemplate = {
  data: ResponseTrucksVansStatusEntity;
  location: 'yard' | 'docks';
};
