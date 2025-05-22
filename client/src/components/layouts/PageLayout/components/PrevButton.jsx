import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

function PrevButton({ rootRoute }) {
  const navigate = useNavigate();
  const handleNavigation = () =>
    rootRoute.active ? navigate(rootRoute.path) : navigate(-1);

  return (
    <button onClick={handleNavigation}>
      <ChevronLeft />
    </button>
  );
}

export default PrevButton;
