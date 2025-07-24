import { useEffect } from 'react';

const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    fill="none"
    viewBox="0 0 25 24"
    className="dark:opacity-50"
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      clipPath="url(#clip0_192_823)"
    >
      <path d="M12.5 17a5 5 0 100-10 5 5 0 000 10zM12.5 1v2M12.5 21v2M4.72 4.22l1.42 1.42M18.86 18.36l1.42 1.42M1.5 12h2M21.5 12h2M4.72 19.78l1.42-1.42M18.86 5.64l1.42-1.42"></path>
    </g>
    <defs>
      <clipPath id="clip0_192_823">
        <path
          className="text-white fill-current"
          d="M0 0H24V24H0z"
          transform="translate(.5)"
        ></path>
      </clipPath>
    </defs>
  </svg>
);

const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    fill="none"
    viewBox="0 0 21 20"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="text-gray-400 stroke-current dark:text-white"
      d="M19.5 10.79A9 9 0 119.71 1a7 7 0 009.79 9.79v0z"
    ></path>
  </svg>
);

const instagramIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    className="dark:opacity-50"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z"
    ></path>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 11.37a4 4 0 11-7.914 1.173A4 4 0 0116 11.37zM17.5 6.5h.01"
    ></path>
  </svg>
);

const linkedInIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    className="dark:opacity-50"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM6 9H2v12h4V9zM4 6a2 2 0 100-4 2 2 0 000 4z"
    />
  </svg>
);

const ThemeSwitcher = () => {
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="flex justify-center p-1 mt-6 bg-gray-900 dark:bg-gray-900 rounded-3xl">
      <button
        type="button"
        aria-label="Use Dark Mode"
        onClick={() => {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }}
        className="flex items-center justify-center w-24 h-10 p-2 pr-2 transition-colors duration-200 ease-in-out cursor-pointer bg-transparent dark:bg-primary rounded-3xl align-center"
      >
        {moonIcon}
      </button>

      <button
        type="button"
        aria-label="Use Light Mode"
        onClick={() => {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }}
        className="flex items-center justify-center w-24 h-10 p-2 pr-2 transition-colors duration-200 ease-in-out cursor-pointer bg-primary dark:bg-transparent rounded-3xl align-center"
      >
        {sunIcon}
      </button>
    </div>
  );
};

export default function Footer({ copyrightText }) {
  return (
    <footer className="flex flex-col items-center py-16">
      <div className="flex items-center gap-4 mb-4">
        <a
          href="https://www.instagram.com/_systemais_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors"
          aria-label="Follow us on Instagram"
        >
          {instagramIcon}
        </a>
        <a
          href="https://www.linkedin.com/company/107707966/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors"
          aria-label="Follow us on LinkedIn"
        >
          {linkedInIcon}
        </a>
      </div>
      <p className="mb-3 font-bold uppercase dark:text-white opacity-60">
        {copyrightText}
      </p>
      <ThemeSwitcher />
    </footer>
  );
}
