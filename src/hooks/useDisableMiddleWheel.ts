import { useEffect } from 'react';

export default function useDisableMiddleWheel() {
  useEffect(() => {
    const disableMiddleWheel = (e: MouseEvent) => {
      if (e.button === 1) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener("mousedown", disableMiddleWheel, { passive: false });

    return () => {
      document.removeEventListener("mousedown", disableMiddleWheel);
    }

  }, []);
}
