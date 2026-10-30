const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const getPosterUrl = (posterPath: string | null) =>
  posterPath ? `${POSTER_BASE_URL}${posterPath}` : null;
