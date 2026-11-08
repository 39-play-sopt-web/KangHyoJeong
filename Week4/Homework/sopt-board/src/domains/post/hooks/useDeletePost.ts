import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deletePost } from '@/domains/post/api/post';
import { postKeys } from '@/domains/post/api/queryKeys';

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: postKeys.lists() }),
  });
};
