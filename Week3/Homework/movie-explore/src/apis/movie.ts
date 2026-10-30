import { client } from '@/apis/client.ts';
import type { MovieListResponse } from '@/types/movie.ts';

export const getMovies = (page = 1) =>
  client.get('discover/movie', { searchParams: { page } }).json<MovieListResponse>();
