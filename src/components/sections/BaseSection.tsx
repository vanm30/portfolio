import { ReactNode } from 'react';
import cslx from "clsx";

interface IBaseSection {
  children: ReactNode;
  className?: string;
  sectionIndex: number;
}

export default function BaseSection({ children, className, sectionIndex }: IBaseSection) {

  return (
    <div
      id={`section-${sectionIndex}`}
      className={cslx("flex flex-col gap-8 h-full items-center py-8 px-14 ", className)}
    >
      {children}
    </div>
  );
}
