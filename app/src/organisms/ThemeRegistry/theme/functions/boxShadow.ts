/**
  The boxShadow() function helps you to create a box shadow for an element
 */
import rgba from './rgba';
import pxToRem from './pxToRem';

function boxShadow(
  offset: number[] = [],
  radius: number[] = [],
  color: string,
  opacity: number,
  inset = ''
) {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${rgba(
    color,
    opacity
  )}`;
}

export default boxShadow;
