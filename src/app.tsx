import { Fragment } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Navbar } from '@/components/base/navbar/navbar';
import { Footer } from '@/components/base/footer/footer';
import { PageBackground } from '@/components/base/page-background';

export default function App() {
  return (
    <Fragment>
      <PageBackground>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="relative z-10 flex-1 pb-16 pt-28 md:pb-20 md:pt-32">
            <Outlet />
          </main>
          <Footer />
        </div>
      </PageBackground>
      <ScrollRestoration />
    </Fragment>
  );
}
