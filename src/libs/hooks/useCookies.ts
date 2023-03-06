import Cookies from 'js-cookie';

type TSetCookieOptions = {
  expires: Date;
  path: string;
};

type TGetCookieOptions = {
  domain: string;
};

type TSetCookieFunction = (
  cookieName: string,
  value: string,
  options?: TSetCookieOptions
) => void;

type TGetCookieFunction = (
  cookieName: string,
  options?: TGetCookieOptions
) => string | undefined;

interface IUseCookies {
  setCookie: TSetCookieFunction;
  getCookie: TGetCookieFunction;
}

export default function useCookies(): IUseCookies {
  const defaultSetCookieOptions: TSetCookieOptions = {
    // just make the cookie not session based
    expires: new Date(new Date().getFullYear() + 1, 1),
    path: '/',
  };

  const defaultGetCookieOptions: TGetCookieOptions = {
    domain: '/',
  };

  function setCookie(
    cookieName: string,
    value: string,
    options?: TSetCookieOptions
  ): void {
    Cookies.set(cookieName, value, options || defaultSetCookieOptions);
  }

  function getCookie(cookieName: string, options?: TGetCookieOptions) {
    return Cookies.get(cookieName, options || defaultGetCookieOptions);
  }

  return {
    setCookie,
    getCookie,
  };
}
