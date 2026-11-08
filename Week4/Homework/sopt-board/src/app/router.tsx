import { createBrowserRouter, Navigate, redirect } from 'react-router';

import MemberCodePage from '@/domains/member/pages/MemberCodePage';
import PostDetailPage from '@/domains/post/pages/PostDetailPage';
import PostEditPage from '@/domains/post/pages/PostEditPage';
import PostListPage from '@/domains/post/pages/PostListPage';
import PostWritePage from '@/domains/post/pages/PostWritePage';
import { ROUTES } from '@/shared/constants/routes';
import { STORAGE_KEYS } from '@/shared/constants/storage';

import ProtectedLayout from './layouts/ProtectedLayout';

const requireAuthorizationCode = () => {
  if (!localStorage.getItem(STORAGE_KEYS.AUTHORIZATION_CODE)) {
    alert('회원 코드를 먼저 발급받아 주세요.');
    return redirect(ROUTES.MEMBER_CODE);
  }
  return null;
};

export const router = createBrowserRouter([
  { path: ROUTES.MEMBER_CODE, element: <MemberCodePage /> },
  {
    element: <ProtectedLayout />,
    loader: requireAuthorizationCode,
    HydrateFallback: () => null,
    children: [
      { path: ROUTES.POST_LIST, element: <PostListPage /> },
      { path: ROUTES.POST_WRITE, element: <PostWritePage /> },
      { path: ROUTES.POST_DETAIL, element: <PostDetailPage /> },
      { path: ROUTES.POST_EDIT, element: <PostEditPage /> },
    ],
  },
  { path: '*', element: <Navigate to={ROUTES.MEMBER_CODE} replace /> },
]);
