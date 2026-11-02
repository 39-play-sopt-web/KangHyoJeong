import { useCallback, useRef, useState } from 'react';
import { getMovies } from '@/apis/movie.ts';
import type { RatingFilter } from '@/pages/movie-explore/constants/rating-filters.ts';
import type { Movie } from '@/types/movie.ts';

export const useMovies = ({ minRating, maxRating }: RatingFilter) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const isFetchingRef = useRef(false);

  const hasNextPage = page < totalPages;

  const fetchNextPage = useCallback(() => {
    if (isFetchingRef.current || !hasNextPage || isError) return;

    isFetchingRef.current = true;
    setIsLoading(true);
    const nextPage = page + 1;

    getMovies({ page: nextPage, minRating, maxRating })
      .then((data) => {
        setMovies((prev) => [...prev, ...data.results]);
        setPage(nextPage);
        setTotalPages(data.total_pages);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        isFetchingRef.current = false;
        setIsLoading(false);
      });
  }, [hasNextPage, isError, page, minRating, maxRating]);

  return { movies, hasNextPage, isLoading, isError, fetchNextPage };
};
