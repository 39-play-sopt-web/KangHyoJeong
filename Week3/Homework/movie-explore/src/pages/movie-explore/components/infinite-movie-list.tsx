import MovieCardList from '@/pages/movie-explore/components/movie-card-list.tsx';
import type { RatingFilter } from '@/pages/movie-explore/constants/rating-filters.ts';
import { useMovies } from '@/pages/movie-explore/hooks/use-movies.ts';
import { useIntersectionObserver } from '@/shared/hooks/use-intersection-observer.ts';

interface InfiniteMovieListProps {
  filter: RatingFilter;
}

export default function InfiniteMovieList({ filter }: InfiniteMovieListProps) {
  const { movies, hasNextPage, fetchNextPage } = useMovies(filter);
  const bottomRef = useIntersectionObserver(fetchNextPage);

  return (
    <>
      <MovieCardList movies={movies} />
      {hasNextPage && <div ref={bottomRef} className="h-1" />}
    </>
  );
}
