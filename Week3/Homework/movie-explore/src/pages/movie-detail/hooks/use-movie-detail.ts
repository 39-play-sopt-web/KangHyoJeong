import { useEffect, useState } from 'react';
import { getMovieDetail } from '@/apis/movie.ts';
import type { MovieDetail } from '@/types/movie.ts';

export const useMovieDetail = (movieId: string) => {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getMovieDetail(movieId)
      .then((data) => setMovie(data))
      .catch(() => setIsError(true));
  }, [movieId]);

  const isLoading = !movie && !isError;

  return { movie, isLoading, isError };
};
