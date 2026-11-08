import type { PostDetail } from '@/domains/post/types';
import { formatDate } from '@/shared/utils/formatDate';

interface PostDetailCardProps {
  post: PostDetail;
}

function PostDetailCard({ post }: PostDetailCardProps) {
  return (
    <article className="flex flex-col rounded-2xl bg-surface px-11 py-10 leading-[normal]">
      <h1 className="text-3xl font-bold wrap-break-word">{post.title}</h1>
      <div className="mt-4 flex gap-3.5 text-sm font-medium">
        <span className="text-primary">{post.author}</span>
        <time dateTime={post.createdAt} className="text-foreground-muted">
          {formatDate(post.createdAt)}
        </time>
      </div>
      <p className="mt-7 text-sm font-medium wrap-break-word whitespace-pre-wrap text-foreground-muted">
        {post.content}
      </p>
    </article>
  );
}

export default PostDetailCard;
