import { Modal } from '@mui/material';
import MDBox from '@/components/atoms/MDBox';
import MDTypography from '@/components/atoms/MDTypography';
import ItemStatus from '../Status/Item';
import AudioPlayer from '@/components/molecules/AudioPlayer';
import { Wrapper, Header, Content } from './elements';
import { TrucksVansStatusDetailsEntity } from '@/core/domain/entities/trucksVans';
import { IModalNotification } from './types';
import { buzzer } from '@/assets/audio';

function ModalNotification({ data, open, onClose, location, countdown }: IModalNotification) {
  const [title, rows] = data;

  const renderItems = () => {
    if (rows?.length) {
      return rows.map((item, idx) => (
        <MDBox key={idx} width="100%">
          <ItemStatus data={item as TrucksVansStatusDetailsEntity} location={location} />
        </MDBox>
      ));
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
    <Modal
      open={open}
      onClose={onClose}
      slotProps={{ backdrop: { style: { backdropFilter: 'blur(4px)' } } }}
    >
      <Wrapper>
        <Header>
          <MDTypography
            sx={({ typography, palette }) => ({
              fontSize: typography.pxToRem(60),
              fontWeight: typography.fontWeightBold,
              color: palette.text.secondary,
              textAlign: 'center',
              textTransform: 'uppercase',
            })}
          >
            {title}
          </MDTypography>
          <AudioPlayer src={buzzer} autoplay loop sx={{ position: 'absolute', right: 0 }} />
        </Header>
        <Content>
          <MDTypography
            sx={({ typography, palette }) => ({
              position: 'absolute',
              fontSize: typography.pxToRem(30),
              fontWeight: typography.fontWeightBold,
              color: palette.error.main,
              lineHeight: 1,
              top: typography.pxToRem(40),
              right: typography.pxToRem(40),
            })}
          >
            close in {countdown}
          </MDTypography>
          {renderItems()}
        </Content>
      </Wrapper>
    </Modal>
  );
}

export default ModalNotification;
