import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('interactive'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor-element hidden md:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Central Geometric Gold Dot */}
      <div
        className="fixed h-2 w-2 rounded-full bg-masonic-gold shadow-[0_0_8px_#c5a059] transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicked ? 0.6 : isHovered ? 1.5 : 1})`,
        }}
      />

      {/* Outer Sacred Geometry Ring */}
      <div
        className={`fixed rounded-full border border-masonic-gold/40 transition-all duration-300 ease-out ${
          isHovered
            ? 'h-10 w-10 border-masonic-gold bg-masonic-gold/10 scale-110 rotate-45'
            : 'h-7 w-7 scale-100 rotate-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicked ? 0.8 : isHovered ? 1.2 : 1}) rotate(${isHovered ? '45deg' : '0deg'})`,
        }}
      >
        {/* Subtle Crosshairs when hovered */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center opacity-60">
            <div className="h-full w-[1px] bg-masonic-gold/50" />
            <div className="h-[1px] w-full bg-masonic-gold/50 absolute" />
          </div>
        )}
      </div>
    </div>
  );
};
