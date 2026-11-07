import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<{ name: string; size?: number; className?: string }> = ({
  name,
  size = 20,
  className = "",
}) => {
  const iconKey = name.toLowerCase().replace(/[\s\.\-]+/g, '');

  switch (iconKey) {
    case 'html5':
    case 'html':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M4.12 21.05L2.5 3H21.5L19.88 21.05L12 23.23L4.12 21.05Z" fill="#E34F26" />
          <path d="M12 21.36L18.42 19.58L19.78 4.47H12V21.36Z" fill="#EF652A" />
          <path d="M12 8.42H8.38L8.63 11.2H12V13.98H8.88L9.25 18.06L12 18.82V20.25L7.75 19.07L7.12 12.08L7 10.77L6.75 8H6.62L6.5 6.64H12V8.42Z" fill="#EBEBEB" />
          <path d="M12 13.98V11.2H15.37L15.68 7.72H12V5.94H17.48L17.17 9.42L16.88 12.7L16.76 13.98H12ZM12 18.82V17.39L14.73 16.63L14.94 14.33H16.73L16.25 19.07L12 18.82Z" fill="#FFFFFF" />
        </svg>
      );

    case 'css3':
    case 'css':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M4.12 21.05L2.5 3H21.5L19.88 21.05L12 23.23L4.12 21.05Z" fill="#1572B6" />
          <path d="M12 21.36L18.42 19.58L19.78 4.47H12V21.36Z" fill="#33A9DC" />
          <path d="M12 8.42H8.38L8.63 11.2H12V13.98H8.88L9.25 18.06L12 18.82V20.25L7.75 19.07L7.12 12.08L7 10.77L6.75 8H6.62L6.5 6.64H12V8.42Z" fill="#EBEBEB" />
          <path d="M12 13.98V11.2H15.37L15.68 7.72H12V5.94H17.48L17.17 9.42L16.88 12.7L16.76 13.98H12ZM12 18.82V17.39L14.73 16.63L14.94 14.33H16.73L16.25 19.07L12 18.82Z" fill="#FFFFFF" />
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M6.5 18.2C7.3 18.2 7.9 17.8 8.2 17.2C8.4 16.8 8.5 16.2 8.5 14.9V10H10.5V14.9C10.5 16.6 10.2 17.8 9.5 18.7C8.8 19.5 7.7 19.9 6.3 19.9C5.2 19.9 4.3 19.6 3.7 19.1L4.4 17.4C4.9 17.8 5.6 18.2 6.5 18.2Z" fill="#000000" />
          <path d="M14.5 19.9C13 19.9 12 19.3 11.3 18.3L12.9 17.1C13.4 17.8 14 18.2 14.8 18.2C15.7 18.2 16.2 17.7 16.2 17.1C16.2 16.4 15.7 16.1 14.5 15.6L13.9 15.3C12.4 14.7 11.6 13.8 11.6 12.4C11.6 10.7 13 9.7 14.9 9.7C16.1 9.7 17.1 10.1 17.8 10.8L16.4 12.2C15.9 11.7 15.4 11.4 14.8 11.4C14.1 11.4 13.6 11.8 13.6 12.3C13.6 12.9 14 13.2 15.1 13.6L15.7 13.8C17.4 14.5 18.3 15.4 18.3 16.9C18.3 18.7 16.8 19.9 14.5 19.9Z" fill="#000000" />
        </svg>
      );

    case 'typescript':
    case 'ts':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M4.5 9H13.5V11.2H10.1V19H7.9V11.2H4.5V9Z" fill="#FFFFFF" />
          <path d="M14.8 17.6C15.4 18.1 16.3 18.4 17.3 18.4C18.6 18.4 19.3 17.8 19.3 17C19.3 16.2 18.8 15.8 17.4 15.2C15.6 14.5 14.6 13.7 14.6 12.2C14.6 10.5 16 9.4 18 9.4C19.2 9.4 20.3 9.8 21 10.5L19.7 12C19.1 11.6 18.5 11.3 17.9 11.3C17.1 11.3 16.7 11.7 16.7 12.1C16.7 12.6 17.1 12.9 18.2 13.4C20.1 14.1 21.3 14.9 21.3 16.6C21.3 18.6 19.7 19.7 17.3 19.7C15.9 19.7 14.6 19.2 13.7 18.4L14.8 17.6Z" fill="#FFFFFF" />
        </svg>
      );

    case 'react':
    case 'reactjs':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      );

    case 'nextjs':
    case 'next':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="11" fill="#000000" stroke="#FFFFFF" strokeWidth="1.2" />
          <path d="M7.5 7.5V16.5H9.5V11.2L15.6 19.1C16.3 18.4 16.9 17.5 17.3 16.6L9.6 6.8H7.5V7.5Z" fill="#FFFFFF" />
          <path d="M14.5 7.5H16.5V13.8L14.5 11.2V7.5Z" fill="#FFFFFF" />
        </svg>
      );

    case 'tailwind':
    case 'tailwindcss':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 6C9.5 6 8 7.5 7.5 10.5C8.5 9 9.75 8.5 11.25 9C12.15 9.3 12.8 10 13.5 10.75C14.7 12 16.1 13.5 19.5 13.5C22 13.5 23.5 12 24 9C23 10.5 21.75 11 20.25 10.5C19.35 10.2 18.7 9.5 18 8.75C16.8 7.5 15.4 6 12 6ZM4.5 12C2 12 0.5 13.5 0 16.5C1 15 2.25 14.5 3.75 15C4.65 15.3 5.3 16 6 16.75C7.2 18 8.6 19.5 12 19.5C14.5 19.5 16 18 16.5 15C15.5 16.5 14.25 17 12.75 16.5C11.85 16.2 11.2 15.5 10.5 14.75C9.3 13.5 7.9 12 4.5 12Z" fill="#06B6D4" />
        </svg>
      );

    case 'nodejs':
    case 'node':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 2L3 7.2V17.6L12 22.8L21 17.6V7.2L12 2Z" fill="#333333" />
          <path d="M12 2.8L19.8 7.3V16.3L12 20.8L4.2 16.3V7.3L12 2.8Z" stroke="#5FA04E" strokeWidth="1.5" />
          <path d="M12 6.5L16.5 9.1V14.3L12 16.9L7.5 14.3V9.1L12 6.5Z" fill="#5FA04E" />
        </svg>
      );

    case 'express':
    case 'expressjs':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
          <text x="12" y="16" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ex</text>
        </svg>
      );

    case 'python':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M11.88 2C6.9 2 7.15 4.16 7.15 4.16L7.16 6.39H12.06V7.16H4.28C4.28 7.16 2 6.89 2 11.84C2 16.8 3.99 16.55 3.99 16.55H5.45V14.49C5.45 14.49 5.37 12.06 7.84 12.06H12.67C12.67 12.06 14.88 12.19 14.88 10.02V4.16C14.88 4.16 15.22 2 11.88 2ZM9.49 3.51C9.99 3.51 10.39 3.91 10.39 4.41C10.39 4.91 9.99 5.31 9.49 5.31C8.99 5.31 8.59 4.91 8.59 4.41C8.59 3.91 8.99 3.51 9.49 3.51Z" fill="#3776AB" />
          <path d="M12.12 22C17.1 22 16.85 19.84 16.85 19.84L16.84 17.61H11.94V16.84H19.72C19.72 16.84 22 17.11 22 12.16C22 7.2 20.01 7.45 20.01 7.45H18.55V9.51C18.55 9.51 18.63 11.94 16.16 11.94H11.33C11.33 11.94 9.12 11.81 9.12 13.98V19.84C9.12 19.84 8.78 22 12.12 22ZM14.51 20.49C14.01 20.49 13.61 20.09 13.61 19.59C13.61 19.09 14.01 18.69 14.51 18.69C15.01 18.69 15.41 19.09 15.41 19.59C15.41 20.09 15.01 20.49 14.51 20.49Z" fill="#FFD438" />
        </svg>
      );

    case 'flask':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M10 2H14V4H10V2Z" fill="#FFFFFF" />
          <path d="M11 4V9L6.5 17.5C5.8 18.8 6.7 20.5 8.2 20.5H15.8C17.3 20.5 18.2 18.8 17.5 17.5L13 9V4H11Z" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 16H16" stroke="#38BDF8" strokeWidth="1.6" />
          <circle cx="10" cy="18" r="0.8" fill="#38BDF8" />
          <circle cx="13.5" cy="17.5" r="0.8" fill="#38BDF8" />
        </svg>
      );

    case 'java':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M8.6 18.2C8.6 18.2 11.4 19.6 14.6 18.2C15.8 17.6 16.7 16.5 16.7 16.5C16.7 16.5 15.6 17.3 14.1 17.5C12.1 17.7 9.8 17.3 8.6 18.2Z" fill="#ED8B00" />
          <path d="M7 20.4C7 20.4 11 22.3 16.3 20.4C18 19.8 19.2 18.5 19.2 18.5C19.2 18.5 17.9 19.4 15.9 19.7C13.2 20 8.8 19.6 7 20.4Z" fill="#ED8B00" />
          <path d="M12.8 3C12.8 3 14.8 5.2 12.8 7.6C11 9.8 12.4 11.7 12.4 11.7C12.4 11.7 10 9.7 11.2 7.8C12.3 6.1 12.8 3 12.8 3Z" fill="#5382A1" />
          <path d="M16 6.8C16 6.8 17.5 8.5 15.9 10.6C14.4 12.6 14.2 14.1 14.2 14.1C14.2 14.1 13.8 12.4 15 11C16.2 9.5 16 6.8 16 6.8Z" fill="#ED8B00" />
          <path d="M12 15C8 15 6 16.5 6 16.5C6 16.5 7.8 15.7 12 15.7C16.2 15.7 18 16.5 18 16.5C18 16.5 16 15 12 15Z" fill="#5382A1" />
        </svg>
      );

    case 'springboot':
    case 'spring':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 2.5C6.75 2.5 2.5 6.75 2.5 12C2.5 17.25 6.75 21.5 12 21.5C17.25 21.5 21.5 17.25 21.5 12C21.5 6.75 17.25 2.5 12 2.5Z" fill="#6DB33F" />
          <path d="M17.5 8.5C15.8 8.1 14 8.7 13 10C12 11.3 12 13.1 12.8 14.6L12.5 14.9C11.5 14.2 10.2 14 9 14.5C7.5 15.1 6.6 16.6 6.6 18.2C8.3 18.6 10.1 18 11.1 16.7C12.1 15.4 12.1 13.6 11.3 12.1L11.6 11.8C12.6 12.5 13.9 12.7 15.1 12.2C16.6 11.6 17.5 10.1 17.5 8.5Z" fill="#FFFFFF" />
        </svg>
      );

    case 'postgresql':
    case 'postgres':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 3C8 3 5 5.5 5 9C5 11.2 6.2 13.1 8 14.2V19.5C8 20.3 8.7 21 9.5 21H14.5C15.3 21 16 20.3 16 19.5V14.2C17.8 13.1 19 11.2 19 9C19 5.5 16 3 12 3Z" fill="#4169E1" />
          <circle cx="9.5" cy="8.5" r="1.2" fill="#FFFFFF" />
          <circle cx="14.5" cy="8.5" r="1.2" fill="#FFFFFF" />
          <path d="M12 11V16" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case 'mysql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M19 12.5C18.2 10.1 16.3 8.3 14 7.5C12.1 6.8 9.9 7.2 8.3 8.4C6.5 9.8 5.5 12 5.7 14.2C5.9 16.5 7.4 18.4 9.5 19.3C11.5 20.2 13.9 20 15.7 18.8L19 19.5L18.2 16.5C18.8 15.3 19.1 13.9 19 12.5Z" fill="#00758F" />
          <circle cx="10" cy="11.5" r="1" fill="#F29111" />
          <path d="M14 13C13.5 14 12 14.5 11 14.2" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
        </svg>
      );

    case 'supabase':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M13.2 21.6C12.8 22.1 12 21.8 12 21.1V13.8H20.6C21.4 13.8 21.9 14.7 21.4 15.4L13.2 21.6Z" fill="#3ECF8E" />
          <path d="M10.8 2.4C11.2 1.9 12 2.2 12 2.9V10.2H3.4C2.6 10.2 2.1 9.3 2.6 8.6L10.8 2.4Z" fill="#24B47E" />
        </svg>
      );

    case 'git':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M21.6 10.9L13.1 2.4C12.6 1.9 11.8 1.9 11.3 2.4L9.5 4.2L11.8 6.5C12.3 6.3 13 6.5 13.4 6.9C13.8 7.3 14 8 13.8 8.6L16.1 10.9C16.7 10.7 17.4 10.9 17.8 11.3C18.4 11.9 18.4 12.9 17.8 13.5C17.2 14.1 16.2 14.1 15.6 13.5C15.2 13.1 15 12.4 15.2 11.8L13.1 9.7V14.6C13.3 14.8 13.4 15.2 13.4 15.5C13.4 16.5 12.6 17.3 11.6 17.3C10.6 17.3 9.8 16.5 9.8 15.5C9.8 14.7 10.3 14 11.1 13.8V8.9C10.3 8.7 9.8 8 9.8 7.2C9.8 6.8 9.9 6.5 10.1 6.2L7.8 3.9L2.4 9.3C1.9 9.8 1.9 10.6 2.4 11.1L10.9 19.6C11.4 20.1 12.2 20.1 12.7 19.6L21.6 10.9Z" fill="#F05032" />
        </svg>
      );

    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.446 4.87 20.198 8.84 21.524C9.34 21.617 9.52 21.306 9.52 21.036C9.52 20.798 9.51 20.016 9.51 19.18C6.73 19.784 6.14 17.842 6.14 17.842C5.68 16.674 5.03 16.363 5.03 16.363C4.12 15.742 5.1 15.755 5.1 15.755C6.1 15.827 6.63 16.787 6.63 16.787C7.52 18.318 8.97 17.876 9.54 17.62C9.63 16.974 9.89 16.533 10.17 16.284C7.95 16.031 5.62 15.172 5.62 11.341C5.62 10.25 6.01 9.358 6.65 8.66C6.55 8.409 6.21 7.391 6.75 6.027C6.75 6.027 7.59 5.758 9.5 7.054C10.3 6.832 11.15 6.721 12 6.717C12.85 6.721 13.7 6.832 14.5 7.054C16.41 5.758 17.25 6.027 17.25 6.027C17.79 7.391 17.45 8.409 17.35 8.66C17.99 9.358 18.38 10.25 18.38 11.341C18.38 15.182 16.04 16.028 13.81 16.276C14.17 16.586 14.49 17.199 14.49 18.141C14.49 19.497 14.48 20.592 14.48 20.923C14.48 21.196 14.65 21.512 15.17 21.411C19.14 20.081 22 16.335 22 11.905C22 6.484 17.523 2 12 2Z" />
        </svg>
      );

    case 'docker':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M2.5 12.8C2.5 12.8 3.5 11.8 5.5 11.8C6.5 11.8 7.5 12.2 8.5 12.2C10.5 12.2 11.5 11.2 13.5 11.2C15.5 11.2 16.5 12.2 18.5 12.2C19.8 12.2 20.8 11.7 21.5 11.2C22.2 12.4 22.4 14.1 21.8 15.7C20.6 19 16.8 21 12 21C6.2 21 2.8 17.5 2.5 12.8Z" fill="#2496ED" />
          <rect x="5.5" y="8.2" width="2" height="1.8" rx="0.3" fill="#2496ED" />
          <rect x="8" y="8.2" width="2" height="1.8" rx="0.3" fill="#2496ED" />
          <rect x="10.5" y="8.2" width="2" height="1.8" rx="0.3" fill="#2496ED" />
          <rect x="8" y="6" width="2" height="1.8" rx="0.3" fill="#2496ED" />
          <rect x="10.5" y="6" width="2" height="1.8" rx="0.3" fill="#2496ED" />
          <rect x="13" y="8.2" width="2" height="1.8" rx="0.3" fill="#2496ED" />
          <circle cx="19" cy="14" r="0.8" fill="#FFFFFF" />
        </svg>
      );

    case 'figma':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M8 2H12V7.33H8C6.53 7.33 5.33 6.13 5.33 4.67C5.33 3.2 6.53 2 8 2Z" fill="#F24E1E" />
          <path d="M12 2H16C17.47 2 18.67 3.2 18.67 4.67C18.67 6.13 17.47 7.33 16 7.33H12V2Z" fill="#FF7262" />
          <path d="M8 7.33H12V12.67H8C6.53 12.67 5.33 11.47 5.33 10C5.33 8.53 6.53 7.33 8 7.33Z" fill="#A259FF" />
          <path d="M12 7.33H16C17.47 7.33 18.67 8.53 18.67 10C18.67 11.47 17.47 12.67 16 12.67C14.53 12.67 13.33 11.47 13.33 10H12V7.33Z" fill="#1ABCFE" />
          <path d="M8 12.67H12V18C12 19.47 10.8 20.67 9.33 20.67C7.87 20.67 6.67 19.47 6.67 18C6.67 16.53 7.87 15.33 9.33 15.33C9.57 15.33 9.79 15.36 10 15.42V12.67H8Z" fill="#0ACF83" />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M10 9L15 12L10 15V9Z" fill="currentColor" />
        </svg>
      );
  }
};

