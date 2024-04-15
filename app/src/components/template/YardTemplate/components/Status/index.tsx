import Card from '@mui/material/Card';
import MDBox from '@/components/atoms/MDBox';
import MDTypography from '@/components/atoms/MDTypography';
import Marquee from '@/components/molecules/Marquee';
import SkeletonList from '@/components/organisms/Skeleton/List';
import ItemStatus from './Item';
import { TListStatus } from './types';

function Status({ title = '', data, status, location }: TListStatus) {
  const renderItems = () => {
    if (data?.length) {
      return data.map((item, idx) => <ItemStatus key={idx} data={item} location={location} />);
    }

    return (
      <MDBox component="div" display="flex" justifyContent="center" alignItems="center">
        <MDTypography variant="body2" fontWeight="light" textAlign="center" fontSize={30}>
          No data available.
        </MDTypography>
      </MDBox>
    );
  };

  return (
    <Card sx={{ height: '100%' }}>
      <MDBox pt={3} px={2} display="inline-flex" justifyContent="space-between">
        <MDTypography variant="h1" fontWeight="medium">
          {title}
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2} height="100%">
        {status === 'loading' ? (
          <SkeletonList noOfItems={5} width="100%" height="98px" />
        ) : (
          <Marquee>{renderItems()}</Marquee>
        )}
      </MDBox>
    </Card>
  );
}

export default Status;
