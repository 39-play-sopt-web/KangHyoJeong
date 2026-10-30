import { useParams } from 'react-router';

export default function MovieDetailPage() {
  const { movieId } = useParams<{ movieId: string }>();

  return <div>MOVIE DETAILE{movieId}</div>;
}
