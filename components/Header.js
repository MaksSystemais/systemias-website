import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ name }) {
  const pathname = usePathname();
  
  const navItems = [
    { label: 'Projects', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' }
  ];

  return (
    <header className="pt-20 pb-12">
      {/* Original gradient logo commented out
      <div className="block w-12 h-12 mx-auto mb-4 rounded-full bg-conic-180 from-gradient-3 from-0% to-gradient-4 to-100%" />
      */}
      <p className="text-4xl font-bold text-center mb-8">
        <Link href="/" className="bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent hover:from-green-600 hover:to-yellow-500 transition-all duration-300">
          {name}
        </Link>
      </p>
      <nav className="max-w-2xl mx-auto">
        <ul className="flex justify-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className={`transition-colors ${
                    isActive 
                      ? 'text-gray-900 dark:text-white font-medium' 
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
