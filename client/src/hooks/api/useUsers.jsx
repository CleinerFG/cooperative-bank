import { useMutation } from '@tanstack/react-query';
import { createUser } from '@/services/usersServices';

export function useCreateUser() {
  return useMutation({
    mutationFn: createUser,
  });
}
