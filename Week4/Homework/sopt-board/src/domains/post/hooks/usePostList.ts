import { useQuery } from '@tanstack/react-query';

import { getPosts } from '@/domains/post/api/post';
import { postKeys } from '@/domains/post/api/queryKeys';

export const usePostList = (keyword: string) =>
  useQuery({
    queryKey: postKeys.list(keyword),
    queryFn: () => getPosts({ keyword: keyword || undefined }),
    select: (data) => data.posts,
  });
