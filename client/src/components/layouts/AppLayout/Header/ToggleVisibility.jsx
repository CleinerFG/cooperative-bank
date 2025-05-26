import useProtectValue from '@/hooks/useProtectValue';
import { Eye, EyeClosed } from 'lucide-react';

function ToggleVisibility() {
  const { isHidden, toggleHidden } = useProtectValue();

  return (
    <button onClick={toggleHidden}>
      {isHidden ? <EyeClosed /> : <Eye />}
    </button>
  );
}

export default ToggleVisibility;
