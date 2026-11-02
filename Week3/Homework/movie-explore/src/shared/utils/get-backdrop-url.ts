const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/w1280';

export const getBackdropUrl = (backdropPath: string | null) =>
  backdropPath ? `${BACKDROP_BASE_URL}${backdropPath}` : null;
