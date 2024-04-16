'use client';

import Grid from '@mui/system/Unstable_Grid';
import MDBox from '@/components/atoms/MDBox';
import Status from './components/Status';
import CustomerStatus from './components/Customer';
import { TYardTemplate } from './types';
import StatusLegend from './components/StatusLegend';
import {
  TrucksVansStatusDetailsEntity,
  CustomerVehicleEntity,
} from '@/core/domain/entities/trucksVans';

function YardTemplate({ data, location }: TYardTemplate) {
  const { data: yardData, status } = data;

  const renderStatus = () => {
    const objYard = Object.entries(yardData ?? []);

    return objYard?.map((item, idx) => {
      const title = item[1][0];

      if (location === 'docks') {
        // Render for docks
        if (idx <= 1) {
          return (
            <Grid key={title} xs={12} sm={4}>
              <Status
                title={title}
                data={item[1][1] as TrucksVansStatusDetailsEntity[]}
                status={status}
                location={location}
              />
            </Grid>
          );
        }

        // Render for customer vehicle
        return (
          <Grid key={title} xs={12} sm={4}>
            <CustomerStatus
              title={title}
              data={item[1][1] as CustomerVehicleEntity[]}
              status={status}
            />
          </Grid>
        );
      }

      // Render for all yard
      return (
        <Grid key={title} xs={12} sm={4}>
          <Status
            title={title}
            data={item[1][1] as TrucksVansStatusDetailsEntity[]}
            status={status}
            location={location}
          />
        </Grid>
      );
    });
  };

  return (
    <MDBox p={3}>
      <StatusLegend />
      <Grid container spacing={3} height="100vh">
        {renderStatus()}
      </Grid>
    </MDBox>
  );
}
export default YardTemplate;
