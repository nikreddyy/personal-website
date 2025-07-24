import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function PortalTooltip({ children, tooltip }) {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0, width: 0 });
  const ref = useRef();

  useEffect(() => {
    if (show && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setCoords({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, width: rect.width });
    }
  }, [show]);

  return (
    <>
      <span
        ref={ref}
        tabIndex={0}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        style={{ display: 'inline-block' }}
      >
        {children}
      </span>
      {show &&
        createPortal(
          <div
            style={{
              position: 'fixed',
              left: coords.x,
              top: coords.y - 10,
              transform: 'translate(-50%, -50%)',
              background: 'rgba(0,0,0,0.9)',
              color: 'white',
              fontSize: '0.8rem',
              padding: '0.15rem 0.5rem',
              borderRadius: '0.375rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
              maxWidth: '90vw',
              whiteSpace: 'normal',
              wordBreak: 'break-word',
              zIndex: 9999,
              pointerEvents: 'none'
            }}
          >
            {tooltip}
          </div>,
          document.body
        )}
    </>
  );
}