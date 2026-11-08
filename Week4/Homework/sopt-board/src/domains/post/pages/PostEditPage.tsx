import { useState } from 'react';
import { useNavigate } from 'react-router';

import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';
import Textarea from '@/shared/components/Textarea';

const MOCK_POST = {
  title: '제목영역입니다.',
  content: '내용을 입력하는 설명을 입력하는 본문영역입니다.',
};

function PostEditPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState(MOCK_POST.title);
  const [content, setContent] = useState(MOCK_POST.content);

  const isValid = title.trim() && content.trim();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">글 수정하기</h1>
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
        <Button disabled={!isValid}>수정완료</Button>
      </div>
    </div>
  );
}

export default PostEditPage;
