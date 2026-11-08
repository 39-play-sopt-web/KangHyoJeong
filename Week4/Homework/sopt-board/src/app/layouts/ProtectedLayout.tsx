import { Outlet } from 'react-router';

import Header from '@/shared/components/Header';

function ProtectedLayout() {
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
