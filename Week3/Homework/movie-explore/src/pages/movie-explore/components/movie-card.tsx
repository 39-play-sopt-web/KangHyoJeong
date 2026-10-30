import { generatePath, Link } from 'react-router';
import { PATH } from '@/shared/constants/path.ts';

interface MovieCardProps {
  movieId: number;
  posterUrl: string | null;
  title: string;
  releaseDate: string;
  rating: number;
  overview: string;
}

export default function MovieCard({
  movieId,
  posterUrl,
  title,
  releaseDate,
  rating,
  overview,
}: MovieCardProps) {
  return (
    <Link
      to={generatePath(PATH.MOVIE_DETAIL, { movieId: String(movieId) })}
      className="bg-surface flex h-full flex-col overflow-hidden rounded-2xl"
    >
      {posterUrl ? (
        <img
          src={posterUrl}
          alt={`${title} 포스터`}
          loading="lazy"
          className="aspect-[2/3] w-full object-cover"
        />
      ) : (
        <div className="bg-line text-muted flex aspect-[2/3] w-full items-center justify-center">
          포스터 없음
        </div>
      )}
      <div className="flex flex-col gap-2 p-4">
        <h3 className="text-strong line-clamp-1">{title}</h3>
        <p className="text-muted">{releaseDate}</p>
        <p className="text-rating text-accent">⭐ {rating.toFixed(1)}</p>
        <p className="text-muted line-clamp-3">{overview || '줄거리 정보가 없어요.'}</p>
      </div>
    </Link>
  );
}
