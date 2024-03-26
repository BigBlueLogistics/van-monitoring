import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import MDFormControlRoot from '@/components/atoms/MDSelect/MDFormControlRoot';

import MDSelectRoot from '@/components/atoms/MDSelect/MDSelectRoot';
import { TMDSelect } from './types';

function MDSelect({
  variant = 'standard',
  label = '',
  helperText = '',
  showArrowIcon = false,
  optKeyValue = 'value',
  optKeyLabel = 'label',
  withOptionKeys = true,
  name,
  onChange,
  options,
  value,
  error,
  itemStyle,
  ...rest
}: TMDSelect) {
  const renderOptionsWithoutCustomKeys = () => {
    return (
      options?.length &&
      options.map((optValue, idx) => (
        // @ts-ignore
        <MenuItem key={idx} value={optValue} sx={itemStyle}>
          {optValue as string}
        </MenuItem>
      ))
    );
  };

  const renderOptionsWithCustomKeys = () => {
    if (withOptionKeys) {
      const customOptValue = optKeyValue || 'value';
      const customOptLabel = optKeyLabel || 'label';

      return (
        options?.length &&
        options.map((opt, idx) => (
          // @ts-ignore
          <MenuItem key={idx} value={opt[customOptValue]} sx={itemStyle}>
            {/* @ts-ignore */}
            {opt[customOptLabel]}
          </MenuItem>
        ))
      );
    }

    return renderOptionsWithoutCustomKeys();
  };

  return (
    <MDFormControlRoot {...rest}>
      <InputLabel id={`select-label-${label}`}>{label}</InputLabel>
      <MDSelectRoot
        name={name}
        variant={variant}
        labelId={`select-label-${label}`}
        id={`select-${label}`}
        value={value}
        label={label}
        onChange={onChange}
        ownerState={{ showArrowIcon, variant }}
        error={error}
      >
        {renderOptionsWithCustomKeys()}
      </MDSelectRoot>
      {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </MDFormControlRoot>
  );
}

export default MDSelect;
