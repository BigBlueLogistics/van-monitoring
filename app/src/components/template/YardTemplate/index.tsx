'use client';

import Grid from '@mui/system/Unstable_Grid';
import MDBox from '@/components/atoms/MDBox';
import Status from './components/Status';
import { TYardTemplate } from './types';

function YardTemplate({ data }: TYardTemplate) {
  const { data: yardData, status } = data;

  const renderStatus = () => {
    const objYard = Object.entries(yardData ?? []);

    return objYard?.map((item) => {
      const title = item[1][0];
      return (
        <Grid key={title} xs={12} sm={4}>
          <Status title={title} data={item[1][1]} status={status} />
        </Grid>
      );
    });
  };

  return (
    <MDBox p={3}>
      <Grid container spacing={3} height="100vh" overflow="hidden">
        {renderStatus()}
      </Grid>
    </MDBox>
  );
}
export default YardTemplate;
