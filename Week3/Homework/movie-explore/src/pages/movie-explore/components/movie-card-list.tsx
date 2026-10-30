import MovieCard from '@/pages/movie-explore/components/movie-card.tsx';
import { getPosterUrl } from '@/shared/utils/get-poster-url.ts';
import type { Movie } from '@/types/movie.ts';

interface MovieCardListProps {
  movies: Movie[];
}

export default function MovieCardList({ movies }: MovieCardListProps) {
  return (
    <ul className="grid grid-cols-4 gap-6">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard
            movieId={movie.id}
            posterUrl={getPosterUrl(movie.poster_path)}
            title={movie.title}
            releaseDate={movie.release_date}
            rating={movie.vote_average}
            overview={movie.overview}
          />
        </li>
      ))}
    </ul>
  );
}
