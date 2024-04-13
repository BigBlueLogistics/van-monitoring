import { TLoading } from './types';

function Loading({ text = 'Loading...' }: TLoading) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export default Loading;
