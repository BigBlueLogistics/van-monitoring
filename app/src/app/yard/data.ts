import { TYardTemplate } from '@/components/template/YardTemplate/types';

export default function initialData() {
  const initialYardData: TYardTemplate['yardStatusData'] = {
    data: null,
    message: '',
    status: 'idle',
  };

  return {
    initialYardData,
  };
}
