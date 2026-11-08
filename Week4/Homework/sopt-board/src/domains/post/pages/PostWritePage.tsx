import { useState } from 'react';
import { useNavigate } from 'react-router';

import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';
import Textarea from '@/shared/components/Textarea';
import { ROUTES } from '@/shared/constants/routes';

function PostWritePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const isValid = title.trim() && content.trim() && author.trim();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">글쓰기</h1>
      <Input label="제목" maxLength={50} value={title} onChange={(e) => setTitle(e.target.value)} />
      <Textarea
        label="본문"
        maxLength={1000}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Input
        label="작성자"
        maxLength={20}
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <div className="flex justify-end gap-2">
        <Button variant="secondary" onClick={() => navigate(ROUTES.POST_LIST)}>
          목록으로
        </Button>
        <Button disabled={!isValid}>작성하기</Button>
      </div>
    </div>
  );
}

export default PostWritePage;
