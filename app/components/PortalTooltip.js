import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useFloating, offset, flip, shift, autoUpdate } from '@floating-ui/react-dom';

export default function PortalTooltip({ children, tooltip }) {
  const [show, setShow] = useState(false);
  const {
    x,
    y,
    strategy,
    refs,
    floatingStyles,
    update,
  } = useFloating({
    placement: 'top',
    middleware: [offset(-25), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  // Update position when shown
  useEffect(() => {
    if (show && update) {
      update();
    }
  }, [show, update]);

  // Hide tooltip on scroll/touch outside (mobile UX)
  useEffect(() => {
    if (!show) return;
    function handleScrollOrTouch(e) {
      setShow(false);
    }
    window.addEventListener('scroll', handleScrollOrTouch, true);
    window.addEventListener('touchstart', handleScrollOrTouch, true);
    return () => {
      window.removeEventListener('scroll', handleScrollOrTouch, true);
      window.removeEventListener('touchstart', handleScrollOrTouch, true);
    };
  }, [show]);

  return (
    <>
      <span
        ref={refs.setReference}
        tabIndex={0}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        onTouchStart={() => setShow(true)}
        style={{ display: 'inline-block' }}
      >
        {children}
      </span>
      {show &&
        createPortal(
          <div
            ref={refs.setFloating}
            style={{
              ...floatingStyles,
              background: 'rgba(0,0,0,0.9)',
              color: 'white',
              fontSize: '0.8rem',
              padding: '0.15rem 0.5rem',
              borderRadius: '0.375rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
              maxWidth: '300px', // quick fix for overflow
              whiteSpace: 'normal',
              wordBreak: 'break-word',
              zIndex: 9999,
              pointerEvents: 'none',
              transition: 'opacity 0.15s',
              opacity: show ? 1 : 0,
            }}
          >
            {tooltip}
          </div>,
          document.body
        )}
    </>
  );
}