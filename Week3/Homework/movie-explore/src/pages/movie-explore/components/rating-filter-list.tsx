import {
  RATING_FILTERS,
  type RatingFilter,
} from '@/pages/movie-explore/constants/rating-filters.ts';
import Chip from '@/shared/components/chip.tsx';

interface RatingFilterListProps {
  selectedFilter: RatingFilter;
  onSelect: (filter: RatingFilter) => void;
}

export default function RatingFilterList({ selectedFilter, onSelect }: RatingFilterListProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {RATING_FILTERS.map((filter) => (
        <li key={filter.label}>
          <Chip
            onClick={() => onSelect(filter)}
            className={filter === selectedFilter ? 'bg-mint text-black' : 'bg-surface text-muted'}
          >
            {filter.label}
          </Chip>
        </li>
      ))}
    </ul>
  );
}
