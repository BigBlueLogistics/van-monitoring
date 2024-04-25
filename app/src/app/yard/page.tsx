'use client';

import 'reflect-metadata';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import { container } from '@/core/dependencies';
import TrucksVansUseCases from '@/core/usecases/truckVans';
import Loading from '@/components/molecules/Loading';
import Error from '@/components/molecules/Error';
import YardTemplate from '@/components/template/YardTemplate';
import initialData from './data';

function Yard() {
  const { initialYardData } = initialData();
  const searchParams = useSearchParams().get('location') as 'yard' | 'docks';

  const useCases = container.resolve<TrucksVansUseCases>(TrucksVansUseCases);
  const {
    data: yardDataStatus,
    isLoading: isLoadingYard,
    error,
  } = useSWR('yard-status', async () => await useCases.getStatus(searchParams));

  if (isLoadingYard) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <YardTemplate yardStatusData={yardDataStatus || initialYardData} location={searchParams} />
  );
}

export default Yard;
