import type {
  CreatePostRequest,
  GetPostsParams,
  PostDetail,
  PostSlice,
  UpdatePostRequest,
} from '@/domains/post/types';
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

export const createPost = async (body: CreatePostRequest) => {
  const { data } = await api.post('posts', { json: body }).json<ApiResponse<PostDetail>>();
  return data;
};

export const updatePost = async ({ postId, body }: { postId: number; body: UpdatePostRequest }) => {
  const { data } = await api.put(`posts/${postId}`, { json: body }).json<ApiResponse<PostDetail>>();
  return data;
};

export const deletePost = async (postId: number) => {
  await api.delete(`posts/${postId}`);
};
