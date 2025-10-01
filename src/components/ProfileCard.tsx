import React, { MouseEvent, TouchEvent, useRef } from 'react';

interface ProfileCardProps {
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  avatarUrl: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  onContactClick?: () => void;
  alt?: string;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  handle,
  status,
  contactText,
  avatarUrl,
  showUserInfo = true,
  enableTilt = false,
  enableMobileTilt = false,
  onContactClick,
  alt = 'Profile image',
  className
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  const applyTilt = (xPercent: number, yPercent: number) => {
    if (!rootRef.current) return;
    const maxRotate = 10;
    const rotateY = (xPercent - 0.5) * maxRotate * 2;
    const rotateX = (0.5 - yPercent) * maxRotate * 2;
    rootRef.current.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  };

  const resetTilt = () => {
    if (!rootRef.current) return;
    rootRef.current.style.transform = '';
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!enableTilt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    applyTilt(x / rect.width, y / rect.height);
  };

  const handleMouseLeave = () => {
    if (!enableTilt) return;
    resetTilt();
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!enableTilt || !enableMobileTilt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    applyTilt(x / rect.width, y / rect.height);
  };

  const handleTouchEnd = () => {
    if (!enableTilt || !enableMobileTilt) return;
    resetTilt();
  };

  return (
    <div
      ref={rootRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative rounded-2xl overflow-hidden will-change-transform ring-1 ring-gray-200 dark:ring-white/10 ${className ?? ''}`}
    >
      <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-purple-500/30 via-indigo-500/20 to-fuchsia-500/30 blur-sm" />
      <div className="absolute inset-0 backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl" />
      <img src={avatarUrl} alt={alt} className="relative z-10 w-full h-full object-cover" />
      {showUserInfo && (
        <div className="absolute inset-x-0 bottom-0 z-20 p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent text-white">
          <div className="flex items-end justify-between gap-3">
            <div>
              {name && <p className="text-base font-semibold leading-none">{name}</p>}
              {(title || handle) && (
                <p className="text-xs opacity-90 mt-1">
                  {title}
                  {title && handle ? ' • ' : ''}
                  {handle ? `@${handle}` : ''}
                </p>
              )}
              {status && <p className="mt-1 text-[11px] opacity-80">{status}</p>}
            </div>
            {contactText && (
              <button
                type="button"
                onClick={onContactClick}
                className="shrink-0 text-xs px-3 py-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur border border-white/30 transition-colors"
              >
                {contactText}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;


