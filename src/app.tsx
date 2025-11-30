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
          <main className="flex-1 pb-12 pt-32 md:pb-16">
            <Outlet />
          </main>
          <Footer />
        </div>
      </PageBackground>
      <ScrollRestoration />
    </Fragment>
  );
}
