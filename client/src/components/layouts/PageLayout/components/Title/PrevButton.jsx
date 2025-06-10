import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

function PrevButton() {
  const navigate = useNavigate();
  const handleNavigation = () => navigate(-1);
  
  return (
    <button onClick={handleNavigation}>
      <ChevronLeft />
    </button>
  );
}

export default PrevButton;
