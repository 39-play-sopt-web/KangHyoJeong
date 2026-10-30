import { useCallback, useRef, useState } from 'react';
import { getMovies } from '@/apis/movie.ts';
import type { RatingFilter } from '@/pages/movie-explore/constants/rating-filters.ts';
import type { Movie } from '@/types/movie.ts';

export const useMovies = ({ minRating, maxRating }: RatingFilter) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const isFetchingRef = useRef(false);

  const hasNextPage = page < totalPages;

  const fetchNextPage = useCallback(() => {
    if (isFetchingRef.current || !hasNextPage) return;

    isFetchingRef.current = true;
    const nextPage = page + 1;

    getMovies({ page: nextPage, minRating, maxRating })
      .then((data) => {
        setMovies((prev) => [...prev, ...data.results]);
        setPage(nextPage);
        setTotalPages(data.total_pages);
      })
      .finally(() => {
        isFetchingRef.current = false;
      });
  }, [hasNextPage, page, minRating, maxRating]);

  return { movies, hasNextPage, fetchNextPage };
};
