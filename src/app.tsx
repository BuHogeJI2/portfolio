import { Fragment, useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Navbar } from '@/components/base/navbar/navbar';
import { Footer } from '@/components/base/footer/footer';
import { PageBackground } from '@/components/base/page-background';
import { ETheme } from './components/base/navbar/navbar.types';

export default function App() {
  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    if (savedTheme === ETheme.DARK || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add(ETheme.DARK);
    }
  }, []);

  return (
    <Fragment>
      <PageBackground>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-32">
            <Outlet />
          </main>
          <Footer />
        </div>
      </PageBackground>
      <ScrollRestoration />
    </Fragment>
  );
}
