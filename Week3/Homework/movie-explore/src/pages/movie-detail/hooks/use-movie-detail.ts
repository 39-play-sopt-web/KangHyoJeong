import { useEffect, useState } from 'react';
import { getMovieDetail } from '@/apis/movie.ts';
import type { MovieDetail } from '@/types/movie.ts';

export const useMovieDetail = (movieId: string) => {
  const [movie, setMovie] = useState<MovieDetail | null>(null);

  useEffect(() => {
    getMovieDetail(movieId).then((data) => setMovie(data));
  }, [movieId]);

  return movie;
};
