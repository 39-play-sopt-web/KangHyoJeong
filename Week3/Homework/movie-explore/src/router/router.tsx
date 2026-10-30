import { createBrowserRouter } from 'react-router';
import MovieDetailPage from '@/pages/movie-detail/movie-detail-page.tsx';
import MovieExplorePage from '@/pages/movie-explore/movie-explore-page.tsx';
import Layout from '@/shared/components/layout.tsx';
import { PATH } from '@/shared/constants/path.ts';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: PATH.MOVIE_EXPLORE, element: <MovieExplorePage /> },
      { path: PATH.MOVIE_DETAIL, element: <MovieDetailPage /> },
    ],
  },
]);
