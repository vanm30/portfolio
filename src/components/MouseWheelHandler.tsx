"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCurSection } from "@/dataMgr/globalSlice";
import { RootState } from "@/dataMgr/store";

export default function MouseWheelHandler() {
  const dispatch = useDispatch();
  const curSection = useSelector((state: RootState) => state.global.curSection);

  useEffect(() => {
    const handleMouseWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (e.deltaY > 0) {
        dispatch(setCurSection(curSection + 1));
      } else {
        dispatch(setCurSection(curSection - 1));
      }
    };

    window.addEventListener("wheel", handleMouseWheel);

    return () => {
      window.removeEventListener("wheel", handleMouseWheel);
    };
  }, [dispatch, curSection]);

  return null;
}


