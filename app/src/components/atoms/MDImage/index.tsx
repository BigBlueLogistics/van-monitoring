import Image from 'next/image';
import MDBox from '@/components/atoms/MDBox';
import { TMDImageIcon } from './types';

function MDImage({ src, alt = '', width = 24, height = 24, sx, ...rest }: TMDImageIcon) {
  return (
    <MDBox component={Image} src={src} alt={alt} width={width} height={height} sx={sx} {...rest} />
  );
}

export default MDImage;
