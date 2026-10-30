import { useEffect, useState } from 'react';
import { getMovies } from '@/apis/movie.ts';
import type { RatingFilter } from '@/pages/movie-explore/constants/rating-filters.ts';
import type { Movie } from '@/types/movie.ts';

export const useMovies = ({ minRating, maxRating }: RatingFilter) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies({ minRating, maxRating }).then((data) => setMovies(data.results));
  }, [minRating, maxRating]);

  return movies;
};
