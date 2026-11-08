import { useState, type SubmitEvent } from 'react';

import searchIcon from '@/shared/assets/icons/icSearch.svg';

interface SearchBarProps {
  defaultValue?: string;
  onSearch: (keyword: string) => void;
}

function SearchBar({ defaultValue = '', onSearch }: SearchBarProps) {
  const [keyword, setKeyword] = useState(defaultValue);

  const isEmpty = !keyword.trim();

  const handleChange = (value: string) => {
    setKeyword(value);
    if (!value.trim()) onSearch('');
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(keyword.trim());
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="flex items-center gap-3 rounded-full border border-primary px-5 py-4"
    >
      <input
        type="text"
        value={keyword}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="검색어를 입력해주세요."
        aria-label="검색어"
        className="min-w-0 flex-1 bg-transparent text-base font-medium outline-none placeholder:text-foreground-muted"
      />
      <button
        type="submit"
        aria-label="검색"
        disabled={isEmpty}
        className="disabled:cursor-not-allowed disabled:opacity-50"
      >
        <img src={searchIcon} alt="" className="size-6" />
      </button>
    </form>
  );
}

export default SearchBar;
