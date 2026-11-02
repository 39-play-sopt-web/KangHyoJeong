import Chip from '@/shared/components/chip.tsx';
import { getBackdropUrl } from '@/shared/utils/get-backdrop-url.ts';
import { getPosterUrl } from '@/shared/utils/get-poster-url.ts';
import type { MovieDetail } from '@/types/movie.ts';

interface MovieMainInfoProps {
  movie: MovieDetail;
}

export default function MovieMainInfo({ movie }: MovieMainInfoProps) {
  const backdropUrl = getBackdropUrl(movie.backdrop_path);
  const posterUrl = getPosterUrl(movie.poster_path);
  const summary = [movie.release_date, movie.runtime ? `${movie.runtime}분` : '', movie.status]
    .filter(Boolean)
    .join(' | ');

  return (
    <section className="bg-line relative mt-10 overflow-hidden">
      {backdropUrl && (
        <>
          <img src={backdropUrl} alt="" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}

      <div className="relative grid min-h-109 grid-cols-3 items-center gap-10 p-10">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={`${movie.title} 포스터`}
            className="mx-auto aspect-2/3 h-89 rounded-lg object-cover"
          />
        ) : (
          <div className="bg-surface text-muted mx-auto flex aspect-2/3 h-89 items-center justify-center rounded-lg">
            포스터 없음
          </div>
        )}

        <div className="col-span-2">
          <p className="text-body text-muted">{summary}</p>
          <h2 className="text-title mt-2 text-white">{movie.title}</h2>
          <p className="text-rating text-mint mt-5">
            ⭐ {movie.vote_average.toFixed(1)}
            <span className="text-body text-muted ml-2">
              ({movie.vote_count.toLocaleString()}명 참여)
            </span>
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <li key={genre.id}>
                <Chip className="bg-surface text-mint">{genre.name}</Chip>
              </li>
            ))}
          </ul>
          <div className="text-body mt-9 flex flex-col gap-2">
            <h3 className="text-white">줄거리</h3>
            <p className="text-muted">{movie.overview || '줄거리 정보가 없어요.'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
