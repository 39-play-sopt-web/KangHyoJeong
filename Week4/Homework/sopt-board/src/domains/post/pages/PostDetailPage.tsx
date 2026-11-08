import { generatePath, useNavigate, useParams } from 'react-router';

import PostDetailCard from '@/domains/post/components/PostDetailCard';
import { useDeletePost } from '@/domains/post/hooks/useDeletePost';
import { usePostDetail } from '@/domains/post/hooks/usePostDetail';
import Button from '@/shared/components/Button';
import { ROUTES } from '@/shared/constants/routes';

function PostDetailPage() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { data: post, isPending, isError, error } = usePostDetail(Number(postId));
  const { mutate: remove, isPending: isDeleting } = useDeletePost();

  const handleDelete = () => {
    if (!post || !confirm('게시글을 삭제할까요?')) return;

    remove(post.id, {
      onSuccess: () => navigate(ROUTES.POST_LIST, { replace: true }),
      onError: (error) => alert(error.message),
    });
  };

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
            <Button variant="danger" onClick={handleDelete} disabled={isDeleting}>
              삭제하기
            </Button>
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
