import { useQuery } from '@tanstack/react-query';

import { getPost } from '@/domains/post/api/post';
import { postKeys } from '@/domains/post/api/queryKeys';

export const usePostDetail = (postId: number) =>
  useQuery({
    queryKey: postKeys.detail(postId),
    queryFn: () => getPost(postId),
  });
