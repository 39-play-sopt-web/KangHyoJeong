import InfoCard from '@/pages/movie-detail/components/info-card.tsx';
import {
  formatCountry,
  formatLanguage,
  formatUsd,
} from '@/pages/movie-detail/utils/format-movie-info.ts';
import type { MovieDetail } from '@/types/movie.ts';

interface MovieBasicInfoProps {
  movie: MovieDetail;
}

export default function MovieBasicInfo({ movie }: MovieBasicInfoProps) {
  const infos = [
    { label: '원제', value: movie.original_title },
    { label: '원어', value: formatLanguage(movie.original_language) },
    {
      label: '제작 국가',
      value: movie.production_countries
        .map(({ iso_3166_1 }) => formatCountry(iso_3166_1))
        .join(', '),
    },
    {
      label: '사용 언어',
      value: movie.spoken_languages.map(({ iso_639_1 }) => formatLanguage(iso_639_1)).join(', '),
    },
    { label: '예산', value: formatUsd(movie.budget) },
    { label: '수익', value: formatUsd(movie.revenue) },
  ];

  return (
    <section className="mt-10">
      <h3 className="text-section">기본 정보</h3>
      <ul className="mt-8.5 grid grid-cols-4 gap-4">
        {infos.map(({ label, value }) => (
          <li key={label}>
            <InfoCard label={label} value={value || '정보 없음'} />
          </li>
        ))}
      </ul>
    </section>
  );
}
