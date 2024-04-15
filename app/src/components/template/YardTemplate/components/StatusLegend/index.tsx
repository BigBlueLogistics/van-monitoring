import MDBox from '@/components/atoms/MDBox';
import MDTypography from '@/components/atoms/MDTypography';

function StatusLegend() {
  return (
    <MDBox display="flex" width="10%" justifyContent="space-evenly">
      <MDBox
        sx={({ typography: { pxToRem } }) => ({
          width: pxToRem(25),
          height: pxToRem(25),
          background: '#f0f2f5',
          border: '0.8px solid #bbbbbb',
          borderRadius: '3px',
        })}
      />

      <MDTypography
        sx={({ typography: { pxToRem } }) => ({
          fontSize: pxToRem(20),
          fontWeight: '500',
        })}
      >
        EMPTY
      </MDTypography>

      <MDBox
        sx={({ typography: { pxToRem } }) => ({
          width: pxToRem(25),
          height: pxToRem(25),
          background: 'red',
          border: '0.8px solid #bbbbbb',
          borderRadius: '3px',
        })}
      />

      <MDTypography
        sx={({ typography: { pxToRem } }) => ({
          fontSize: pxToRem(20),
          fontWeight: '500',
        })}
      >
        LOADED
      </MDTypography>
    </MDBox>
  );
}

export default StatusLegend;
