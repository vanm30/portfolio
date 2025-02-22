"use client";

import { useDispatch, useSelector } from "react-redux";
import { useState, useLayoutEffect } from "react";
import { increaseSection, decreaseSection } from "@/dataMgr/globalSlice";
import { RootState } from "@/dataMgr/store";
import config from "@/configs/config.json";

export default function MouseWheelHandler() {
  const SCROLL_TIMER = config.Timers.Scroll;
  const dispatch = useDispatch();
  const curSection = useSelector((state: RootState) => state.global.curSection);
  const [isScrolling, setIsScrolling] = useState(false);

  useLayoutEffect(() => {
    const disableScroll = (e: WheelEvent) => {
      e.preventDefault();
    };

    window.addEventListener("wheel", disableScroll, { passive: false });

    const handleMouseWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      setIsScrolling(true);
      e.preventDefault();

      if (e.deltaY > 0) {
        dispatch(increaseSection());
      } else {
        dispatch(decreaseSection());
      }

      setTimeout(() => {
        setIsScrolling(false);
      }, SCROLL_TIMER);
    };

    window.addEventListener("wheel", handleMouseWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleMouseWheel);
      window.removeEventListener("wheel", disableScroll);
    };
  }, [dispatch, curSection, isScrolling, SCROLL_TIMER]);

  return null;
}
