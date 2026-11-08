import { useState } from 'react';

import PostCard from '@/domains/post/components/PostCard';
import SearchBar from '@/domains/post/components/SearchBar';
import type { PostSummary } from '@/domains/post/types';

const MOCK_POSTS: PostSummary[] = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: `제목영역입니다. ${index + 1}`,
  content: '내용을 입력하는 설명을 입력하는 본문영역입니다.',
  author: '닉네임',
  createdAt: '2026-12-04T21:04:00',
  updatedAt: '2026-12-04T21:04:00',
}));

function PostListPage() {
  const [keyword, setKeyword] = useState('');

  const posts = MOCK_POSTS.filter((post) => post.title.includes(keyword));

  return (
    <div className="flex flex-col gap-6">
      <SearchBar onSearch={setKeyword} />
      <ul className="flex flex-col gap-4">
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostListPage;
