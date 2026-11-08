import type { GetPostsParams, PostDetail, PostSlice } from '@/domains/post/types';
import { api } from '@/shared/api/instance';
import type { ApiResponse } from '@/shared/types/apiResponse';

export const getPosts = async (params: GetPostsParams) => {
  const { data } = await api.get('posts', { searchParams: params }).json<ApiResponse<PostSlice>>();
  return data;
};

export const getPost = async (postId: number) => {
  const { data } = await api.get(`posts/${postId}`).json<ApiResponse<PostDetail>>();
  return data;
};
