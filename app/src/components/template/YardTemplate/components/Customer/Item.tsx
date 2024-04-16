import MDBox from '@/components/atoms/MDBox';
import MDTypography from '@/components/atoms/MDTypography';
import { differenceInDays, differenceInHours } from 'date-fns';
import { getValue, formatDate } from '@/utils';
import { TCustomerItemStatus } from './types';

function CustomerItemStatus({ data, noGutter }: TCustomerItemStatus) {
  const { rfid_num, plate_num, company, time_in } = data || {};

  const convertedArrivalDate = new Date(time_in);

  const ageDays = differenceInDays(new Date(), convertedArrivalDate) || 0;

  const ageHours = differenceInHours(new Date(), convertedArrivalDate) || 0;

  const agingDateTime = ageHours < 24 ? `${ageHours} hours` : `${ageDays} days`;

  const statusColor = () => {
    let color = {
      bgColor: 'grey-200',
      heading: 'dark',
      label: 'text',
      value: 'dark',
    };

    if (ageHours > 4) {
      color.bgColor = '#d24152';
      color.heading = 'white';
      color.label = 'light';
      color.value = 'light';
    }
    return color;
  };

  return (
    <MDBox
      component="div"
      bgColor={statusColor().bgColor}
      borderRadius="lg"
      p={1.2}
      mb={noGutter ? 0 : 1}
    >
      <MDBox display="flex" flexDirection="column">
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
            {plate_num}&nbsp;
          </MDTypography>
        </MDBox>
        <MDBox mb={0.5} lineHeight={0} display="flex">
          <MDTypography variant="caption" minWidth="35%" color={statusColor().label} fontSize={18}>
            RFID No.:
          </MDTypography>
          <MDTypography
            fontSize={18}
            component="span"
            variant="caption"
            fontWeight="medium"
            textTransform="capitalize"
            color={statusColor().value}
          >
            {rfid_num}
          </MDTypography>
        </MDBox>
        <MDBox mb={0.5} lineHeight={0} display="flex">
          <MDTypography variant="caption" minWidth="35%" color={statusColor().label} fontSize={18}>
            Company:
          </MDTypography>
          <MDTypography
            fontSize={18}
            variant="caption"
            fontWeight="medium"
            textTransform={company ? 'capitalize' : 'lowercase'}
            color={statusColor().value}
          >
            {getValue(company, 'n/a')}
          </MDTypography>
        </MDBox>
        <MDBox mb={0.5} lineHeight={0} display="flex">
          <MDTypography variant="caption" minWidth="35%" color={statusColor().label} fontSize={18}>
            Arrival:
          </MDTypography>
          <MDTypography
            variant="caption"
            fontWeight="medium"
            color={statusColor().value}
            fontSize={18}
          >
            {getValue(
              formatDate(time_in, {
                format: 'MM/dd/yyyy hh:mm:ss a',
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
            ({agingDateTime})
          </MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

export default CustomerItemStatus;
