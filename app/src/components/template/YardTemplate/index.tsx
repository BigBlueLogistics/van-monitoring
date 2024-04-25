'use client';

import { useEffect, useMemo, useState } from 'react';
import Grid from '@mui/system/Unstable_Grid';
import MDBox from '@/components/atoms/MDBox';
import Status from './components/Status';
import CustomerStatus from './components/Customer';
import StatusLegend from './components/StatusLegend';
import ModalNotification from './components/ModalNotification';
import { useCountdown } from '@/hooks';
import { TYardTemplate } from './types';
import {
  TrucksVansStatusDetailsEntity,
  CustomerVehicleEntity,
} from '@/core/domain/entities/trucksVans';

function YardTemplate({ yardStatusData, location }: TYardTemplate) {
  const { count, resetCount } = useCountdown();
  const [showModalNotification, setShowModalNotification] = useState(false);

  const { data: yardData, status: yardStatus } = yardStatusData;

  const countToShowModal = 11;
  const objYard = Object.entries(yardData ?? []);
  const yardStatusList = useMemo(() => objYard.slice(0, 3), [objYard]);
  const vehicleStatusList = useMemo(
    () => objYard.slice(-1)[0][1],

    [objYard]
  );

  const onOpenModal = () => {
    setShowModalNotification(true);
  };

  const onCloseModal = () => {
    setShowModalNotification(false);
  };

  const renderStatus = () => {
    return yardStatusList?.map((item, idx) => {
      const title = item[1][0];

      // Render for customer vehicle
      if (location === 'docks' && idx === 2) {
        return (
          <Grid key={title} xs={12} sm={4}>
            <CustomerStatus
              title={title}
              data={item[1][1] as CustomerVehicleEntity[]}
              status={yardStatus}
            />
          </Grid>
        );
      }

      // Render for all docks and yard
      return (
        <Grid key={title} xs={12} sm={4}>
          <Status
            title={title}
            data={item[1][1] as TrucksVansStatusDetailsEntity[]}
            status={yardStatus}
            location={location}
          />
        </Grid>
      );
    });
  };

  useEffect(() => {
    console.log('vehicle data', vehicleStatusList[1]);
    if (vehicleStatusList[1]?.length) {
      if (showModalNotification && count === countToShowModal) {
        onCloseModal();
        resetCount();
      }

      if (!showModalNotification && count >= 5) {
        onOpenModal();
        resetCount();
      }
    } else {
      onCloseModal();
    }
  }, [count, resetCount, showModalNotification, vehicleStatusList]);

  return (
    <>
      <ModalNotification
        data={vehicleStatusList}
        open={showModalNotification}
        location={location}
        countdown={countToShowModal - count}
        onClose={onCloseModal}
      />
      <MDBox p={3}>
        <StatusLegend />
        <Grid container spacing={3} height="100vh">
          {renderStatus()}
        </Grid>
      </MDBox>
    </>
  );
}
export default YardTemplate;
