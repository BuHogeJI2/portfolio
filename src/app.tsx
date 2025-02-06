import { Fragment } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';

export default function App() {
  return (
    <Fragment>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-24">
          <Outlet />
        </main>
        <Footer />
      </div>
      <ScrollRestoration />
    </Fragment>
  );
}
