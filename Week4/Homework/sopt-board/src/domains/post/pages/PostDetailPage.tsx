import { generatePath, useNavigate } from 'react-router';

import PostDetailCard from '@/domains/post/components/PostDetailCard';
import type { PostDetail } from '@/domains/post/types';
import Button from '@/shared/components/Button';
import { ROUTES } from '@/shared/constants/routes';

const MOCK_POST: PostDetail = {
  id: 1,
  title: '제목영역입니다.',
  content:
    '내용을 입력하는 설명을 입력하는 본문영역입니다. 내용을 입력하는 설명을 입력하는 본문영역입니다. 내용을 입력하는 설명을 입력하는 본문영역입니다.',
  author: '닉네임',
  createdAt: '2026-12-04T21:04:00',
  updatedAt: '2026-12-04T21:04:00',
};

function PostDetailPage() {
  const navigate = useNavigate();
  const post = MOCK_POST;

  return (
    <div className="flex flex-col">
      <Button variant="secondary" onClick={() => navigate(ROUTES.POST_LIST)} className="self-start">
        ← 목록으로
      </Button>
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
    </div>
  );
}

export default PostDetailPage;
