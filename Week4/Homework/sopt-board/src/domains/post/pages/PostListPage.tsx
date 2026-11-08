import { useState } from 'react';

import PostCard from '@/domains/post/components/PostCard';
import SearchBar from '@/domains/post/components/SearchBar';
import { usePostList } from '@/domains/post/hooks/usePostList';

function PostListPage() {
  const [keyword, setKeyword] = useState('');
  const { data: posts, isPending, isError, error } = usePostList(keyword);

  return (
    <div className="flex flex-col gap-6">
      <SearchBar onSearch={setKeyword} />
      {isPending && <p className="text-center text-foreground-muted">불러오는 중...</p>}
      {isError && <p className="text-center text-danger">{error.message}</p>}
      {posts?.length === 0 && <p className="text-center text-foreground-muted">게시글이 없어요.</p>}
      <ul className="flex flex-col gap-4">
        {posts?.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostListPage;
