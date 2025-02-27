import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { increaseSection, decreaseSection } from "@/dataMgr/globalSlice";
import config from "@/configs/config.json";

export default function useMouseWheelHandler() {
  const SCROLL_TIMER = config.Timers.Scroll;
  const dispatch = useDispatch();

  const isScrolling = useRef(false);

  useEffect(() => {
    const handleMouseWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      isScrolling.current = true;
      e.preventDefault();
      if (e.deltaY > 0) {
        dispatch(increaseSection());
      } else {
        dispatch(decreaseSection());
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, SCROLL_TIMER);
    };

    window.addEventListener("wheel", handleMouseWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleMouseWheel);
    };
  }, [dispatch, SCROLL_TIMER]);
  return null;
}

