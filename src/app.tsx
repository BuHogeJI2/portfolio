import { Fragment, useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';
import { PageBackground } from '@/components/page-background';

export default function App() {
  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
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
