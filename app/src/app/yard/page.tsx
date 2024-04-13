'use client';

import 'reflect-metadata';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import { container } from '@/core/dependencies';
import TrucksVansUseCases from '@/core/usecases/truckVans';
import Loading from '@/components/molecules/Loading';
import YardTemplate from '@/components/template/YardTemplate';
import initialData from './data';

function Yard() {
  const { initialYardData } = initialData();
  const searchParams = useSearchParams().get('location');

  const useCases = container.resolve<TrucksVansUseCases>(TrucksVansUseCases);
  const { data, isLoading } = useSWR(
    'yard',
    async () => await useCases.getStatus(searchParams as 'yard' | 'docks')
  );

  if (isLoading) {
    return <Loading />;
  }

  return <YardTemplate data={data || initialYardData} />;
}

export default Yard;
