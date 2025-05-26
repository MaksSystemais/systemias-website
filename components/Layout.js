import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';

/**
 * GradientBackground Component
 * Renders a gradient background with two possible variants:
 * - 'large': Full color background
 * - 'small': Bottom color background
 * @param {string} variant - The style variant to apply ('large' or 'small')
 * @param {string} className - Additional CSS classes to apply
 */
export function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className
  );

  return <div className={classes} />;
}

/**
 * Layout Component
 * Main layout wrapper that handles theme management and provides consistent page structure
 * Features:
 * - Dark/Light theme support
 * - System theme detection
 * - Theme persistence in localStorage
 * @param {ReactNode} children - Child components to be rendered within the layout
 */
export default function Layout({ children }) {
  /**
   * Sets the initial theme based on localStorage preferences
   * Applies 'dark' class to document root if dark theme is selected
   */
  const setAppTheme = () => {
    const darkMode = localStorage.getItem('theme') === 'dark';
    const lightMode = localStorage.getItem('theme') === 'light';

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else if (lightMode) {
      document.documentElement.classList.remove('dark');
    }
    return;
  };

  /**
   * Handles system theme changes
   * Listens for system preference changes and updates theme accordingly
   * Updates localStorage with the new theme preference
   */
  const handleSystemThemeChange = () => {
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    darkQuery.onchange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };
  };

  // Set initial theme on component mount
  useEffect(() => {
    setAppTheme();
  }, []);

  // Set up system theme change listener on component mount
  useEffect(() => {
    handleSystemThemeChange();
  }, []);

  // Render layout with centered content and max width
  return (
    <div className="relative pb-24 overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
        {children}
      </div>
    </div>
  );
}
