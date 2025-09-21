import React from 'react';

const Button = ({ 
  href, 
  children, 
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded transition-all duration-300 ease-in-out no-underline';
  
  const variants = {
    primary: 'bg-gray-800 hover:bg-gray-700 text-white',
    secondary: 'bg-transparent hover:bg-gray-800 text-gray-800 hover:text-white border-2 border-gray-800',
    gradient: 'bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white'
  };

  const sizes = {
    small: 'py-0.5 px-3 text-sm',
    medium: 'py-0.5 px-4 text-base',
    large: 'py-0.5 px-6 text-lg'
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
