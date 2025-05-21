import ActionLink from '@/components/ui/ActionLink';
import { Send, QrCode, Barcode, Smartphone } from 'lucide-react';
import { StyledContainer } from './QuickActions.styles';

const actionsLinks = [
  { label: 'transfer', navigateTo: '/app/transfers', Icon: <Send /> },
  { label: 'pix', navigateTo: '/app/pix', Icon: <QrCode /> },
  { label: 'pay', navigateTo: '/app/pay', Icon: <Barcode /> },
  { label: 'recharge', navigateTo: '/app/recharge', Icon: <Smartphone /> },
];

function QuickActions() {
  return (
    <StyledContainer>
      {actionsLinks.map(({ label, navigateTo, Icon }) => (
        <ActionLink
          label={label}
          navigateTo={navigateTo}
          Icon={Icon}
          key={navigateTo}
        />
      ))}
    </StyledContainer>
  );
}

export default QuickActions;
