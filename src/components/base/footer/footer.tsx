import { ReactElement } from 'react';
import {
  footerStyles,
  footerContainerStyles,
  footerTextStyles,
} from './footer.styles';

export function Footer(): ReactElement {
  return (
    <footer className={footerStyles}>
      <div className={footerContainerStyles}>
        <p className={footerTextStyles}>
          &copy; {new Date().getFullYear()} Dzmitry Dziamidovich. Making
          internet a better place 🌐
        </p>
      </div>
    </footer>
  );
}
