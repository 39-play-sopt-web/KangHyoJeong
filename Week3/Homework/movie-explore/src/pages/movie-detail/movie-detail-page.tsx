import { Link, useParams } from 'react-router';
import MovieBasicInfo from '@/pages/movie-detail/components/movie-basic-info.tsx';
import MovieMainInfo from '@/pages/movie-detail/components/movie-main-info.tsx';
import { useMovieDetail } from '@/pages/movie-detail/hooks/use-movie-detail.ts';
import { PATH } from '@/shared/constants/path.ts';

export default function MovieDetailPage() {
  const { movieId } = useParams<{ movieId: string }>();
  const movie = useMovieDetail(movieId!);

  if (!movie) return null;

  return (
    <div className="pt-17.5 pb-17.5">
      <Link to={PATH.MOVIE_EXPLORE} className="text-nav text-accent">
        ← 목록으로 돌아가기
      </Link>
      <MovieMainInfo movie={movie} />
      <MovieBasicInfo movie={movie} />
    </div>
  );
}
