import { createBrowserRouter, Navigate } from 'react-router';

import MemberCodePage from '@/domains/member/pages/MemberCodePage';
import PostDetailPage from '@/domains/post/pages/PostDetailPage';
import PostEditPage from '@/domains/post/pages/PostEditPage';
import PostListPage from '@/domains/post/pages/PostListPage';
import PostWritePage from '@/domains/post/pages/PostWritePage';
import { ROUTES } from '@/shared/constants/routes';

import ProtectedLayout from './layouts/ProtectedLayout';

export const router = createBrowserRouter([
  { path: ROUTES.MEMBER_CODE, element: <MemberCodePage /> },
  {
    element: <ProtectedLayout />,
    children: [
      { path: ROUTES.POST_LIST, element: <PostListPage /> },
      { path: ROUTES.POST_WRITE, element: <PostWritePage /> },
      { path: ROUTES.POST_DETAIL, element: <PostDetailPage /> },
      { path: ROUTES.POST_EDIT, element: <PostEditPage /> },
    ],
  },
  { path: '*', element: <Navigate to={ROUTES.MEMBER_CODE} replace /> },
]);
