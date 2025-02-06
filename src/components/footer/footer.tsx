import { ReactElement } from 'react';

export function Footer(): ReactElement {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} Dzmitry Dziamidovich. Making
          internet a better place 🌐
        </p>
      </div>
    </footer>
  );
}
