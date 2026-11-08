import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createPost } from '@/domains/post/api/post';
import { postKeys } from '@/domains/post/api/queryKeys';

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: postKeys.all }),
  });
};
