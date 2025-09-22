import React from 'react';

const Button = ({ 
  href, 
  children, 
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out no-underline leading-none text-center';
  
  const variants = {
    primary: 'bg-[rgb(22,163,74)] hover:bg-[rgb(21,128,61)] text-white',
    secondary: 'bg-transparent hover:bg-[rgb(22,163,74)] text-[rgb(22,163,74)] hover:text-white border-2 border-[rgb(22,163,74)]',
    gradient: 'bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white'
  };

  const sizes = {
    small: 'px-4 py-2 text-xs h-8',
    medium: 'px-4 py-2 text-sm h-10',
    large: 'px-4 py-2 text-base h-12',
  };

  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.medium;

  const buttonClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();

  return (
    <a
      href={href}
      className={buttonClasses}
      {...props}
    >
      {children}
    </a>
  );
};

export default Button;
