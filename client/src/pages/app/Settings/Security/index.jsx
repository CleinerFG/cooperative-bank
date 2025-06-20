import { useUpdatePageLayout } from '@/hooks/pageLayout';
import OperationPassConfig from './components/OperationPassConfig';
import LoginPassConfig from './components/LoginPassConfig';

function Security() {
  useUpdatePageLayout('security');

  return (
    <>
      <OperationPassConfig />
      <LoginPassConfig />
    </>
  );
}

export default Security;
