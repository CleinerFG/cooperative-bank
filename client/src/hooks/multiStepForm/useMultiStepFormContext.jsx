import { useContext } from 'react';
import { MultiStepFormContext } from '@/contexts/MultiStepFormContext';

function useMultiStepFormContext() {
  return useContext(MultiStepFormContext);
}

export default useMultiStepFormContext;
