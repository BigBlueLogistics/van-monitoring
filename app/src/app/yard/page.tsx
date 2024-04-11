'use client';

import 'reflect-metadata';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import YardTemplate from '@/components/template/YardTemplate';
import { container } from '@/core/dependencies';
import TrucksVansUseCases from '@/core/usecases/truckVans';
import initialData from './data';

function Yard() {
  const { initialYardData } = initialData();
  const searchParams = useSearchParams().get('location');

  const [yardData, setYardData] = useState(initialYardData);
  const useCases = container.resolve<TrucksVansUseCases>(TrucksVansUseCases);

  const fetchYard = async () => {
    if (searchParams) {
      const res = await useCases.getStatus(searchParams as 'yard' | 'docks');
      setYardData(res);
    }
  };

  useEffect(() => {
    fetchYard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <YardTemplate data={yardData} />;
}

export default Yard;
