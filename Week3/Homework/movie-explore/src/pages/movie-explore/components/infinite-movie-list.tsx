import MovieCardList from '@/pages/movie-explore/components/movie-card-list.tsx';
import type { RatingFilter } from '@/pages/movie-explore/constants/rating-filters.ts';
import { useMovies } from '@/pages/movie-explore/hooks/use-movies.ts';
import { useIntersectionObserver } from '@/shared/hooks/use-intersection-observer.ts';

interface InfiniteMovieListProps {
  filter: RatingFilter;
}

export default function InfiniteMovieList({ filter }: InfiniteMovieListProps) {
  const { movies, hasNextPage, isLoading, isError, fetchNextPage } = useMovies(filter);
  const bottomRef = useIntersectionObserver(fetchNextPage);
  const isEmpty = !isLoading && !isError && movies.length === 0;

  return (
    <>
      <MovieCardList movies={movies} />
      {isLoading && <p className="text-muted py-6 text-center">영화를 불러오는 중이에요.</p>}
      {isError && (
        <p className="text-muted py-6 text-center">
          영화를 불러오지 못했어요. 잠시 후 다시 시도해 주세요.
        </p>
      )}
      {isEmpty && <p className="text-muted py-6 text-center">조건에 맞는 영화가 없어요.</p>}
      {hasNextPage && !isError && <div ref={bottomRef} className="h-1" />}
    </>
  );
}
