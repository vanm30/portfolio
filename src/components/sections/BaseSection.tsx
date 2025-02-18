import { ReactNode } from "react";
import cslx from "clsx";


interface IBaseSection {
  children: ReactNode;
  className?: string;
}

export default function BaseSection({ children, className }: IBaseSection) {
  return (
    <div className={cslx("flex flex-col gap-8 h-full items-center px-14 snap-start", className)}>
      {children}
    </div>
  );
}
