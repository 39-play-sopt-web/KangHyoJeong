import { generatePath, useNavigate, useParams } from 'react-router';

import PostDetailCard from '@/domains/post/components/PostDetailCard';
import { usePostDetail } from '@/domains/post/hooks/usePostDetail';
import Button from '@/shared/components/Button';
import { ROUTES } from '@/shared/constants/routes';

function PostDetailPage() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { data: post, isPending, isError, error } = usePostDetail(Number(postId));

  return (
    <div className="flex flex-col">
      <Button variant="secondary" onClick={() => navigate(ROUTES.POST_LIST)} className="self-start">
        ← 목록으로
      </Button>
      {isPending && <p className="mt-9 text-center text-foreground-muted">불러오는 중...</p>}
      {isError && <p className="mt-9 text-center text-danger">{error.message}</p>}
      {post && (
        <>
          <div className="mt-9">
            <PostDetailCard post={post} />
          </div>
          <div className="mt-8 flex justify-end gap-2">
            <Button variant="danger">삭제하기</Button>
            <Button
              onClick={() => navigate(generatePath(ROUTES.POST_EDIT, { postId: String(post.id) }))}
            >
              수정하기
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default PostDetailPage;
