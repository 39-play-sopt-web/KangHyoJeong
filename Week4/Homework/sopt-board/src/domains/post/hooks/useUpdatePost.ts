import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updatePost } from '@/domains/post/api/post';
import { postKeys } from '@/domains/post/api/queryKeys';

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: postKeys.all }),
  });
};
