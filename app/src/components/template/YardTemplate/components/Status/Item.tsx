import { Tooltip } from '@mui/material';
import Image from 'next/image';
import plugIcon from '@/assets/images/plug-icon.png';
import MDBox from '@/components/atoms/MDBox';
import MDTypography from '@/components/atoms/MDTypography';
import { differenceInDays } from 'date-fns';
import { getValue, formatDate } from '@/utils';
import { TItemStatus } from './types';

function ItemStatus({ data, noGutter, location }: TItemStatus) {
  const {
    vanno,
    vmrno,
    type,
    size,
    arrivaldate,
    pluggedstatus,
    currentstatus,
    arrivalstatus,
    whdate,
    whschedule,
    dknum,
  } = data || {};
  const renderPluggedIcon = (pluggedstatus: string) => {
    if (pluggedstatus === 'PLUGGED-IN') {
      return (
        <Tooltip title={pluggedstatus} placement="top">
          <Image src={plugIcon} width={200} height={120} alt="plug" />
        </Tooltip>
      );
    }

    return null;
  };

  const whLoc = () => {
    if (location === 'yard') {
      return ['TRUCK', 'YARD'].indexOf(location.toUpperCase()) > 0
        ? 'CONTAINER / TRUCK YARD'
        : `PARKING ${location}`;
    }

    if (location) {
      return ['TRUCK', 'YARD'].indexOf(location.toUpperCase()) > 0
        ? 'CONTAINER / TRUCK YARD'
        : `DOCK ${location}`;
    }
    return null;
  };

  const status = ({
    whdate,
    currentstatus,
    arrivalstatus,
    whschedule,
  }: {
    whdate: string;
    currentstatus: string;
    arrivalstatus: string;
    whschedule: string;
  }) => {
    if (whdate) {
      if (currentstatus) {
        return currentstatus?.toUpperCase();
      }
      return 'PROCESSED';
    }
    if (whschedule) {
      return `SCHEDULED ${whschedule}`;
    }
    return arrivalstatus?.toUpperCase();
  };

  const ageFromArrivalDate = (arrivaldate: string) => {
    const convertedArrivalDate = new Date(arrivaldate);
    return differenceInDays(new Date(), convertedArrivalDate) || 0;
  };

  const trucksVansStatus = status({ whdate, currentstatus, arrivalstatus, whschedule });

  const statusColor = () => {
    let color = {
      bgColor: 'grey-200',
      heading: 'dark',
      label: 'text',
      value: 'dark',
    };

    if (trucksVansStatus === 'LOADED') {
      color.bgColor = '#d24152';
      color.heading = 'white';
      color.label = 'light';
      color.value = 'light';
    }
    return color;
  };

  return (
    <MDBox
      key={vanno}
      component="div"
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor={statusColor().bgColor}
      borderRadius="lg"
      p={1.2}
      mb={noGutter ? 0 : 1}
    >
      <MDBox width={{ sm: '100%', md: '70%' }} display="flex" flexDirection="column">
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          flexDirection={{ xs: 'column', sm: 'row' }}
          mb={0.2}
        >
          <MDTypography
            fontSize={34}
            variant="button"
            fontWeight="medium"
            textTransform="capitalize"
            color={statusColor().heading}
          >
            {vanno}&nbsp;
          </MDTypography>
        </MDBox>
        <MDBox mb={0.5} lineHeight={0} display="flex">
          <MDTypography variant="caption" width="40%" color={statusColor().label} fontSize={18}>
            VMR:
          </MDTypography>
          <MDTypography
            fontSize={18}
            component="span"
            variant="caption"
            fontWeight="medium"
            textTransform="capitalize"
            color={statusColor().value}
          >
            {vmrno}
          </MDTypography>
        </MDBox>
        <MDBox mb={0.5} lineHeight={0} display="flex">
          <MDTypography variant="caption" width="40%" color={statusColor().label} fontSize={18}>
            Dock/Parking:
          </MDTypography>
          <MDTypography
            fontSize={18}
            component="span"
            variant="caption"
            fontWeight="medium"
            textTransform={dknum ? 'capitalize' : 'lowercase'}
            color={statusColor().value}
          >
            {getValue(whLoc(), 'n/a')}
          </MDTypography>
        </MDBox>
        <MDBox mb={0.5} lineHeight={0} display="flex">
          <MDTypography variant="caption" width="40%" color={statusColor().label} fontSize={18}>
            Type / Size:
          </MDTypography>
          <MDTypography
            fontSize={18}
            variant="caption"
            fontWeight="medium"
            textTransform="capitalize"
            color={statusColor().value}
          >
            {type} / {size}
          </MDTypography>
        </MDBox>
        <MDBox mb={0.5} lineHeight={0} display="flex">
          <MDTypography variant="caption" width="40%" color={statusColor().label} fontSize={18}>
            Arrival:
          </MDTypography>
          <MDTypography
            variant="caption"
            fontWeight="medium"
            color={statusColor().value}
            fontSize={18}
          >
            {getValue(
              formatDate(arrivaldate, {
                format: 'MM/dd/yyyy',
                defaultValue: 'n/a',
              })?.toString()
            )}
          </MDTypography>
          &nbsp;
          <MDTypography
            variant="caption"
            fontWeight="regular"
            color={statusColor().value}
            fontSize={18}
          >
            ({ageFromArrivalDate(arrivaldate)} days(s))
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox width={{ sm: '100%', md: '40%' }} height="100%" margin="auto 0">
        <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
          {renderPluggedIcon(pluggedstatus)}
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

export default ItemStatus;
