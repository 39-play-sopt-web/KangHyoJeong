import { Outlet } from 'react-router';
import Header from '@/shared/components/header.tsx';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
