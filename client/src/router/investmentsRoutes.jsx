import PageLayout from '@/components/layouts/PageLayout';
import Investments from '@/pages/app/Investments';

export default {
  path: 'investments',
  element: <PageLayout />,
  children: [{ index: true, element: <Investments /> }],
};
