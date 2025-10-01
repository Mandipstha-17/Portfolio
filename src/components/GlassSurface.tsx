import React, { PropsWithChildren } from 'react';

type GlassSurfaceProps = PropsWithChildren<{
  className?: string;
}>;

const GlassSurface: React.FC<GlassSurfaceProps> = ({ className, children }) => {
  return (
    <div
      className={
        `bg-white/10 dark:bg-white/5 backdrop-blur-xl border-b border-white/20 dark:border-white/10 ` +
        `shadow-[0_8px_30px_rgba(0,0,0,0.12)] ` +
        (className ?? '')
      }
    >
      {children}
    </div>
  );
};

export default GlassSurface;


