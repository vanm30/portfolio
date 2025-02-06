import { useEffect, useState, useRef } from "react";

export default function BgFollowCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const smoothPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updatePosition = () => {
      const dx = position.x - smoothPosition.current.x;
      const dy = position.y - smoothPosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const smoothFactor = Math.min(0.1, Math.pow(distance, 0.1) / 101);

      smoothPosition.current.x += dx * smoothFactor;
      smoothPosition.current.y += dy * smoothFactor;

      if (distance > 0.5) {
        requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [position]);

  return (
    <div
      className="absolute top-0 left-0 w-full h-full z-[-1] pointer-events-none"
      style={{
        background: `radial-gradient(circle at ${smoothPosition.current.x}px ${smoothPosition.current.y}px, var(--background3), var(--background2), var(--background))`,
      }}
    ></div>
  );
}

