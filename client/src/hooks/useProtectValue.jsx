import { ProtectValueContext } from '@/contexts/ProtectValueContext';
import { useContext } from 'react';

function useProtectValue() {
  return useContext(ProtectValueContext);
}

export default useProtectValue;
