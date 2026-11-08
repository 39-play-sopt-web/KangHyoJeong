import { useState } from 'react';
import { generatePath, useNavigate, useParams } from 'react-router';

import { usePostDetail } from '@/domains/post/hooks/usePostDetail';
import { useUpdatePost } from '@/domains/post/hooks/useUpdatePost';
import type { PostDetail } from '@/domains/post/types';
import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';
import Textarea from '@/shared/components/Textarea';
import { ROUTES } from '@/shared/constants/routes';

function PostEditForm({ post }: { post: PostDetail }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const { mutate: update, isPending } = useUpdatePost();

  const isValid = title.trim() && content.trim();

  const handleUpdate = () => {
    update(
      { postId: post.id, body: { title: title.trim(), content: content.trim() } },
      {
        onSuccess: () =>
          navigate(generatePath(ROUTES.POST_DETAIL, { postId: String(post.id) }), {
            replace: true,
          }),
        onError: (error) => alert(error.message),
      },
    );
  };

  return (
    <>
      <Input label="제목" maxLength={50} value={title} onChange={(e) => setTitle(e.target.value)} />
      <Textarea
        label="본문"
        maxLength={1000}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex justify-end gap-2">
        <Button variant="secondary" onClick={() => navigate(-1)}>
          취소
        </Button>
        <Button onClick={handleUpdate} disabled={!isValid || isPending}>
          수정완료
        </Button>
      </div>
    </>
  );
}

function PostEditPage() {
  const { postId } = useParams();
  const { data: post, isPending, isError, error } = usePostDetail(Number(postId));

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">글 수정하기</h1>
      {isPending && <p className="text-center text-foreground-muted">불러오는 중...</p>}
      {isError && <p className="text-center text-danger">{error.message}</p>}
      {post && <PostEditForm post={post} />}
    </div>
  );
}

export default PostEditPage;
