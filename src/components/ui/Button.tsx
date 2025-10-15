import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  variant?: 'default' | 'outline' | 'outline-gray';
  loading?: boolean;
  fullWidth?: boolean;
}

export const Button = ({
  children,
  size = 'large',
  variant = 'default',
  loading = false,
  disabled = false,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    xsmall: 'h-8 px-3 text-xs rounded-lg',
    small: 'h-10 px-4 text-sm rounded-xl',
    medium: 'h-12 px-6 text-base rounded-xl',
    large: 'h-14 px-8 text-lg rounded-2xl',
  };

  const variantClasses = {
    default: `
      bg-[var(--primary)] hover:bg-[var(--primary-hover)] active:bg-[var(--primary-pressed)]
      text-white font-semibold
      disabled:bg-[var(--primary-disabled)] disabled:text-gray-400
      transition-all duration-200
      shadow-md hover:shadow-lg
    `,
    outline: `
      bg-white border-2 border-[var(--primary)] hover:bg-blue-50 active:bg-blue-100
      text-[var(--primary)] font-semibold
      disabled:border-gray-300 disabled:text-gray-400 disabled:bg-white
      transition-all duration-200
    `,
    'outline-gray': `
      bg-white border-2 border-gray-300 hover:bg-gray-50 active:bg-gray-100
      text-gray-700 font-semibold
      disabled:border-gray-200 disabled:text-gray-400 disabled:bg-white
      transition-all duration-200
    `,
  };

  return (
    <button
      className={`
        font-sans
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${loading || disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-2 font-sans">
          <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
          <span className="font-sans">로딩중...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};
