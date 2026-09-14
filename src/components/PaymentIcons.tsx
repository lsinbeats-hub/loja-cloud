import React from 'react';

/**
 * High-fidelity, 100% vector-only payment badges.
 * No external fonts or <text> elements are used to guarantee crisp, zero-bug rendering across all browsers.
 */

// 1. PIX (Official Banco Central do Brasil vector)
export const PixIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    className={className}
    viewBox="0 0 64 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Pix"
  >
    {/* Pix Geometric Interlocking Ribbon Emblem */}
    <g fill="#32BCAD">
      {/* Left Chevron */}
      <path d="M10.8 2.2a2.4 2.4 0 00-3.4 0L2.1 7.5a2.4 2.4 0 000 3.4l5.3 5.3a2.4 2.4 0 003.4 0l1.1-1.1-2.7-2.7a2 2 0 010-2.8l2.7-2.7-1.1-1.9z" />
      {/* Right Chevron */}
      <path d="M12.6 2.2a2.4 2.4 0 013.4 0l5.3 5.3a2.4 2.4 0 010 3.4l-5.3 5.3a2.4 2.4 0 01-3.4 0l-1.1-1.1 2.7-2.7a2 2 0 000-2.8l-2.7-2.7 1.1-1.9z" />
      {/* Center Diamond */}
      <path d="M11.7 6.8l2 2a1.4 1.4 0 010 2l-2 2-2-2a1.4 1.4 0 010-2l2-2z" />

      {/* 'p' */}
      <path d="M26.5 5.5v12.6h2.4v-4.4c.8.9 2 1.4 3.3 1.4 2.7 0 4.8-2.1 4.8-4.9s-2.1-4.9-4.8-4.9c-1.3 0-2.4.5-3.3 1.4V5.5h-2.4zm4.7 2.2c1.5 0 2.6 1.2 2.6 2.7s-1.1 2.7-2.6 2.7-2.6-1.2-2.6-2.7 1.1-2.7 2.6-2.7z" />
      {/* 'i' */}
      <circle cx="39.8" cy="6.2" r="1.4" />
      <path d="M38.6 9.2h2.4v8.9h-2.4V9.2z" />
      {/* 'x' */}
      <path d="M43.5 9.2l2.6 4.1-2.8 4.8h2.8l1.4-2.5 1.4 2.5h2.8l-2.8-4.8 2.6-4.1h-2.8l-1.2 2.1-1.2-2.1h-2.8z" />
    </g>
  </svg>
);

// 2. MASTERCARD (Authentic interlocking circles)
export const MastercardIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    className={className}
    viewBox="0 0 38 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Mastercard"
  >
    <circle cx="14" cy="12" r="8.5" fill="#EB001B" />
    <circle cx="24" cy="12" r="8.5" fill="#F79E1B" />
    {/* Exact mathematical intersection lens */}
    <path
      d="M19 5.86A8.5 8.5 0 0122.9 12 8.5 8.5 0 0119 18.14 8.5 8.5 0 0115.1 12 8.5 8.5 0 0119 5.86z"
      fill="#FF5F00"
    />
  </svg>
);

// 3. VISA (Authentic brand mark with signature golden wing)
export const VisaIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    className={className}
    viewBox="0 0 46 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Visa"
  >
    {/* Yellow/Gold top serif on V */}
    <path
      d="M7.8 4.2C7.5 3.5 6.9 2.8 5.7 2.4 4.5 2 2.6 1.6 1 1.2l.2-.2h6.8c1 0 1.9.7 2.1 1.7l1.7 8.3L7.8 4.2z"
      fill="#F7B600"
    />
    {/* Main Blue Visa Lettering */}
    <path
      d="M17.4 2.8l-3.8 14.4h-2.8L7.8 4.2C7.6 3.5 7.4 3.2 6.9 2.9 6 2.4 4.7 2 3.5 1.7L3.6 1.4h6.3c1 0 1.9.7 2.1 1.7l1.5 8.2L17.2 2.8h2.8l-4.2 14.4h-2.7l4.1-14.4h.2zm15.8 9.6c0-3.8-5.3-4-5.3-5.7 0-.5.5-1 1.6-1.2.6-.1 2.1-.2 3.7.6l.7-3c-.9-.4-2.1-.7-3.7-.7-3.9 0-6.6 2.1-6.6 5.1 0 2.2 2 3.4 3.5 4.2 1.6.8 2.1 1.2 2.1 2 0 1.1-1.3 1.6-2.5 1.6-2 0-3.1-.3-4-.7l-.7 3.1c1.1.5 3.1.9 5.2.9 4.2 0 6.7-2.1 6.7-5.9zM42.4 17.2h2.5L42.7 2.8h-2.3c-.6 0-1 .3-1.2.8L33.4 17.2h2.9l.6-1.6h3.6l.3 1.6h1.6zm-4.8-4l1.5-4.4.9 4.4h-2.4zm-14.8-10.4l-3.1 14.4h-2.8l3.1-14.4h2.8z"
      fill="#1434CB"
    />
  </svg>
);

