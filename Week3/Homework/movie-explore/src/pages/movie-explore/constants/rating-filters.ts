export interface RatingFilter {
  label: string;
  minRating?: number;
  maxRating?: number;
}

export const RATING_FILTERS: RatingFilter[] = [
  { label: '전체' },
  { label: '9점 이상', minRating: 9 },
  { label: '8점대', minRating: 8, maxRating: 8.999 },
  { label: '7점대', minRating: 7, maxRating: 7.999 },
  { label: '6점대', minRating: 6, maxRating: 6.999 },
  { label: '6점 미만', maxRating: 5.999 },
];
