import { useState } from 'react';
import InfiniteMovieList from '@/pages/movie-explore/components/infinite-movie-list.tsx';
import RatingFilterList from '@/pages/movie-explore/components/rating-filter-list.tsx';
import { RATING_FILTERS } from '@/pages/movie-explore/constants/rating-filters.ts';

export default function MovieExplorePage() {
  const [selectedFilter, setSelectedFilter] = useState(RATING_FILTERS[0]);

  return (
    <section className="pt-17.5">
      <h2 className="text-title">영화 둘러보기</h2>
      <div className="mt-7">
        <RatingFilterList selectedFilter={selectedFilter} onSelect={setSelectedFilter} />
      </div>
      <div className="mt-8">
        <InfiniteMovieList key={selectedFilter.label} filter={selectedFilter} />
      </div>
    </section>
  );
}