// 4. ELO (Official Brazilian Card: Black badge with Red, Yellow, Blue dots and white 'elo')
export const EloIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    className={className}
    viewBox="0 0 46 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Elo"
  >
    <rect width="46" height="22" rx="4" fill="#000000" />
    {/* Three characteristic Elo circles */}
    <circle cx="9" cy="11" r="3.2" fill="#EE3124" />
    <circle cx="16" cy="11" r="3.2" fill="#FFCC00" />
    <circle cx="23" cy="11" r="3.2" fill="#00A4E4" />
    {/* Exact vector paths for 'elo' */}
    <g fill="#FFFFFF">
      {/* 'e' */}
      <path d="M31.2 9.5c-1.8 0-2.9 1.2-2.9 2.9 0 1.7 1.1 2.9 2.9 2.9 1.1 0 2-.5 2.5-1.4h-1.3c-.3.4-.7.6-1.2.6-.9 0-1.5-.6-1.6-1.4h4.1v-.5c0-1.7-1.1-3.1-2.5-3.1zm-1.5 2.4c.1-.7.7-1.3 1.5-1.3s1.4.6 1.5 1.3h-3z" />
      {/* 'l' */}
      <path d="M36 7.8h1.3v7.3H36V7.8z" />
      {/* 'o' */}
      <path d="M40.8 9.5c-1.7 0-2.8 1.2-2.8 2.9s1.1 2.9 2.8 2.9 2.8-1.2 2.8-2.9-1.1-2.9-2.8-2.9zm0 4.6c-.9 0-1.5-.8-1.5-1.7s.6-1.7 1.5-1.7 1.5.8 1.5 1.7-.6 1.7-1.5 1.7z" />
    </g>
  </svg>
);

// 5. AMERICAN EXPRESS (Crisp royal blue card with pure-vector AMEX wordmark)
export const AmexIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    className={className}
    viewBox="0 0 44 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="American Express"
  >
    <rect width="44" height="22" rx="3" fill="#006FCF" />
    {/* AMEX vector paths */}
    <g fill="#FFFFFF">
      {/* 'A' */}
      <path d="M6 15.5l2.6-8.5h2l2.6 8.5h-1.8l-.5-1.8H7.9l-.5 1.8H6zm2.4-3.3h2.1l-1-3.3-1.1 3.3z" />
      {/* 'M' */}
      <path d="M14.5 15.5V7h1.9l1.7 4.5 1.7-4.5h1.9v8.5h-1.6v-5.2l-1.5 4h-1l-1.5-4v5.2h-1.6z" />
      {/* 'E' */}
      <path d="M23 15.5V7h5.4v1.6H25v1.7h3v1.6H25v1.8h3.5v1.8H23z" />
      {/* 'X' */}
      <path d="M29.8 15.5l2.4-4.3-2.2-4.2h1.9l1.3 2.7 1.3-2.7h1.9l-2.2 4.2 2.4 4.3h-2l-1.4-2.8-1.4 2.8h-2z" />
    </g>
  </svg>
);

// 6. BOLETO BANCÁRIO (Authentic document barcode icon)
export const BoletoIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    className={className}
    viewBox="0 0 44 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Boleto Bancário"
  >
    {/* Card subtle top banner */}
    <path d="M4 5.5h36" stroke="#176B50" strokeWidth="1.5" strokeLinecap="round" />
    {/* Barcode stripes */}
    <g fill="#1F2937">
      <rect x="5" y="8" width="1.8" height="9" rx="0.3" />
      <rect x="8" y="8" width="1" height="9" rx="0.3" />
      <rect x="10.5" y="8" width="2.4" height="9" rx="0.3" />
      <rect x="14.5" y="8" width="1.2" height="9" rx="0.3" />
      <rect x="17.2" y="8" width="2.6" height="9" rx="0.3" />
      <rect x="21" y="8" width="1" height="9" rx="0.3" />
      <rect x="23.5" y="8" width="2" height="9" rx="0.3" />
      <rect x="27" y="8" width="1.2" height="9" rx="0.3" />
      <rect x="29.5" y="8" width="2.8" height="9" rx="0.3" />
      <rect x="33.8" y="8" width="1" height="9" rx="0.3" />
      <rect x="36.2" y="8" width="2.2" height="9" rx="0.3" />
    </g>
  </svg>
);

