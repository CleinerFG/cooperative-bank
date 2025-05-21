import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

function PrevButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>
      <ChevronLeft />
    </button>
  );
}

export default PrevButton;
