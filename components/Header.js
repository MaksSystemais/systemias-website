import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header({ name }) {
  const router = useRouter();
  const pathname = router.pathname;
  
  const navItems = [
    { label: 'Home', href: '/' },
    /*{ label: 'Services', href: '/services' },*/
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/about#get-in-touch' }
  ];

  return (
    <header className="w-full pt-4 pb-4">
      <div className="flex items-center justify-between w-full px-0">
        {/* Company name on the left */}
        <div className="flex-shrink-0 text-left">
          <Link href="/" className="font-bold text-2xl text-green-500 hover:text-green-600 transition-all duration-300 tracking-tight">
            {name}
          </Link>
        </div>
        
        {/* Navigation items on the right */}
        <nav className="flex-shrink-0">
          <ul className="flex space-x-8 text-sm">
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
      </div>
    </header>
  );
}
