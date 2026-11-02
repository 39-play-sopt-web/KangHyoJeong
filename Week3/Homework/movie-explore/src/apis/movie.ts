import { client } from '@/apis/client.ts';
import type { MovieDetail, MovieListResponse } from '@/types/movie.ts';

interface GetMoviesParams {
  page?: number;
  minRating?: number;
  maxRating?: number;
}

export const getMovies = ({ page = 1, minRating, maxRating }: GetMoviesParams = {}) =>
  client
    .get('discover/movie', {
      searchParams: {
        page,
        'vote_average.gte': minRating,
        'vote_average.lte': maxRating,
      },
    })
    .json<MovieListResponse>();

export const getMovieDetail = (movieId: string) =>
  client.get(`movie/${movieId}`).json<MovieDetail>();
