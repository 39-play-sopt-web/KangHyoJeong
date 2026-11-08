import { Navigate, Outlet } from 'react-router';

import Header from '@/shared/components/Header';
import { ROUTES } from '@/shared/constants/routes';
import { STORAGE_KEYS } from '@/shared/constants/storage';

function ProtectedLayout() {
  const authorizationCode = localStorage.getItem(STORAGE_KEYS.AUTHORIZATION_CODE);

  if (!authorizationCode) {
    return <Navigate to={ROUTES.MEMBER_CODE} replace />;
  }

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-200 px-4 py-24">
        <Outlet />
      </main>
    </>
  );
}

export default ProtectedLayout;
