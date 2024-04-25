import { TError } from './types';

function Error({ text = 'Something went wrong!' }: TError) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export default Error;
