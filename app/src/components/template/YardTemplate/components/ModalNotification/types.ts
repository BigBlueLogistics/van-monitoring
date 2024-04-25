import {
  CustomerVehicleEntity,
  TrucksVansStatusDetailsEntity,
} from '@/core/domain/entities/trucksVans';

export type IModalNotification = {
  data: [string, TrucksVansStatusDetailsEntity[] | CustomerVehicleEntity[]];
  open: boolean;
  location: 'yard' | 'docks';
  countdown: number;
  onClose: () => void;
};
