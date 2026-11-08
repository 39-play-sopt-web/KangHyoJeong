import type { components, operations } from '@/shared/types/api';

export type PostSummary = components['schemas']['PostSummaryResponse'];
export type PostDetail = components['schemas']['PostDetailResponse'];
export type PostSlice = components['schemas']['PostSliceResponse'];
export type CreatePostRequest = components['schemas']['CreatePostRequest'];
export type UpdatePostRequest = components['schemas']['UpdatePostRequest'];
export type GetPostsParams = NonNullable<operations['getPosts']['parameters']['query']>;
