// @ts-nocheck
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MDCheckboxRoot from '@/components/atoms/MDCheckbox/MDCheckboxRoot';
import { TMDCheckbox } from './types';

function MDCheckbox({
  label = '',
  onChange = () => {},
  name,
  checked = false,
  ...rest
}: TMDCheckbox) {
  if (label) {
    return (
      <FormGroup {...rest}>
        <FormControlLabel
          name={name}
          control={<MDCheckboxRoot onChange={onChange} checked={checked} />}
          label={label}
        />
      </FormGroup>
    );
  }

  return <MDCheckboxRoot checked={checked} onChange={onChange} />;
}

export default MDCheckbox;
