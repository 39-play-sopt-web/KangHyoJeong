import { Outlet } from 'react-router';
import Header from '@/shared/components/header.tsx';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="mx-auto box-content max-w-5xl px-6">
        <Outlet />
      </main>
    </>
  );
}
