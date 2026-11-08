import { generatePath, Link } from 'react-router';

import type { PostSummary } from '@/domains/post/types';
import { ROUTES } from '@/shared/constants/routes';
import { formatDate } from '@/shared/utils/formatDate';

interface PostCardProps {
  post: PostSummary;
}

function PostCard({ post }: PostCardProps) {
  return (
    <Link
      to={generatePath(ROUTES.POST_DETAIL, { postId: String(post.id) })}
      className="flex h-30 flex-col justify-center gap-3 rounded-xl bg-surface px-6 leading-[normal] transition hover:brightness-110"
    >
      <h2 className="truncate text-base font-semibold">{post.title}</h2>
      <p className="truncate text-sm font-medium text-foreground-muted">{post.content}</p>
      <div className="flex gap-2 text-sm font-medium">
        <span className="text-primary">{post.author}</span>
        <time dateTime={post.createdAt} className="text-foreground-muted">
          {formatDate(post.createdAt)}
        </time>
      </div>
    </Link>
  );
}

export default PostCard;
