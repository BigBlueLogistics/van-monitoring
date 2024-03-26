import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';

export default styled(Alert)(() => {
  return {
    '& .MuiAlert-message': {
      display: 'inline-flex',
      width: '100%',
      justifyContent: 'space-between',
    },
  };
});
