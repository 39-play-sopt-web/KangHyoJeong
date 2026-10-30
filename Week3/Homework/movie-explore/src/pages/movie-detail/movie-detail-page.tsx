import { Link, useParams } from 'react-router';
import MovieBasicInfo from '@/pages/movie-detail/components/movie-basic-info.tsx';
import MovieMainInfo from '@/pages/movie-detail/components/movie-main-info.tsx';
import { useMovieDetail } from '@/pages/movie-detail/hooks/use-movie-detail.ts';
import { PATH } from '@/shared/constants/path.ts';

export default function MovieDetailPage() {
  const { movieId } = useParams<{ movieId: string }>();
  const { movie, isLoading, isError } = useMovieDetail(movieId!);

  return (
    <div className="pt-17.5 pb-17.5">
      <Link to={PATH.MOVIE_EXPLORE} className="text-nav text-accent">
        ← 목록으로 돌아가기
      </Link>
      {isLoading && <p className="text-muted mt-10">영화 정보를 불러오는 중이에요.</p>}
      {isError && (
        <p className="text-muted mt-10">
          영화 정보를 불러오지 못했어요. 잠시 후 다시 시도해 주세요.
        </p>
      )}
      {movie && (
        <>
          <MovieMainInfo movie={movie} />
          <MovieBasicInfo movie={movie} />
        </>
      )}
    </div>
  );
}
