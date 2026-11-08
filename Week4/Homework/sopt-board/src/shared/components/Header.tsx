import { Link, NavLink, useNavigate } from 'react-router';

import { queryClient } from '@/shared/api/queryClient';
import { ROUTES } from '@/shared/constants/routes';
import { STORAGE_KEYS } from '@/shared/constants/storage';

const navItemClassName = ({ isActive }: { isActive: boolean }) =>
  `p-2.5 text-sm font-semibold ${isActive ? 'text-primary' : 'text-foreground-muted'}`;

function Header() {
  const navigate = useNavigate();
  const part = localStorage.getItem(STORAGE_KEYS.PART);

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEYS.AUTHORIZATION_CODE);
    localStorage.removeItem(STORAGE_KEYS.PART);
    queryClient.clear();
    navigate(ROUTES.MEMBER_CODE, { replace: true });
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-border px-11">
      <div className="flex items-center gap-4">
        <Link to={ROUTES.POST_LIST} className="text-2xl font-bold text-foreground">
          PLAY SOPT 게시판
        </Link>
        {part && (
          <span className="rounded-2xl border border-primary px-2.5 py-[5px] text-xs font-semibold text-primary">
            {part} 파트
          </span>
        )}
      </div>
      <nav className="flex gap-4">
        <NavLink to={ROUTES.POST_LIST} end className={navItemClassName}>
          게시글 목록
        </NavLink>
        <NavLink to={ROUTES.POST_WRITE} className={navItemClassName}>
          글쓰기
        </NavLink>
        <button
          type="button"
          onClick={handleLogout}
          className="p-2.5 text-sm font-semibold text-foreground-muted"
        >
          로그아웃
        </button>
      </nav>
    </header>
  );
}

export default Header;