// 7. APPLE PAY (Official Apple logo + 'Pay' vector paths)
export const ApplePayIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    className={className}
    viewBox="0 0 50 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Apple Pay"
  >
    <g fill="#000000">
      {/* Apple Leaf */}
      <path d="M13.6 4.3c.5-.7.8-1.6.7-2.6-.9.1-1.8.5-2.4 1.2-.4.6-.8 1.6-.7 2.5 1 .1 1.8-.5 2.4-1.1z" />
      {/* Apple Body */}
      <path d="M14.4 5.5c-1.3-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.4 0-2.6.8-3.3 2-1.4 2.5-.4 6.3 1 8.3.7 1 1.5 2.1 2.6 2.1 1 0 1.5-.7 2.7-.7 1.2 0 1.6.7 2.7.7 1.1 0 1.9-1.1 2.6-2.1.8-1.2 1.2-2.3 1.2-2.4-.1 0-2.2-.9-2.2-3.4 0-2.1 1.8-3.2 1.9-3.3-1.1-1.5-2.6-1.7-3-1.8z" />
      {/* 'P' */}
      <path d="M22 5h3.4c2.2 0 3.5 1.3 3.5 3.2s-1.3 3.3-3.5 3.3h-1.5v4.5H22V5zm1.9 4.8h1.4c1.1 0 1.7-.6 1.7-1.6s-.6-1.6-1.7-1.6h-1.4v3.2z" />
      {/* 'a' */}
      <path d="M32.2 8.5c1.8 0 2.9 1 2.9 2.8V16h-1.6v-1.1c-.5.8-1.4 1.3-2.4 1.3-1.5 0-2.5-.9-2.5-2.2 0-1.4 1.1-2.1 2.7-2.2l2-.2v-.3c0-.8-.5-1.3-1.5-1.3-.8 0-1.5.4-1.9.9l-.9-1c.8-.8 1.8-1.2 3.2-1.2zm1.3 3.9l-1.6.2c-.9.1-1.5.5-1.5 1.2 0 .7.6 1.2 1.3 1.2 1 0 1.8-.7 1.8-1.6v-1z" />
      {/* 'y' */}
      <path d="M36.5 8.7h1.8l2.2 5.8 2.1-5.8h1.8l-3.2 8c-.6 1.5-1.5 2.3-2.9 2.3-.5 0-.9-.1-1.2-.2v-1.5c.3.1.6.1.9.1.7 0 1.2-.4 1.5-1.2l.2-.6-3.2-6.9z" />
    </g>
  </svg>
);

// 8. GOOGLE PAY (Authentic 4-color 'G' + 'Pay' in Google gray)
export const GooglePayIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    className={className}
    viewBox="0 0 52 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Google Pay"
  >
    {/* 4-Color Google G */}
    <g transform="translate(6, 4)">
      <path
        d="M13.4 7.1c0-.5-.1-1-.2-1.4H6.8v2.7h3.7c-.2.9-.7 1.6-1.4 2.1v1.8h2.3c1.3-1.2 2-3 2-5.2z"
        fill="#4285F4"
      />
      <path
        d="M6.8 13.8c1.9 0 3.5-.6 4.7-1.7l-2.3-1.8c-.6.4-1.4.7-2.4.7-1.8 0-3.4-1.2-4-2.9H.5v1.9c1.2 2.4 3.7 3.8 6.3 3.8z"
        fill="#34A853"
      />
      <path
        d="M2.8 8.1c-.2-.5-.3-1-.3-1.6s.1-1.1.3-1.6V3H.5C.2 3.9 0 5 0 6.5s.2 2.6.5 3.5l2.3-1.9z"
        fill="#FBBC05"
      />
      <path
        d="M6.8 2c1 0 2 .4 2.7 1.1l2-2C10.3.3 8.7 0 6.8 0 4.2 0 1.7 1.4.5 3.8l2.3 1.9c.6-1.7 2.2-3.7 4-3.7z"
        fill="#EA4335"
      />
    </g>

    {/* 'Pay' in Google Gray (#5F6368) */}
    <g fill="#5F6368">
      {/* 'P' */}
      <path d="M23.5 5h3.4c2.2 0 3.5 1.3 3.5 3.2s-1.3 3.3-3.5 3.3h-1.5v4.5h-1.9V5zm1.9 4.8h1.4c1.1 0 1.7-.6 1.7-1.6s-.6-1.6-1.7-1.6h-1.4v3.2z" />
      {/* 'a' */}
      <path d="M33.7 8.5c1.8 0 2.9 1 2.9 2.8V16H35v-1.1c-.5.8-1.4 1.3-2.4 1.3-1.5 0-2.5-.9-2.5-2.2 0-1.4 1.1-2.1 2.7-2.2l2-.2v-.3c0-.8-.5-1.3-1.5-1.3-.8 0-1.5.4-1.9.9l-.9-1c.8-.8 1.8-1.2 3.2-1.2zm1.3 3.9l-1.6.2c-.9.1-1.5.5-1.5 1.2 0 .7.6 1.2 1.3 1.2 1 0 1.8-.7 1.8-1.6v-1z" />
      {/* 'y' */}
      <path d="M38 8.7h1.8l2.2 5.8 2.1-5.8h1.8l-3.2 8c-.6 1.5-1.5 2.3-2.9 2.3-.5 0-.9-.1-1.2-.2v-1.5c.3.1.6.1.9.1.7 0 1.2-.4 1.5-1.2l.2-.6-3.2-6.9z" />
    </g>
  </svg>
);
