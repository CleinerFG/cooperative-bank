import { useMatch } from 'react-router-dom';
import Title from './Title';

function SettingsLayout({ title, Icon, children }) {
  const matchRootRoute = useMatch({ path: 'app/settings/', end: true });

  return (
    <>
      <Title text={title} isRootRoute={matchRootRoute} Icon={Icon} />
      <main>{children}</main>
    </>
  );
}

export default SettingsLayout;
